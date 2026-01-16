# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Start the Next.js App
```bash
npm run dev
```
Visit: http://localhost:3000

### Step 2: Login
Use these credentials:

**Admin Account:**
- Email: `admin@skillshelf.com`
- Password: `admin123`

**User Account:**
- Email: `user@skillshelf.com`
- Password: `user123`

### Step 3: Explore Dashboard
After login, you'll be redirected to the dashboard with sidebar navigation.

## 🎯 What You Can Do

### As a User
- ✅ View dashboard statistics
- ✅ Browse "My Courses" (currently empty)
- ✅ Update profile information
- ✅ Change password
- ✅ Browse available courses

### As an Admin
- ✅ View platform statistics
- ✅ Manage all users (view, change roles, delete)
- ✅ Add new courses (requires backend)
- ✅ Update profile settings

## 🔧 Optional: Start Backend (for Add Course feature)

```bash
cd backend
npm install
npm start
```

Backend runs on: http://localhost:5000

Now admins can add courses through the dashboard form!

## 📱 Features

- Responsive sidebar (mobile + desktop)
- Dark mode support
- Protected routes
- Role-based access
- Clean UI with brand colors
- Form validation
- Success/error messages

## 🎨 Brand Colors

- Primary: `#17a2b7` (teal)
- Secondary: `#24292d` (dark gray)
- Accent: `#f7c32f` (yellow)

## 📚 Documentation

- `DASHBOARD_GUIDE.md` - Complete feature documentation
- `IMPLEMENTATION_SUMMARY.md` - Technical details
- `backend/README.md` - Backend API documentation

## 🐛 Troubleshooting

**Can't access dashboard?**
- Make sure you're logged in
- Check cookies are enabled

**Add Course not working?**
- Start the backend server first
- Check backend is running on port 5000

**Sidebar not showing on mobile?**
- Click the hamburger menu icon (top left)

## 📝 Next Steps

1. Test user dashboard flow
2. Test admin dashboard flow
3. Try adding a course (with backend running)
4. Customize colors/styling as needed
5. Add database for production use

Enjoy building with SkillShelf! 🎓
