import React, { useState } from "react";
import Header from "./components/Header";
import TypingBox from "./components/TypingBox";
import Timer from "./components/Timer";

function App() {
  const [testEnded, setTestEnded] = useState(false);

  const handleTimeUp = () => {
    console.log("Time up!");
    setTestEnded(true);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <div className="max-w-4xl mx-auto py-8">
        {!testEnded ? (
          <>
            <Timer duration={30} onTimeUp={handleTimeUp} />
            <TypingBox />
          </>
        ) : (
          <div className="text-center text-3xl text-amber-400 mt-10">
            Test Completed 🚀
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
