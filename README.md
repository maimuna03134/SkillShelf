# SkillShelf - Online Course Platform

SkillShelf is a modern online course listing platform where users can browse courses, view details, and admins can manage courses and users. Built with Next.js 15, NextAuth.js, and Express.js.

## Features

### Authentication & Authorization
- **NextAuth.js Integration**: Secure JWT-based authentication with credentials provider
- **Mock Users (Read-Only)**: Demo accounts for testing without making changes
  - Admin: `admin@skillshelf.com` / `admin123`
  - User: `user@skillshelf.com` / `user123`
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
- Course details page with highlights, requirements, and enrollment info

### UI/UX Features
- Modern gradient hero sections
- Smooth animations and transitions
- Loading states and skeleton screens
- 404 error page
- Toast notifications (ready for implementation)
- Mobile-friendly navigation with hamburger menu
- Sticky navbar with user dropdown
- Sidebar navigation in dashboard

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React 18
- **Styling**: Tailwind CSS, DaisyUI
- **Authentication**: NextAuth.js
- **Backend**: Express.js
- **Database**: JSON file storage (users.json, courses.json, enrollments.json)
- **Icons**: Lucide React
- **Fonts**: Geist Sans, Geist Mono

## Setup & Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### 1. Clone Repository
```bash
git clone <repository-url>
cd skillshelf
```

### 2. Install Dependencies

**Frontend:**
```bash
npm install
```

**Backend:**
```bash
cd backend
npm install
cd ..
```

### 3. Environment Variables

Create `.env.local` in root directory:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
```

Generate a secret:
```bash
openssl rand -base64 32
```

### 4. Start Development Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```
Backend runs on `http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
npm run dev
```
Frontend runs on `http://localhost:3000`

### 5. Build for Production
```bash
npm run build
npm start
```

## Routes Summary

### Public Routes
- `/` - Home page
- `/courses` - Browse all courses with search and filter
- `/courses/[slug]` - Course details page
- `/login` - Login page
- `/register` - Register new account
- `/about` - About page
- `/contact` - Contact page
- `/support` - Support page
- `/news` - News & Blogs page

### Protected Routes (Require Authentication)
- `/dashboard` - User/Admin dashboard
- `/dashboard/myCourse` - User's enrolled courses
- `/dashboard/myProfile` - Profile management
- `/dashboard/addCourse` - Add new course (Admin only)
- `/dashboard/users` - Manage users (Admin only)

### API Routes
- `/api/auth/[...nextauth]` - NextAuth authentication
- `/api/courses` - Course CRUD operations
- `/api/users` - User management
- `/api/auth/register` - User registration
- `/api/auth/login` - User login

## Project Structure

```
skillshelf/
├── src/
│   ├── app/
│   │   ├── (withCommonLayout)/      # Public pages with navbar/footer
│   │   │   ├── (auth)/              # Login and register pages
│   │   │   ├── courses/             # Courses listing and details
│   │   │   └── page.jsx             # Home page
│   │   ├── (withDashboardLayout)/   # Protected dashboard pages
│   │   │   ├── dashboard/
│   │   │   │   ├── page.jsx         # Main dashboard
│   │   │   │   ├── myCourse/        # User courses
│   │   │   │   ├── myProfile/       # Profile page
│   │   │   │   ├── addCourse/       # Add course (Admin)
│   │   │   │   └── users/           # Manage users (Admin)
│   │   │   └── layout.jsx           # Dashboard layout with sidebar
│   │   ├── api/
│   │   │   └── auth/[...nextauth]/  # NextAuth configuration
│   │   ├── layout.js                # Root layout
│   │   └── globals.css              # Global styles
│   ├── components/
│   │   ├── form/                    # Form components
│   │   └── shared/                  # Reusable components
│   ├── data/
│   │   └── courses.json             # Course data
│   └── provider/
│       └── SessionProvider.jsx      # NextAuth session provider
├── backend/
│   ├── server.js                    # Express API server
│   └── data/
│       ├── users.json               # User database
│       └── enrollments.json         # Enrollment database
├── public/                          # Static assets
└── package.json
```

