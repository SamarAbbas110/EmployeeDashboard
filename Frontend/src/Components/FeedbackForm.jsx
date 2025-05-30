import React, { useState } from "react";
import axios from "axios";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Work Environment");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text) return;
    console.log("🚀 Submitting:", { text, category });
    try {
      const response = await axios.post("http://localhost:5000/feedback", {
        text,
        category,
      });
      console.log(response);
      console.log("📦 Full response:", response);
      setText("");
      setCategory("Work Environment");
      alert("Feedback Submitted");
    } catch (err) {
      alert("Submission Failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="max-w-md w-full bg-white p-10 rounded-xl shadow-md min-h-[400px]">
        <h2 className="text-xl mb-5 font-semibold text-center">
          Give Feedback Anonymously.
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="category"
              className="block text-sm poppins-regular mb-1"
            >
              Actions
            </label>
            <select
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              id="category"
              className="w-full border border-gray-300 p-2 rounded font-normal text-sm"
            >
              <option value="Work Environment">Work Environment</option>
              <option value="Leadership">Leadership</option>
              <option value="Growth">Growth</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="font-normal">
            <label htmlFor="" className="text-sm font-normal">
              Reasons
            </label>
            <textarea
              onChange={(e) => setText(e.target.value)}
              placeholder="Write a Reason...."
              value={text}
              className="w-full border p-2 text-sm"
              required
            ></textarea>
          </div>
          <div className="font-normal space-y-2">
            <div className="flex items-center">
              <input type="checkbox" required/>
              <p className="px-2 text-sm">I'd like to help</p>
            </div>
            <div className="flex items-center">
              <input type="checkbox" name="" id="" required />
              <p className="px-2 text-sm">I'd like to help</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="flex-1 border rounded-full cursor-pointer font-normal p-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-purple-500 rounded-full p-2 text-sm text-white font-normal w-50 cursor-pointer"
            >
              Submit Feeback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export defaul