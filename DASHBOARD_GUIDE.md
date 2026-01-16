# SkillShelf Dashboard System

Complete dashboard system with user and admin panels.

## Features

### User Dashboard
- View learning statistics
- Browse enrolled courses
- Track course progress
- Manage profile settings
- Change password

### Admin Dashboard
- View platform statistics
- Manage all users
- Add new courses
- View user enrollments
- Change user roles

## File Structure

```
src/
├── app/
│   └── (withDashboardLayout)/
│       ├── layout.jsx                    # Protected layout with sidebar
│       └── dashboard/
│           ├── page.jsx                  # Main dashboard (user/admin)
│           ├── myCourse/
│           │   └── page.jsx              # User: My courses page
│           ├── myProfile/
│           │   └── page.jsx              # Profile management
│           ├── addCourse/
│           │   └── page.jsx              # Admin: Add new course
│           └── users/
│               └── page.jsx              # Admin: Manage users
├── components/
│   └── shared/
│       └── DashboardSidebar.jsx          # Responsive sidebar component
└── data/
    └── courses.json                      # Course data storage

backend/
├── server.js                             # Express.js API server
├── package.json                          # Backend dependencies
└── README.md                             # Backend documentation
```

## Login Credentials

### Admin Account
- Email: `admin@skillshelf.com`
- Password: `admin123`
- Access: Full admin panel with all features

### User Account
- Email: `user@skillshelf.com`
- Password: `user123`
- Access: User dashboard with course management

## Dashboard Routes

### User Routes
- `/dashboard` - Main dashboard with statistics
- `/dashboard/myCourse` - View enrolled courses
- `/dashboard/myProfile` - Manage profile and password

### Admin Routes
- `/dashboard` - Admin dashboard with platform stats
- `/dashboard/users` - Manage all users
- `/dashboard/addCourse` - Add new courses
- `/dashboard/myProfile` - Admin profile settings

## Features Explained

### 1. Protected Routes
All dashboard routes are protected. Users must be logged in to access them.

```javascript
// Layout checks authentication
useEffect(() => {
  const currentUser = getUserFromCookies();
  
  if (!currentUser) {
    router.push('/login');
  }
}, [router]);
```

### 2. Role-Based Access
Admin and user see different sidebar menus and pages.

```javascript
// Sidebar shows different menus based on role
const menuItems = userRole === 'admin' ? adminMenuItems : userMenuItems;
```

### 3. Responsive Sidebar
- Desktop: Always visible
- Mobile: Toggle with hamburger menu
- Smooth animations and transitions

### 4. Add Course (Admin Only)
Admins can add courses through a form that:
- Validates all required fields
- Sends data to Express.js backend
- Updates courses.json file
- Redirects to dashboard on success

### 5. Manage Users (Admin Only)
Admins can:
- View all registered users
- Change user roles (user/admin)
- Delete users
- View user details and enrollments

## Backend Setup

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Start Server
```bash
npm start
```

Or with auto-reload:
```bash
npm run dev
```

### 3. API Endpoints
- `GET /api/courses` - Get all courses
- `POST /api/courses` - Create course
- `PUT /api/courses/:id` - Update course
- `DELETE /api/courses/:id` - Delete course

## How to Use

### As a User
1. Login with user credentials
2. View dashboard statistics
3. Browse available courses
4. Enroll in courses (coming soon)
5. Track progress in "My Courses"
6. Update profile settings

### As an Admin
1. Login with admin credentials
2. View platform statistics
3. Add new courses via form
4. Manage user accounts
5. Change user roles
6. View user enrollments

## Adding New Features

### Add New Sidebar Menu Item
Edit `src/components/shared/DashboardSidebar.jsx`:

```javascript
const userMenuItems = [
  { href: '/dashboard/new-page', label: 'New Page', icon: IconName }
];
```

### Add New Dashboard Page
1. Create file: `src/app/(withDashboardLayout)/dashboard/new-page/page.jsx`
2. Add route to sidebar menu
3. Implement page content

### Add Backend Endpoint
Edit `backend/server.js`:

```javascript
app.get('/api/new-endpoint', async (req, res) => {
  // Your logic here
});
```

## Styling

The dashboard uses:
- Brand colors: `#17a2b7` (primary), `#24292d` (secondary), `#f7c32f` (accent)
- Dark mode support
- Responsive design
- Lucide React icons
- Tailwind CSS

## Notes

- Authentication uses cookies (not NextAuth)
- Data stored in JSON file (use database for production)
- No real enrollment system yet (mock data)
- Backend has no authentication (add JWT for production)
- CORS enabled for all origins (restrict in production)

## Next Steps

To make this production-ready:
1. Add database (MongoDB, PostgreSQL)
2. Implement JWT authentication
3. Add real enrollment system
4. Add course progress tracking
5. Add payment integration
6. Add email notifications
7. Add file upload for course images
8. Add course content management
9. Add student reviews and ratings
10. Add search and filter functionality
