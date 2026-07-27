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
