const API_BASE_URL = String(import.meta.env.VITE_API_URL || "").trim().replace(/\/$/, "");

export async function fetchPublicPlans() {
  if (!API_BASE_URL) throw new Error("Subscription API URL is not configured.");
  const response = await fetch(`${API_BASE_URL}/api/subscriptions/plans`);
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.message || "Subscription plans could not be loaded.");
  return payload.data;
}
