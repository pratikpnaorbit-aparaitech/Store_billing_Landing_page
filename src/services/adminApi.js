const API_BASE_URL = String(import.meta.env.VITE_API_URL || "").trim().replace(/\/$/, "");

async function request(path, options = {}) {
  if (!API_BASE_URL) throw new Error("Admin API URL is not configured.");
  const response = await fetch(`${API_BASE_URL}/api${path}`, {
    ...options,
    headers: {
      "content-type": "application/json",
      ...(options.headers || {}),
    },
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(payload.message || "Admin request failed.");
    error.status = response.status;
    throw error;
  }
  return payload.data;
}

export const loginAdmin = (email, password) => request("/admin/login", {
  method: "POST",
  body: JSON.stringify({ email, password }),
});

export const fetchAdminDashboard = (token, { search = "", status = "all" } = {}) => {
  const query = new URLSearchParams({ search, status, limit: "100" });
  return request(`/admin/dashboard?${query}`, {
    headers: { authorization: `Bearer ${token}` },
  });
};

export const fetchAdminPlans = (token) => request("/admin/plans", {
  headers: { authorization: `Bearer ${token}` },
});

export const updateAdminPlan = (token, durationMonths, amount) => request(`/admin/plans/${durationMonths}`, {
  method: "PATCH",
  headers: { authorization: `Bearer ${token}` },
  body: JSON.stringify({ amount }),
});

export const extendUserTrial = (token, userId, days) => request(`/admin/users/${userId}/trial`, {
  method: "PATCH",
  headers: { authorization: `Bearer ${token}` },
  body: JSON.stringify({ days }),
});

export const forceLogoutUser = (token, userId) => request(`/admin/users/${userId}/force-logout`, {
  method: "POST",
  headers: { authorization: `Bearer ${token}` },
});

export const setUserAccountAccess = (token, userId, paused, reason = "") => request(`/admin/users/${userId}/access`, {
  method: "PATCH",
  headers: { authorization: `Bearer ${token}` },
  body: JSON.stringify({ paused, reason }),
});
