# Quick Start Guide - Backend Setup

## 🚀 Get Your Backend Running in 5 Minutes

### Step 1: Navigate to Backend Folder
```bash
cd d:\Fullstack\compiler\backend
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Set Up Environment Variables

Create a `.env` file in the `backend` folder:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/compiler
CLIENT_URL=http://localhost:5173
```

**Note**: If you don't have MongoDB installed locally, you can use MongoDB Atlas (cloud):
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a cluster
4. Get your connection string and replace `MONGODB_URI` in `.env`

### Step 4: Start the Server
```bash
npm run dev
```

You should see:
```
🚀 Server running on port 5000
📍 API URL: http://localhost:5001
✅ MongoDB Connected
```

### Step 5: Test the API

Open your browser and go to:
```
http://localhost:5001/
```

You should see a welcome message!

---

## 📁 Backend Folder Structure

```
backend/
├── config/              # Database configuration
├── controllers/         # Business logic
├── models/             # Database schemas
├── routes/             # API endpoints
├── middleware/         # Error handling, logging
├── utils/              # Helper functions
└── server.js          # Main application
```

---

## 🔗 API Endpoints

### Problems
- `GET /api/problems` - Get all problems
- `GET /api/problems/topic/python` - Get Python problems
- `POST /api/problems` - Create new problem

### User Progress
- `POST /api/progress/save-code` - Save user code
- `POST /api/progress/mark-solved` - Mark problem as solved
- `GET /api/progress/:userId/:topic/solved-count` - Get solved count

---

## ❓ Troubleshooting

### MongoDB Connection Error
**Problem**: `Error connecting to MongoDB`

**Solution**:
1. Make sure MongoDB is installed and running
2. Or use MongoDB Atlas (cloud) instead
3. Check your connection string in `.env`

### Port Already in Use
**Problem**: `Port 5000 is already in use`

**Solution**:
1. Change `PORT=5000` to `PORT=5001` in `.env`
2. Or stop the process using port 5000

### Dependencies Not Installing
**Problem**: `npm install` fails

**Solution**:
1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again

---

## 📱 Responsiveness - Already Fixed!

All Problems pages are now fully responsive:
- ✅ ProblemsTopics page
- ✅ ProblemsList page
- ✅ ProblemDetail page

Test on different screen sizes using browser DevTools (F12 → Device Toolbar)

---

## 🎯 What's Next?

Your backend is ready! The frontend will continue using local data for now.

When you're ready to connect them:
1. Update `problemsData.js` to fetch from API
2. Add API service layer in frontend
3. Handle loading states and errors

---

## 📚 Documentation

- Full walkthrough: See `walkthrough.md`
- Backend README: `backend/README.md`
- Implementation plan: `implementation_plan.md`

---

**Need help?** Check the walkthrough document for detailed instructions!
