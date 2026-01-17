const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Path to data files
const COURSES_FILE = path.join(__dirname, '../src/data/courses.json');
const USERS_FILE = path.join(__dirname, 'data/users.json');
const ENROLLMENTS_FILE = path.join(__dirname, 'data/enrollments.json');

// Helper function to read courses
async function readCourses() {
  try {
    const data = await fs.readFile(COURSES_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading courses:', error);
    return [];
  }
}

// Helper function to write courses
async function writeCourses(courses) {
  try {
    await fs.writeFile(COURSES_FILE, JSON.stringify(courses, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing courses:', error);
    return false;
  }
}

// Helper function to read users
async function readUsers() {
  try {
    const data = await fs.readFile(USERS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Helper function to write users
async function writeUsers(users) {
  try {
    await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing users:', error);
    return false;
  }
}

// Helper function to read enrollments
async function readEnrollments() {
  try {
    const data = await fs.readFile(ENROLLMENTS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Helper function to write enrollments
async function writeEnrollments(enrollments) {
  try {
    await fs.writeFile(ENROLLMENTS_FILE, JSON.stringify(enrollments, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing enrollments:', error);
    return false;
  }
}

// Routes

// Auth Routes

// Register new user
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    
    const users = await readUsers();
    
    // Check if user already exists
    if (users.find(u => u.email === email)) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    const newUser = {
      id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
      name,
      email,
      password, 
      phone,
      role: 'user',
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    await writeUsers(users);
    
    // Return user without password
    const { password: _, ...userWithoutPassword } = newUser;
    res.status(201).json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
});

// Login user
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const users = await readUsers();
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Return user without password
    const { password: _, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ error: 'Failed to login' });
  }
});

// Google OAuth login/register
app.post('/api/auth/google', async (req, res) => {
  try {
    const { email, name, image, googleId } = req.body;
    
    const users = await readUsers();
    let user = users.find(u => u.email === email);
    
    if (user) {
      // Update existing user with Google info
      user.googleId = googleId;
      user.image = image;
      user.name = name; // Update name in case it changed
      await writeUsers(users);
      
      const { password, ...userWithoutPassword } = user;
      res.json(userWithoutPassword);
    } else {
      // Create new user from Google OAuth
      const newUser = {
        id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
        name,
        email,
        googleId,
        image,
        role: 'user',
        createdAt: new Date().toISOString()
      };
      
      users.push(newUser);
      await writeUsers(users);
      
      res.status(201).json(newUser);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to process Google authentication' });
  }
});

// Get all users (Admin only)
app.get('/api/users', async (req, res) => {
  try {
    const users = await readUsers();
    const enrollments = await readEnrollments();
    
    // Add enrollment count to each user
    const usersWithCount = users.map(user => {
      const { password, ...userWithoutPassword } = user;
      return {
        ...userWithoutPassword,
        enrollmentCount: enrollments.filter(e => e.userId === user.id).length
      };
    });
    
    res.json(usersWithCount);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Update user (Admin only)
app.patch('/api/users/:id', async (req, res) => {
  try {
    const users = await readUsers();
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    
    if (index === -1) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    users[index] = {
      ...users[index],
      ...req.body,
      id: users[index].id 
    };
    
    await writeUsers(users);
    
    const { password, ...userWithoutPassword } = users[index];
    res.json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// Delete user (Admin only)
app.delete('/api/users/:id', async (req, res) => {
  try {
    const users = await readUsers();
    const filteredUsers = users.filter(u => u.id !== parseInt(req.params.id));
    
    if (users.length === filteredUsers.length) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    await writeUsers(filteredUsers);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
});

// Get user details with enrollments
app.get('/api/users/:id', async (req, res) => {
  try {
    const users = await readUsers();
    const user = users.find(u => u.id === parseInt(req.params.id));
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const enrollments = await readEnrollments();
    const courses = await readCourses();
    
    const userEnrollments = enrollments
      .filter(e => e.userId === user.id)
      .map(e => ({
        ...e,
        course: courses.find(c => c.id === e.courseId)
      }));
    
    const { password, ...userWithoutPassword } = user;
    res.json({
      ...userWithoutPassword,
      enrollments: userEnrollments
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user details' });
  }
});

// Course Routes

// Get all courses
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await readCourses();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// Get single course by ID
app.get('/api/courses/:id', async (req, res) => {
  try {
    const courses = await readCourses();
    const course = courses.find(c => c.id === parseInt(req.params.id));
    
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch course' });
  }
});

// Create new course (Admin only)
app.post('/api/courses', async (req, res) => {
  try {
    const courses = await readCourses();
    
    // Generate new ID
    const newId = courses.length > 0 
      ? Math.max(...courses.map(c => c.id)) + 1 
      : 1;
    
    // Create slug from name
    const slug = req.body.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    const newCourse = {
      id: newId,
      slug,
      name: req.body.name,
      description: req.body.description,
      price: parseFloat(req.body.price),
      image: req.body.image,
      instructor: req.body.instructor,
      duration: req.body.duration,
      level: req.body.level,
      category: req.body.category,
      highlights: req.body.highlights || [],
      students: 0,
      rating: 0
    };
    
    courses.push(newCourse);
    
    const success = await writeCourses(courses);
    
    if (success) {
      res.status(201).json(newCourse);
    } else {
      res.status(500).json({ error: 'Failed to create course' });
    }
  } catch (error) {
    console.error('Error creating course:', error);
    res.status(500).json({ error: 'Failed to create course' });
  }
});

// Update course (Admin only)
app.put('/api/courses/:id', async (req, res) => {
  try {
    const courses = await readCourses();
    const index = courses.findIndex(c => c.id === parseInt(req.params.id));
    
    if (index === -1) {
      return res.status(404).json({ error: 'Course not found' });
    }
    
    courses[index] = {
      ...courses[index],
      ...req.body,
      id: courses[index].id 
    };
    
    const success = await writeCourses(courses);
    
    if (success) {
      res.json(courses[index]);
    } else {
      res.status(500).json({ error: 'Failed to update course' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update course' });
  }
});

// Delete course (Admin only)
app.delete('/api/courses/:id', async (req, res) => {
  try {
    const courses = await readCourses();
    const filteredCourses = courses.filter(c => c.id !== parseInt(req.params.id));
    
    if (courses.length === filteredCourses.length) {
      return res.status(404).json({ error: 'Course not found' });
    }
    
    const success = await writeCourses(filteredCourses);
    
    if (success) {
      res.json({ message: 'Course deleted successfully' });
    } else {
      res.status(500).json({ error: 'Failed to delete course' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete course' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
