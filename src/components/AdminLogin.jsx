import { useState } from "react";
import { FaArrowRight, FaLock, FaTimes, FaUserShield } from "react-icons/fa";
import { loginAdmin } from "../services/adminApi";
import "./AdminLogin.css";

function AdminLogin({ onAuthenticated, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    setBusy(true);
    try {
      const session = await loginAdmin(email.trim(), password);
      onAuthenticated(session, remember);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="admin-login-overlay" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="admin-login-card" role="dialog" aria-modal="true" aria-labelledby="admin-login-title">
        <button className="admin-login-close" onClick={onClose} aria-label="Close admin login"><FaTimes /></button>
        <div className="admin-login-icon"><FaUserShield /></div>
        <span className="admin-eyebrow">SMART BILLING CONTROL CENTRE</span>
        <h2 id="admin-login-title">Admin sign in</h2>
        <p>View registered users, free trials, payments and subscription health.</p>
        <form onSubmit={submit}>
          <label htmlFor="admin-email">Admin email</label>
          <div className="admin-input-wrap"><FaUserShield /><input id="admin-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="admin@example.com" autoComplete="username" required /></div>
          <label htmlFor="admin-password">Password</label>
          <div className="admin-input-wrap"><FaLock /><input id="admin-password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter password" autoComplete="current-password" required /></div>
          <label className="admin-remember"><input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} /> Keep me signed in on this browser</label>
          {error && <div className="admin-login-error">{error}</div>}
          <button className="admin-login-submit" type="submit" disabled={busy}>
            {busy ? "Signing in…" : <><span>Open dashboard</span><FaArrowRight /></>}
          </button>
        </form>
        <small>Protected by a short-lived server session and login rate limits.</small>
      </div>
    </div>
  );
}

export default AdminLogin;
