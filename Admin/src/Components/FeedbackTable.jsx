import React, { useState, useEffect } from "react";
import axios from "axios";

const FeedbackTable = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [category, setCategory] = useState("");

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/feedback${category ? `?category=${category}` : ""}`
      );
      setFeedbacks(res.data);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, [category]);

  const markAsReviewed = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/feedback/${id}/reviewed`);
      fetchFeedbacks(); // Refresh after update
    } catch (error) {
      console.error("Failed to mark as reviewed", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this feedback?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/feedback/${id}`);
      fetchFeedbacks(); // Refresh after deletion
    } catch (error) {
      console.error("Failed to delete feedback", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Admin Feedback Panel</h2>

      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mb-6 p-2 border rounded"
      >
        <option value="">All Categories</option>
        <option value="Work Environment">Work Environment</option>
        <option value="Leadership">Leadership</option>
        <option value="Growth">Growth</option>
        <option value="Others">Others</option>
      </select>

      {/* Feedback List */}
      {feedbacks.map((fb) => (
        <div key={fb._id} className="bg-white p-4 mb-4 rounded shadow">
          <p><strong>Category:</strong> {fb.category}</p>
          <p className="mt-1 mb-2">{fb.text}</p>
          <p className="text-sm text-gray-500">
            Status: {fb.reviewed ? "✅ Reviewed" : "🕓 Pending"}
          </p>
          <div className="mt-2 flex gap-3 justify-center align-center">
            {!fb.reviewed && (
              <button
                onClick={() => markAsReviewed(fb._id)}
                className="bg-green-600 text-white px-3 py-1 rounded cursor-pointer"
              > 
                Mark as Reviewed
              </button>
            )}
            <button
              onClick={() => handleDelete(fb._id)}
              className="bg-red-600 text-white px-3 py-1 rounded cursor-pointer"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackTable;
