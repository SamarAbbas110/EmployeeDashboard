import React, { useState } from "react";
import axios from "axios";
import { backendURL } from "../App";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Work Environment");
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text || !checkbox1 || !checkbox2) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      console.log("backend" , backendURL)
      await axios.post(backendURL + "/feedback", {
        
        text,
        category,
      });
      setText("");
      setCategory("Work Environment");
      setCheckbox1(false);
      setCheckbox2(false);
      alert("Feedback Submitted");
    } catch (err) {
      alert("Submission Failed");
    }
  };

  const handleCancel = () => {
    setText("");
    setCategory("Work Environment");
    setCheckbox1(false);
    setCheckbox2(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="max-w-md w-full bg-white p-10 rounded-xl shadow-md min-h-[400px]">
        <h2 className="text-xl mb-5 poppins-bold text-center">
          Give Feedback Anonymously.
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="category" className="block text-sm mb-1">
              Actions
            </label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              className="w-full border border-gray-300 p-2 rounded text-sm"
            >
              <option value="Work Environment">Work Environment</option>
              <option value="Leadership">Leadership</option>
              <option value="Growth">Growth</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div>
            <label className="text-sm">Reasons</label>
            <textarea
              onChange={(e) => setText(e.target.value)}
              value={text}
              placeholder="Write a Reason...."
              className="w-full border p-2 text-sm"
              required
            ></textarea>
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={checkbox1}
                onChange={(e) => setCheckbox1(e.target.checked)}
              />
              <p className="px-2 text-sm">
                <span className="text-red-600">Feedback </span>is considered
                fairly.
              </p>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={checkbox2}
                onChange={(e) => setCheckbox2(e.target.checked)}
              />
              <p className="px-2 text-sm">
                Your input helps us improve continuously.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 border rounded-full cursor-pointer font-normal p-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-500 rounded-full p-2 text-sm text-white font-normal w-50 cursor-pointer"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
