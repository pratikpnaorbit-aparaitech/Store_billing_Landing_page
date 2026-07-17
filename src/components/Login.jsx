import { useState } from "react";
import "./Login.css";

function Login({ onSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

   setError("");
setSuccess("Login Successful 🎉");
  };

  return (
    <div className="login-page">

      <div className="login-container">

        <div className="login-brand">
          SmartBilling
        </div>

        <h1>
          Welcome back 👋
        </h1>

        <p className="login-subtitle">
          Login to manage your business smarter
        </p>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="login-error">
              ⚠️ {error}
            </p>
          )}
          {success && (
  <p className="login-success">
    ✓ {success}
  </p>
)}

          <div className="login-options">

            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">
              Forgot Password?
            </a>

          </div>

          <button
            type="submit"
            className="login-btn"
          >
            Login →
          </button>

        </form>

        <p className="signup-text">
          Don't have an account?

          <button
            type="button"
            className="signup-link"
            onClick={onSignup}
          >
            Create Account
          </button>

        </p>

      </div>

    </div>
  );
}

export default Login;