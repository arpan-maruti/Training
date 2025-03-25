import React, { useState, useEffect } from "react";

const UseEffectDemo = () => {

  const [text, setText] = useState("");
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    console.log("Effect ran on every render");
  });

  useEffect(() => {
    console.log("component mounted");
  }, []);

  useEffect(() => {
    console.log(`Text changed: ${text}`);
  }, [text]);

  useEffect(() => {
    console.log("Timer started...");
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => {
      console.log("Cleaning up timer...");
      clearInterval(interval);
    };
  }, []);


  return (
    <div>
      <h2>Text: {text}</h2>
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type something..." />

      <h2>Timer: {timer}s</h2>
    </div>
  );
};

export default UseEffectDemo;
