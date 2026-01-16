const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Path to courses data
const COURSES_FILE = path.join(__dirname, '../src/data/courses.json');

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

// Routes

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
      id: courses[index].id // Keep original ID
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
