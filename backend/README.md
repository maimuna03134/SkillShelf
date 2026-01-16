# SkillShelf Backend API

Simple Express.js backend for managing courses.

## Setup

1. Install dependencies:
```bash
cd backend
npm install
```

2. Start the server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

## API Endpoints

### Courses

- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get single course by ID
- `POST /api/courses` - Create new course (Admin only)
- `PUT /api/courses/:id` - Update course (Admin only)
- `DELETE /api/courses/:id` - Delete course (Admin only)

## Example: Create Course

```javascript
fetch('http://localhost:5000/api/courses', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'New Course',
    description: 'Course description',
    price: 99.99,
    image: 'https://example.com/image.jpg',
    instructor: 'John Doe',
    duration: '30 hours',
    level: 'Beginner',
    category: 'Web Development',
    highlights: ['Learn basics', 'Build projects']
  })
})
```

## Notes

- The API stores data in `src/data/courses.json`
- No authentication is implemented yet (add JWT for production)
- CORS is enabled for all origins (restrict in production)
