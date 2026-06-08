import { useState } from "react";

function Interview() {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [score, setScore] = useState(null);

  const handleSubmit = () => {
    setSubmitted(answer);

    localStorage.setItem("lastAnswer", answer);

    const randomScore = Math.floor(Math.random() * 41) + 60;
    setScore(randomScore);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>AI Interview Session</h1>

      <h3>Question 1</h3>

      <p>Tell me about yourself.</p>

      <textarea
        rows="8"
        cols="60"
        placeholder="Type your answer here..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSubmit}>
        Submit Answer
      </button>

      <br />
      <br />

      {submitted && (
        <>
          <h3>Your Submitted Answer:</h3>
          <p>{submitted}</p>

          <h3>AI Score</h3>
          <p>{score}/100</p>
        </>
      )}
    </div>
  );
}

export default Interview;