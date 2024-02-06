import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ListQuestions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/questions`);
        setQuestions(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [questions]);

  return (
    <div className="w-[500px] h-fit max-h-[500px] bg-gray-500 rounded-md text-white flex flex-col items-center gap-4 p-3">
      <ul className="p-2 bg-gray-800 w-full text-white">
        {questions.questions && questions.questions.length > 0 ? (
          questions.questions.map((question, index) => (
            <li key={index}> - {question.question}</li>
          ))
        ) : (
          <li>The List is empty</li>
        )}
      </ul>
    </div>
  );
}
