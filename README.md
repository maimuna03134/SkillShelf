# SkillShelf - Online Course Platform

SkillShelf is a modern online course listing platform where users can browse courses, view details, and admins can manage courses and users. Built with Next.js 16, NextAuth.js, and Express.js.

## 📁 Project Structure

This repository contains both frontend and backend applications in separate folders:

- **`skillshelf-frontend/`** - Next.js 16 frontend application
- **`skillshelf-backend/`** - Express.js backend API

Each folder is a complete, deployable application with its own dependencies and configuration.

## ✨ Key Features

### Authentication & Authorization
- **NextAuth.js Integration**: Secure JWT-based authentication with credentials provider
- **Google OAuth**: Social login integration
- **Mock Users (Read-Only)**: Demo accounts for testing without making changes
- **Real Users**: Register and login with full CRUD permissions
- **Role-Based Access**: Different permissions for users and admins
- **Protected Routes**: Dashboard pages require authentication

### User Features
- Browse all available courses with search and filter
- View detailed course information
- User dashboard with statistics
- Profile management
- Dark/Light theme toggle
- Responsive design for all devices

### Admin Features
- Admin dashboard with platform statistics
- Add new courses (real admins only)
- Manage users (view, change roles, delete)
- View user enrollments and details
- Read-only mode for mock admin accounts

### Course Management
- **Search**: Real-time search across course name, description, and instructor
- **Filter by Category**: Web Development, Data Science, Design, Marketing, etc.
- **Filter by Level**: Beginner, Intermediate, Advanced, All Levels
- **Filter by Price**: Free, Under $50, $50-$100, Over $100
- **Active Filter Tags**: Visual indicators with easy removal
- **Dynamic Results**: Live count updates as filters change

### UI/UX Features
- Modern gradient hero sections
- Smooth animations and transitions
- Loading states and skeleton screens
- 404 error page
- Mobile-friendly navigation with hamburger menu
- Sticky navbar with user dropdown
- Sidebar navigation in dashboard

## 🛠️ Tech Stack

- **Frontend**: Next.js 16 (App Router), React 18
- **Styling**: Tailwind CSS, DaisyUI
- **Authentication**: NextAuth.js
- **Backend**: Express.js
- **Database**: JSON file storage (users.json, courses.json, enrollments.json)
- **Icons**: Lucide React
- **Fonts**: Geist Sans, Geist Mono

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### 1. Clone Repository
```bash
git clone <repository-url>
cd skillshelf
```

### 2. Setup Backend
```bash
cd skillshelf-backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm start
```
Backend runs on `http://localhost:5000`

### 3. Setup Frontend
```bash
cd skillshelf-frontend
npm install
cp .env.example .env.local
# Edit .env.local with your configuration
npm run dev
```
Frontend runs on `http://localhost:3000`

## 🌐 Live Deployment

- **Frontend**: https://skill-shelf.vercel.app/
- **Backend**: https://skillshelf-backend.vercel.app/

## 📚 Documentation

For detailed setup, features, and API documentation, see:

- **Frontend Documentation**: [skillshelf-frontend/README.md](./skillshelf-frontend/README.md)
- **Backend Documentation**: [skillshelf-backend/README.md](./skillshelf-backend/README.md)

## 🔑 Login Credentials

### Mock Users (Read-Only - Demo Purposes)
```
Admin: admin@skillshelf.com / admin123
User:  user@skillshelf.com / user123
```

### Real Admin (Full Access)
```
Admin: admin246@skillshelf.com / Admin@246
```

### Real Users
Register at: https://skill-shelf.vercel.app/register

## 🎨 Brand Colors

- **Primary**: `#17a2b7` (Teal)
- **Secondary**: `#24292d` (Dark Gray)  
- **Accent**: `#f7c32f` (Yellow)

## 🔧 Development

Each application can be developed independently:

### Frontend Development
```bash
cd skillshelf-frontend
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Backend Development
```bash
cd skillshelf-backend
npm run dev          # Start with nodemon (auto-reload)
npm start            # Start production server
```

## 🚀 Deployment

Both applications are deployed separately:

### Frontend (Vercel)
```bash
cd skillshelf-frontend
vercel --prod
```

### Backend (Vercel)
```bash
cd skillshelf-backend
vercel --prod
```

## 📄 License

MIT License



