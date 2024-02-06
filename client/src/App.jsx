import { useState } from "react";
import AddQuestions from "./components/AddQuestions";
import ListQuestions from "./components/ListQuestions";

function App() {
  return (
    <div className="flex bg-gray-400 w-full h-screen flex-col md:flex-row">
      <div className="flex-1 flex justify-center items-center">
        <AddQuestions />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <ListQuestions />
      </div>
    </div>
  );
}

export default App;
