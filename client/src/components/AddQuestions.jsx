import React, { useState } from "react";
import axios from "axios";

export default function AddQuestions() {
  const [question, setQuestion] = useState("");

  const addQuestion = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/questions`, {
        question: question,
      });
      setQuestion("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={addQuestion}
      className="bg-gray-600 flex flex-col justify-center items-center p-5 gap-3 w-[500px] rounded-md"
    >
      <label className="text-md font-semibold text-white">
        Enter your Question
      </label>
      <input
        type="text"
        name="question"
        required
        className="w-full rounded-md p-2 outline-none focus:ring-0"
        placeholder="What is React ?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-500 p-2 rounded-md hover:scale-105 duration-200 text-white font-bold"
      >
        Add to list
      </button>
    </form>
  );
}
