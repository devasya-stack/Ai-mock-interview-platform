import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        backgroundColor: "#282c34",
      }}
    >
      <Link to="/" style={{ color: "white" }}>
        Login
      </Link>

      <Link to="/register" style={{ color: "white" }}>
        Register
      </Link>

      <Link to="/dashboard" style={{ color: "white" }}>
        Dashboard
      </Link>

      <Link to="/interview" style={{ color: "white" }}>
        Interview
      </Link>
    </div>
  );
}

export default Navbar;