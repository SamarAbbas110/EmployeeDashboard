# 📝 Anonymous Employee Feedback App

This is a simple full-stack web app allowing employees to submit anonymous feedback, which can then be viewed, filtered, marked as reviewed, or deleted by an admin.

## 🚀 How to Run the App

### Prerequisites
- Node.js and npm
- MongoDB running locally or on cloud (e.g. MongoDB Atlas)

### Backend (Express + MongoDB)
1. Navigate to the `backend` directory.
2. Install dependencies: npm install
3. Start the server: npm run dev

The backend will run at http://localhost:5000.

Frontend (React + Tailwind + Vite)
Navigate to the Admin directory for the admin panel OR Client directory for the feedback form.

Install dependencies: npm install
Start the frontend: npm run dev

The frontend will run at http://localhost:5173 by default.

🧠 API Structure
Base URL: http://localhost:5000/feedback
POST /feedback
Submit anonymous feedback
Body:
{
  "text": "Great environment",
  "category": "Work Environment"
}
GET /feedback
Get all feedbacks
Optional query param: ?category=Leadership

PATCH /feedback/:id/reviewed
Mark specific feedback as reviewed

DELETE /feedback/:id
Delete specific feedback

📌 Assumptions Made
Feedback is anonymous and does not require authentication.

Each feedback must include a category and reason (text).

Admin panel is accessible to authorized users (not enforced here).

Two checkbox confirmations are included before submission.

✅ What’s Complete
Feedback submission form with category and reason.

Confirmation checkboxes before submitting.

Admin panel with:

Feedback listing

Category filter

Mark as reviewed

Delete feedback

API endpoints for feedback CRUD operations.

Tailwind styling for modern UI.

❌ What’s Not Complete
No user authentication or admin access control.

No pagination or search for large datasets.

No success/error toasts or loading indicators (basic alerts used).

📁 Folder Structure
/Admin         -> React Admin panel
/Frontend        -> React Feedback form
/backend       -> Express API + MongoDB
