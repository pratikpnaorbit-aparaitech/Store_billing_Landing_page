import { useCallback, useEffect, useMemo, useState } from "react";
import {
  FaArrowLeft,
  FaCalendarCheck,
  FaClock,
  FaIndianRupeeSign,
  FaMagnifyingGlass,
  FaRotate,
  FaShieldHalved,
  FaStore,
  FaTriangleExclamation,
  FaUsers,
} from "react-icons/fa6";
import {
  extendUserTrial,
  fetchAdminDashboard,
  fetchAdminPlans,
  forceLogoutUser,
  updateAdminPlan,
} from "../services/adminApi";
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
  trialing: "Free trial",
};

const PAGE_DETAILS = {
  overview: {
    kicker: "LIVE APP STATUS",
    title: "Subscription overview",
    description: "A live summary of registrations, trials, subscriptions and payment health.",
  },
  trials: {
    kicker: "FREE TRIAL USERS",
    title: "Active 7-day trials",
    description: "New users who can currently use Smart Billing without payment.",
  },
  subscribed: {
    kicker: "PAID CUSTOMERS",
    title: "Subscribed users",
    description: "Users with an active or already-paid Razorpay subscription period.",
  },
  expired: {
    kicker: "TRIAL ENDED",
    title: "Expired free trials",
    description: "Users whose free access ended and who have not activated a subscription.",
  },
  plans: {
    kicker: "PRICING CONTROL",
    title: "Subscription plans",
    description: "Set prices for new 1, 3 and 6 month subscriptions without rebuilding the app.",
  },
  payments: {
    kicker: "RAZORPAY ACTIVITY",
    title: "Payment activity",
    description: "Latest checkout, recurring charge and subscription status events.",
  },
};

const USER_PAGE_STATUS = {
  trials: "trial_active",
  subscribed: "active",
  expired: "trial_expired",
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
  if (status === "trial_active" || status === "trialing") return "trial";
  if (["pending", "halted"].includes(status)) return "warning";
  return "muted";
}

