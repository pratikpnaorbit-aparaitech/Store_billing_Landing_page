import "./Signup.css";

function Signup({ onLogin }) {
  return (
    <div className="signup-page">

      <div className="signup-container">

        <div className="signup-brand">
          SmartBilling
        </div>

        <h1>
          Create your account 🚀
        </h1>

        <p className="signup-subtitle">
          Start managing your business smarter
        </p>

        <form>

          <div className="input-group">
            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Create a password"
            />
          </div>

          <button
            type="submit"
            className="signup-btn"
          >
            Create Account →
          </button>

        </form>

        <p className="login-text">
          Already have an account?

          <button
            type="button"
            className="login-link"
            onClick={onLogin}
          >
            Login
          </button>

        </p>

      </div>

    </div>
  );
}

export default Signup;