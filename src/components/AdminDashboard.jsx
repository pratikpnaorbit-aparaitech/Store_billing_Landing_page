import { useCallback, useEffect, useMemo, useState } from "react";
import { FaArrowLeft, FaCalendarCheck, FaClock, FaIndianRupeeSign, FaMagnifyingGlass, FaRotate, FaShieldHalved, FaStore, FaTriangleExclamation, FaUsers } from "react-icons/fa6";
import { fetchAdminDashboard } from "../services/adminApi";
import "./AdminDashboard.css";

const STATUS_LABELS = {
  trial_active: "Free trial",
  trial_expired: "Trial ended",
  active: "Subscribed",
  authenticated: "Authorised",
  pending: "Payment retry",
  halted: "Payment halted",
  cancelled: "Cancelled",
  completed: "Completed",
  expired: "Expired",
  created: "Checkout pending",
};

function formatDate(value, withTime = true) {
  if (!value) return "—";
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    ...(withTime ? { hour: "2-digit", minute: "2-digit" } : {}),
  }).format(new Date(value));
}

function statusClass(status) {
  if (status === "active") return "good";
  if (status === "trial_active") return "trial";
  if (["pending", "halted"].includes(status)) return "warning";
  return "muted";
}

function AdminDashboard({ token, adminEmail, onLogout }) {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = useCallback(async (silent = false) => {
    if (!silent) setLoading(true);
    setError("");
    try {
      setData(await fetchAdminDashboard(token, { search, status }));
    } catch (requestError) {
      if (requestError.status === 401) return onLogout();
      setError(requestError.message);
    } finally {
      if (!silent) setLoading(false);
    }
  }, [onLogout, search, status, token]);

  useEffect(() => {
    const debounce = setTimeout(() => load(), 250);
    return () => clearTimeout(debounce);
  }, [load]);

  useEffect(() => {
    const interval = setInterval(() => load(true), 60 * 1000);
    return () => clearInterval(interval);
  }, [load]);

  const summaryCards = useMemo(() => data ? [
    { label: "Registered users", value: data.summary.totalUsers, icon: <FaUsers />, tone: "blue" },
    { label: "Trials running", value: data.summary.trialActive, icon: <FaClock />, tone: "amber" },
    { label: "Active subscriptions", value: data.summary.activeSubscriptions, icon: <FaCalendarCheck />, tone: "green" },
    { label: "Monthly recurring", value: `₹${data.summary.monthlyRecurringRevenue.toLocaleString("en-IN")}`, icon: <FaIndianRupeeSign />, tone: "purple" },
    { label: "Needs attention", value: data.summary.paymentAttention, icon: <FaTriangleExclamation />, tone: "red" },
  ] : [], [data]);

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-logo"><span>SB</span><div>SmartBilling<small>Admin console</small></div></div>
        <nav>
          <button className="active"><FaStore /> Overview</button>
          <button onClick={() => document.getElementById("users-table")?.scrollIntoView({ behavior: "smooth" })}><FaUsers /> Users</button>
          <button onClick={() => document.getElementById("subscription-events")?.scrollIntoView({ behavior: "smooth" })}><FaCalendarCheck /> Payments</button>
        </nav>
        <div className="admin-sidebar-user"><FaShieldHalved /><div><strong>Administrator</strong><small>{adminEmail}</small></div></div>
        <button className="admin-logout" onClick={onLogout}><FaArrowLeft /> Back to website</button>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
          <div><span className="admin-page-kicker">LIVE APP STATUS</span><h1>Subscription overview</h1><p>Registration, trial and recurring payment activity in one place.</p></div>
          <div className="admin-header-actions"><span className="admin-live"><i /> Live</span><button onClick={() => load()} disabled={loading}><FaRotate /> Refresh</button></div>
        </header>

        {error && <div className="admin-error">{error}<button onClick={() => load()}>Try again</button></div>}
        {loading && !data ? <div className="admin-loading">Loading live billing data…</div> : null}

        {data && <>
          <section className="admin-summary">
            {summaryCards.map((card) => <article key={card.label} className={`summary-card ${card.tone}`}><div className="summary-icon">{card.icon}</div><div><span>{card.label}</span><strong>{card.value}</strong></div></article>)}
          </section>

          <section className="admin-panel" id="users-table">
            <div className="admin-panel-heading"><div><h2>Registered users</h2><p>{data.pagination.total} matching account{data.pagination.total === 1 ? "" : "s"}</p></div><span>Updated {formatDate(data.generatedAt)}</span></div>
            <div className="admin-filters">
              <label><FaMagnifyingGlass /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search name, store, email or phone" /></label>
              <select value={status} onChange={(event) => setStatus(event.target.value)}>
                <option value="all">All statuses</option>
                <option value="trial_active">Free trial</option>
                <option value="trial_expired">Trial ended</option>
                <option value="active">Subscribed</option>
                <option value="pending">Payment retry</option>
                <option value="halted">Payment halted</option>
                <option value="cancelled">Cancelled</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="admin-table-wrap">
              <table>
                <thead><tr><th>User / Store</th><th>Registered</th><th>Free trial</th><th>Status</th><th>Subscription timing</th><th>Last payment</th></tr></thead>
                <tbody>
                  {data.users.map((user) => {
                    const shownStatus = user.subscription.status;
                    return <tr key={user.id}>
                      <td><div className="user-cell"><span>{user.name?.charAt(0)?.toUpperCase() || "U"}</span><div><strong>{user.name}</strong><small>{user.storeName || "No store name"}</small><small>{user.email}{user.phone ? ` · ${user.phone}` : ""}</small></div></div></td>
                      <td><strong>{formatDate(user.registeredAt)}</strong></td>
                      <td><strong>{formatDate(user.subscription.trialStartedAt, false)}</strong><small>to {formatDate(user.subscription.trialEndsAt, false)}</small>{user.subscription.trialActive && <small>{user.subscription.trialDaysRemaining} day(s) left</small>}</td>
                      <td><span className={`status-pill ${statusClass(shownStatus)}`}>{STATUS_LABELS[shownStatus] || shownStatus}</span>{user.subscription.providerStatus !== shownStatus && <small>Razorpay: {STATUS_LABELS[user.subscription.providerStatus] || user.subscription.providerStatus}</small>}</td>
                      <td><strong>{user.subscription.nextChargeAt ? `Next: ${formatDate(user.subscription.nextChargeAt)}` : "No next charge"}</strong><small>{user.subscription.currentPeriodEnd ? `Period ends ${formatDate(user.subscription.currentPeriodEnd)}` : "—"}</small></td>
                      <td><strong>{formatDate(user.subscription.lastPaymentAt)}</strong><small>{user.subscription.lastPaymentId || "No payment yet"}</small></td>
                    </tr>;
                  })}
                  {!data.users.length && <tr><td colSpan="6" className="admin-empty">No users match this filter.</td></tr>}
                </tbody>
              </table>
            </div>
          </section>

          <section className="admin-panel" id="subscription-events">
            <div className="admin-panel-heading"><div><h2>Recent subscription activity</h2><p>Latest Razorpay and checkout events</p></div></div>
            <div className="event-list">
              {data.recentEvents.map((event) => <article key={event.id}><div className={`event-dot ${statusClass(event.status)}`} /><div><strong>{event.type.replaceAll(".", " · ")}</strong><small>{event.razorpaySubscriptionId || event.paymentId || "Subscription event"}</small></div><div><strong>{event.amount ? `₹${event.amount.toLocaleString("en-IN")}` : "Status update"}</strong><small>{formatDate(event.occurredAt)}</small></div></article>)}
              {!data.recentEvents.length && <div className="admin-empty">Payment events will appear here after the first Razorpay checkout.</div>}
            </div>
          </section>
        </>}
      </main>
    </div>
  );
}

export default AdminDashboard;
