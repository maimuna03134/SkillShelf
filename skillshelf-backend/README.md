# SkillShelf Backend API

Express.js backend API for the SkillShelf online learning platform.

## 🚀 Features

- **Authentication API**: Login, Register, Google OAuth
- **Course Management**: CRUD operations for courses
- **User Management**: User registration and profile management
- **JSON Database**: File-based data storage
- **CORS Enabled**: Cross-origin requests support

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: JSON files (ready for database migration)
- **Authentication**: JWT-ready structure
- **Environment**: dotenv for configuration

## 📦 Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your environment variables

# Start development server
npm run dev

# Start production server
npm start
```

## 🌐 Environment Variables

Create `.env` file:

```env
PORT=5000
NODE_ENV=development
CORS_ORIGIN=https://your-frontend-url.vercel.app
API_BASE_URL=https://your-backend-url.vercel.app
FRONTEND_URL=https://your-frontend-url.vercel.app
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

```bash
# Or deploy via CLI
vercel --prod
```

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/google` - Google OAuth

### Courses
- `GET /api/courses` - Get all courses
- `POST /api/courses` - Create new course (Admin)
- `GET /api/courses/:id` - Get course by ID
- `PUT /api/courses/:id` - Update course (Admin)
- `DELETE /api/courses/:id` - Delete course (Admin)

### Users
- `GET /api/users` - Get all users (Admin)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user (Admin)

### Health Check
- `GET /` - API status
- `GET /api/test` - API test endpoint

## 📁 Project Structure

```
skillshelf-backend/
├── server.js          # Main server file
├── data/              # JSON database files
│   ├── users.json     # User data
│   ├── courses.json   # Course data
│   └── enrollments.json # Enrollment data
├── package.json       # Dependencies
├── vercel.json        # Vercel configuration
└── .env              # Environment variables
```

## 🔗 Frontend

This backend serves the SkillShelf Frontend application.
Frontend Repository: [SkillShelf Frontend](https://github.com/your-username/skillshelf-frontend)

## 📄 License

MIT License