function UserTable({
  users,
  title,
  description,
  search,
  setSearch,
  allowTrialExtension,
  onExtendTrial,
  onForceLogout,
  actionBusy,
}) {
  return (
    <section className="admin-panel">
      <div className="admin-panel-heading">
        <div><h2>{title}</h2><p>{description}</p></div>
        <span>{users.length} account{users.length === 1 ? "" : "s"}</span>
      </div>
      <div className="admin-filters">
        <label>
          <FaMagnifyingGlass />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search name, store, email or phone"
          />
        </label>
      </div>
      <div className="admin-table-wrap">
        <table>
          <thead>
            <tr>
              <th>User / Store</th>
              <th>Registered</th>
              <th>Free trial</th>
              <th>Status</th>
              <th>Subscription</th>
              <th>Active phone</th>
              <th>Admin actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              const shownStatus = user.subscription.status;
              const isBusy = actionBusy === user.id;
              return (
                <tr key={user.id}>
                  <td>
                    <div className="user-cell">
                      <span>{user.name?.charAt(0)?.toUpperCase() || "U"}</span>
                      <div>
                        <strong>{user.name}</strong>
                        <small>{user.storeName || "No store name"}</small>
                        <small>{user.email}{user.phone ? ` · ${user.phone}` : ""}</small>
                      </div>
                    </div>
                  </td>
                  <td><strong>{formatDate(user.registeredAt)}</strong></td>
                  <td>
                    <strong>{formatDate(user.subscription.trialStartedAt, false)}</strong>
                    <small>to {formatDate(user.subscription.trialEndsAt, false)}</small>
                    {user.subscription.trialActive
                      ? <small>{user.subscription.trialDaysRemaining} day(s) left</small>
                      : null}
                  </td>
                  <td>
                    <span className={`status-pill ${statusClass(shownStatus)}`}>
                      {STATUS_LABELS[shownStatus] || shownStatus}
                    </span>
                    {user.subscription.providerStatus !== shownStatus
                      ? <small>Razorpay: {STATUS_LABELS[user.subscription.providerStatus] || user.subscription.providerStatus}</small>
                      : null}
                  </td>
                  <td>
                    <strong>
                      {user.subscription.plan?.amount
                        ? `₹${Number(user.subscription.plan.amount).toLocaleString("en-IN")} / ${user.subscription.plan.durationMonths} month(s)`
                        : "No paid plan"}
                    </strong>
                    <small>
                      {user.subscription.currentPeriodEnd
                        ? `Period ends ${formatDate(user.subscription.currentPeriodEnd)}`
                        : "No paid period"}
                    </small>
                  </td>
                  <td>
                    <strong>{user.deviceSession?.active ? user.deviceSession.deviceName : "No active phone"}</strong>
                    <small>{user.deviceSession?.lastSeenAt ? `Seen ${formatDate(user.deviceSession.lastSeenAt)}` : "—"}</small>
                  </td>
                  <td>
                    <div className="admin-row-actions">
                      {allowTrialExtension ? (
                        <button className="action-primary" onClick={() => onExtendTrial(user)} disabled={isBusy}>
                          <FaClock /> Extend trial
                        </button>
                      ) : null}
                      {user.deviceSession?.active ? (
                        <button className="action-secondary" onClick={() => onForceLogout(user)} disabled={isBusy}>
                          Force logout
                        </button>
                      ) : null}
                    </div>
                  </td>
                </tr>
              );
            })}
            {!users.length ? (
              <tr><td colSpan="7" className="admin-empty">No users are currently in this list.</td></tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function AdminDashboard({ token, adminEmail, onLogout }) {
  const [page, setPage] = useState("overview");
  const [data, setData] = useState(null);
  const [plans, setPlans] = useState([]);
  const [planDrafts, setPlanDrafts] = useState({});
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [actionBusy, setActionBusy] = useState("");

  const handleRequestError = useCallback((requestError) => {
    if (requestError.status === 401) {
      onLogout();
      return;
    }
    setError(requestError.message);
  }, [onLogout]);

  const load = useCallback(async (silent = false) => {
    if (!silent) setLoading(true);
    setError("");
    try {
      const status = USER_PAGE_STATUS[page] || "all";
      const dashboardPromise = fetchAdminDashboard(token, { search, status });
      if (page === "plans" || !plans.length) {
        const [dashboard, planData] = await Promise.all([
          dashboardPromise,
          fetchAdminPlans(token),
        ]);
        setData(dashboard);
        setPlans(planData.plans || []);
        setPlanDrafts(Object.fromEntries(
          (planData.plans || []).map((plan) => [plan.durationMonths, String(plan.amount)]),
        ));
      } else {
        setData(await dashboardPromise);
      }
    } catch (requestError) {
      handleRequestError(requestError);
    } finally {
      if (!silent) setLoading(false);
    }
  }, [handleRequestError, page, plans.length, search, token]);

  useEffect(() => {
    const debounce = setTimeout(() => load(), 250);
    return () => clearTimeout(debounce);
  }, [load]);

  useEffect(() => {
    const interval = setInterval(() => load(true), 60 * 1000);
    return () => clearInterval(interval);
  }, [load]);

  const summaryCards = useMemo(() => data ? [
    { label: "Registered users", value: data.summary.totalUsers, icon: <FaUsers />, tone: "blue", page: "overview" },
    { label: "Trials running", value: data.summary.trialActive, icon: <FaClock />, tone: "amber", page: "trials" },
    { label: "Active subscriptions", value: data.summary.activeSubscriptions, icon: <FaCalendarCheck />, tone: "green", page: "subscribed" },
    { label: "Monthly equivalent", value: `₹${data.summary.monthlyRecurringRevenue.toLocaleString("en-IN")}`, icon: <FaIndianRupeeSign />, tone: "purple", page: "payments" },
    { label: "Trials ended", value: data.summary.trialExpired, icon: <FaTriangleExclamation />, tone: "red", page: "expired" },
  ] : [], [data]);

  const switchPage = (nextPage) => {
    setSearch("");
    setError("");
    setNotice("");
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const extendTrial = async (user) => {
    const rawDays = window.prompt(`How many days should be added for ${user.name}?`, "7");
    if (rawDays === null) return;
    const days = Number(rawDays);
    if (!Number.isInteger(days) || days < 1 || days > 365) {
      setError("Enter a whole number from 1 to 365 days.");
      return;
    }
    setActionBusy(user.id);
    setError("");
    setNotice("");
    try {
      const result = await extendUserTrial(token, user.id, days);
      setNotice(result.message);
      await load(true);
    } catch (requestError) {
      handleRequestError(requestError);
    } finally {
      setActionBusy("");
    }
  };

  const forceLogout = async (user) => {
    if (!window.confirm(`Sign ${user.name} out from their active phone?`)) return;
    setActionBusy(user.id);
    setError("");
    setNotice("");
    try {
      const result = await forceLogoutUser(token, user.id);
      setNotice(result.message);
      await load(true);
    } catch (requestError) {
      handleRequestError(requestError);
    } finally {
      setActionBusy("");
    }
  };

  const savePlan = async (plan) => {
    const amount = Number(planDrafts[plan.durationMonths]);
    if (!Number.isFinite(amount) || amount < 1) {
      setError("Plan price must be at least ₹1.");
      return;
    }
    const accepted = window.confirm(
      `Publish ₹${amount.toLocaleString("en-IN")} for the ${plan.durationMonths} month plan?\n\nThis affects only new subscriptions. Existing autopay amounts stay unchanged.`,
    );
    if (!accepted) return;
    setActionBusy(`plan-${plan.durationMonths}`);
    setError("");
    setNotice("");
    try {
      const result = await updateAdminPlan(token, plan.durationMonths, amount);
      setNotice(result.message);
      const refreshed = await fetchAdminPlans(token);
      setPlans(refreshed.plans || []);
      setPlanDrafts(Object.fromEntries(
        (refreshed.plans || []).map((item) => [item.durationMonths, String(item.amount)]),
      ));
    } catch (requestError) {
      handleRequestError(requestError);
    } finally {
      setActionBusy("");
    }
  };

  const navigation = [
    ["overview", <FaStore key="overview" />, "Overview"],
    ["trials", <FaClock key="trials" />, "Active trials"],
    ["subscribed", <FaCalendarCheck key="subscribed" />, "Subscribed"],
    ["expired", <FaTriangleExclamation key="expired" />, "Trial ended"],
    ["plans", <FaIndianRupeeSign key="plans" />, "Plan prices"],
    ["payments", <FaUsers key="payments" />, "Payments"],
  ];
  const pageDetails = PAGE_DETAILS[page];

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-logo"><span>SB</span><div>SmartBilling<small>Admin console</small></div></div>
        <nav>
          {navigation.map(([key, icon, label]) => (
            <button key={key} className={page === key ? "active" : ""} onClick={() => switchPage(key)}>
              {icon} {label}
            </button>
          ))}
        </nav>
        <div className="admin-sidebar-user">
          <FaShieldHalved />
          <div><strong>Administrator</strong><small>{adminEmail}</small></div>
        </div>
        <button className="admin-logout" onClick={onLogout}><FaArrowLeft /> Back to website</button>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
          <div>
            <span className="admin-page-kicker">{pageDetails.kicker}</span>
            <h1>{pageDetails.title}</h1>
            <p>{pageDetails.description}</p>
          </div>
          <div className="admin-header-actions">
            <span className="admin-live"><i /> Live</span>
            <button onClick={() => load()} disabled={loading}><FaRotate /> Refresh</button>
          </div>
        </header>

        <div className="admin-mobile-nav">
          {navigation.map(([key, , label]) => (
            <button key={key} className={page === key ? "active" : ""} onClick={() => switchPage(key)}>{label}</button>
          ))}
        </div>

        {error ? <div className="admin-error">{error}<button onClick={() => load()}>Try again</button></div> : null}
        {notice ? <div className="admin-notice">{notice}</div> : null}
        {loading && !data ? <div className="admin-loading">Loading live billing data…</div> : null}

        {data ? (
          <>
            {page === "overview" ? (
              <>
                <section className="admin-summary">
                  {summaryCards.map((card) => (
                    <button key={card.label} className={`summary-card ${card.tone}`} onClick={() => switchPage(card.page)}>
                      <div className="summary-icon">{card.icon}</div>
                      <div><span>{card.label}</span><strong>{card.value}</strong></div>
                    </button>
                  ))}
                </section>
                <section className="admin-panel admin-overview-guide">
                  <div className="admin-panel-heading">
                    <div><h2>Separate control pages</h2><p>Open any category from the sidebar or the cards above.</p></div>
                    <span>Updated {formatDate(data.generatedAt)}</span>
                  </div>
                  <div className="overview-links">
                    <button onClick={() => switchPage("trials")}><FaClock /><strong>Active trials</strong><span>Extend trial days per user</span></button>
                    <button onClick={() => switchPage("subscribed")}><FaCalendarCheck /><strong>Subscribed users</strong><span>See plan and renewal details</span></button>
                    <button onClick={() => switchPage("expired")}><FaTriangleExclamation /><strong>Expired trials</strong><span>Restore selected users</span></button>
                    <button onClick={() => switchPage("plans")}><FaIndianRupeeSign /><strong>Plan prices</strong><span>Control 1, 3 and 6 month pricing</span></button>
                  </div>
                </section>
              </>
            ) : null}

            {page === "trials" ? (
              <UserTable
                users={data.users}
                title="Users with free access"
                description="Each user below is inside their current free-trial period."
                search={search}
                setSearch={setSearch}
                allowTrialExtension
                onExtendTrial={extendTrial}
                onForceLogout={forceLogout}
                actionBusy={actionBusy}
              />
            ) : null}

            {page === "subscribed" ? (
              <UserTable
                users={data.users}
                title="Active paid subscriptions"
                description="Existing users retain the plan price they authorised in Razorpay."
                search={search}
                setSearch={setSearch}
                onExtendTrial={extendTrial}
                onForceLogout={forceLogout}
                actionBusy={actionBusy}
              />
            ) : null}

            {page === "expired" ? (
              <UserTable
                users={data.users}
                title="Trial ended without subscription"
                description="Extend a user to immediately restore app access for the chosen number of days."
                search={search}
                setSearch={setSearch}
                allowTrialExtension
                onExtendTrial={extendTrial}
                onForceLogout={forceLogout}
                actionBusy={actionBusy}
              />
            ) : null}

            {page === "plans" ? (
              <section className="plan-grid">
                {plans.map((plan) => (
                  <article className="plan-admin-card" key={plan.id}>
                    <div className="plan-admin-icon"><FaIndianRupeeSign /></div>
                    <span className="plan-version">Version {plan.version}</span>
                    <h2>{plan.durationMonths} month{plan.durationMonths === 1 ? "" : "s"}</h2>
                    <p>Razorpay charges this amount every {plan.durationMonths === 1 ? "month" : `${plan.durationMonths} months`}.</p>
                    <label htmlFor={`plan-${plan.durationMonths}`}>Price for new subscriptions</label>
                    <div className="plan-price-input">
                      <span>₹</span>
                      <input
                        id={`plan-${plan.durationMonths}`}
                        type="number"
                        min="1"
                        step="0.01"
                        value={planDrafts[plan.durationMonths] ?? ""}
                        onChange={(event) => setPlanDrafts((current) => ({
                          ...current,
                          [plan.durationMonths]: event.target.value,
                        }))}
                      />
                    </div>
                    <button onClick={() => savePlan(plan)} disabled={actionBusy === `plan-${plan.durationMonths}`}>
                      {actionBusy === `plan-${plan.durationMonths}` ? "Publishing…" : "Save new-user price"}
                    </button>
                  </article>
                ))}
                {!plans.length ? <div className="admin-empty">Plans could not be loaded.</div> : null}
                <div className="plan-warning">
                  <FaShieldHalved />
                  <div>
                    <strong>Existing autopay is protected</strong>
                    <p>Saving a price creates a new immutable Razorpay plan version. It never changes the amount already authorised by an existing subscriber.</p>
                  </div>
                </div>
              </section>
            ) : null}

            {page === "payments" ? (
              <section className="admin-panel">
                <div className="admin-panel-heading">
                  <div><h2>Recent subscription activity</h2><p>Latest Razorpay and admin trial events</p></div>
                  <span>Updated {formatDate(data.generatedAt)}</span>
                </div>
                <div className="event-list">
                  {data.recentEvents.map((event) => (
                    <article key={event.id}>
                      <div className={`event-dot ${statusClass(event.status)}`} />
                      <div>
                        <strong>{event.type.replaceAll(".", " · ")}</strong>
                        <small>{event.razorpaySubscriptionId || event.paymentId || "Account access event"}</small>
                      </div>
                      <div>
                        <strong>{event.amount ? `₹${event.amount.toLocaleString("en-IN")}` : "Status update"}</strong>
                        <small>{formatDate(event.occurredAt)}</small>
                      </div>
                    </article>
                  ))}
                  {!data.recentEvents.length ? (
                    <div className="admin-empty">Payment events will appear after the first Razorpay checkout.</div>
                  ) : null}
                </div>
              </section>
            ) : null}
          </>
        ) : null}
      </main>
    </div>
  );
}

export default AdminDashboard;
