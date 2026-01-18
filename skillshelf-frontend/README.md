# SkillShelf Frontend

A modern online learning platform frontend built with Next.js 16.

## 🚀 Features

- **Authentication**: NextAuth.js with Google OAuth and credentials
- **Dark/Light Mode**: Complete theme switching
- **Responsive Design**: Mobile-first approach
- **Course Management**: Browse, search, and filter courses
- **Dashboard System**: User and admin dashboards
- **Modern UI**: Clean design with Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS, DaisyUI
- **Authentication**: NextAuth.js
- **Icons**: Lucide React, React Icons
- **Language**: JavaScript/JSX

## 📦 Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your environment variables

# Start development server
npm run dev
```

## 🌐 Environment Variables

Create `.env.local` file:

```env
NEXTAUTH_URL=https://your-frontend-url.vercel.app
NEXTAUTH_SECRET=your-secret-key-here
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXT_PUBLIC_BACKEND_URL=https://your-backend-url.vercel.app
BACKEND_URL=https://your-backend-url.vercel.app
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

```bash
# Or deploy via CLI
npm run build
vercel --prod
```

## 📱 Features

### Authentication
- Login/Register with credentials
- Google OAuth integration
- Role-based access (User/Admin)
- Mock users for demo

### Course Management
- Browse courses with search and filters
- Course details pages
- Category-based organization
- Enrollment system

### Dashboard
- User dashboard with statistics
- Admin dashboard with management tools
- Profile management
- Course management (Admin)

### UI/UX
- Dark/Light mode toggle
- Responsive design
- Loading states
- Form validation
- Modern animations

## 🔗 Backend

This frontend connects to the SkillShelf Backend API.
Backend Repository: [SkillShelf Backend](https://github.com/your-username/skillshelf-backend)

## 📄 License

MIT License