## Implemented Features

### 1. Authentication System
- NextAuth.js with credentials provider
- JWT-based sessions with 24-hour expiration
- Mock users for demo (read-only access)
- Real user registration and login
- Secure password handling (ready for bcrypt)
- Session management with automatic refresh

### 2. User Dashboard
- Statistics cards (enrollments, completed, in progress, average progress)
- Course recommendations
- Profile management with password change
- Responsive sidebar navigation
- Read-only mode indicator for mock users

### 3. Admin Dashboard
- Platform statistics overview
- User management table with role assignment
- Add course form with validation
- User details modal with enrollment history
- Bulk actions ready for implementation

### 4. Course System
- Course listing with grid layout
- Real-time search functionality
- Multi-filter system (category, level, price)
- Active filter tags with individual removal
- Course details page with full information
- Dynamic routing with slug-based URLs
- Static generation for better performance

### 5. Search & Filter
- **Search**: Instant search across name, description, instructor
- **Category Filter**: 8+ categories dynamically generated
- **Level Filter**: 5 difficulty levels
- **Price Filter**: 5 price ranges including free courses
- **Filter Panel**: Collapsible with clear all option
- **Active Tags**: Visual indicators for applied filters
- **Empty State**: Helpful message when no results found
- **Results Count**: Live update showing X of Y courses

### 6. UI/UX Enhancements
- Dark mode support with smooth transitions
- Responsive design (mobile, tablet, desktop)
- Loading states and skeleton screens
- Custom 404 page
- Toast notifications (infrastructure ready)
- Smooth animations and hover effects
- Accessible form controls
- Mobile-optimized navigation

### 7. Backend API
- Express.js REST API
- User authentication endpoints
- Course CRUD operations
- User management endpoints
- JSON file storage (ready for database migration)
- CORS enabled for development

## Brand Colors

- **Primary**: `#17a2b7` (Teal)
- **Secondary**: `#24292d` (Dark Gray)
- **Accent**: `#f7c32f` (Yellow)

## Login Credentials

### Mock Users (Read-Only - Can View Only)
```
Admin: admin@skillshelf.com / admin123
User:  user@skillshelf.com / user123
```

### Real Users (Full Access)
Register at: `http://localhost:3000/register`

## Additional Enhancements

### Ready for Implementation
- **Toast Notifications**: Infrastructure in place, ready to add react-toastify
- **Email Verification**: Backend endpoints ready for email service integration
- **Password Reset**: Flow designed, needs email service
- **Course Enrollment**: Database schema ready
- **Progress Tracking**: UI components prepared
- **Payment Integration**: Stripe/PayPal ready to integrate
- **File Upload**: Course image upload with Cloudinary/AWS S3
- **Reviews & Ratings**: Database structure prepared
- **Analytics Dashboard**: Charts ready with recharts library

### Future Enhancements
- Real-time notifications with WebSocket
- Course video player integration
- Certificate generation
- Discussion forums
- Live chat support
- Mobile app with React Native
- Advanced search with Elasticsearch
- Recommendation engine with ML
- Multi-language support
- Social media integration

## Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Backend Scripts
```bash
cd backend
npm start            # Start Express server
npm run dev          # Start with nodemon (auto-reload)
```

## Security Notes

### Current Implementation (Development)
- Passwords stored in plain text
- No rate limiting
- CORS enabled for all origins
- No email verification

### Production Recommendations
1. Hash passwords with bcrypt
2. Add rate limiting (express-rate-limit)
3. Restrict CORS to specific origins
4. Add email verification
5. Use HTTPS only
6. Implement JWT refresh tokens
7. Add 2FA for admin accounts
8. Use environment variables for secrets
9. Add request validation
10. Implement proper error handling

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email support@skillshelf.com or open an issue in the repository.

---

Built with ❤️ using Next.js and Express.js
