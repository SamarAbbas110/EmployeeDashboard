import React from "react";
import "./App.css";
import FeedbackForm from "./Components/FeedbackForm";

export const backendURL = import.meta.env.VITE_BACKEND_URL;

function App() {
  return (
    <>
      <div className="poppins-bold">
        <FeedbackForm />
      </div>
    </>
  );
}

export default App;
