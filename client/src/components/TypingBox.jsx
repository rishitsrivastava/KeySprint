import React, { useState, useEffect } from "react";

export default function TypingBox() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const wordList = [
      "developer",
      "keyboard",
      "react",
      "spring",
      "javascript",
      "speed",
      "typing",
      "accuracy",
      "challenge",
      "frontend",
    ];
    // Pick 25 random words
    const randomWords = Array.from(
      { length: 25 },
      () => wordList[Math.floor(Math.random() * wordList.length)]
    );
    setWords(randomWords);
  }, []);

  return (
    <div className="p-6 bg-slate-900 text-white rounded-xl shadow-lg max-w-3xl mx-auto my-10">
      <div className="flex flex-wrap gap-2 text-xl leading-relaxed">
        {words.map((word, i) => (
          <span key={i} className="text-gray-300">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
