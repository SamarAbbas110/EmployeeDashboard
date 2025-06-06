import React from "react";
import "./App.css";
import FeedbackTable from "./Components/FeedbackTable";

export const backendURL = import.meta.env.VITE_BACKEND_URL;


function App() {
  return (
    <>
      <div>
        <div className="min-h-screen bg-gray-50 p-4">
          <FeedbackTable />
        </div>
      </div>
    </>
  );
}

export default App;
