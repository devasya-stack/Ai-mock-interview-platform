import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const lastAnswer = localStorage.getItem("lastAnswer");

  return (
    <div style={{ padding: "30px" }}>
      <h1>AI Mock Interview Dashboard</h1>

      <button onClick={() => navigate("/interview")}>
        Start New Interview
      </button>

      <h2>Your Interview History</h2>

      <ul>
        <li>Frontend Developer Interview</li>
        <li>Python Developer Interview</li>
        <li>Java DSA Interview</li>
      </ul>

      <h2>Last Submitted Answer</h2>

      {lastAnswer ? (
        <p>{lastAnswer}</p>
      ) : (
        <p>No answer submitted yet.</p>
      )}
    </div>
  );
}

export default Dashboard;