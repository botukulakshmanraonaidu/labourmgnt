const API_BASE = "http://localhost:8000/api";

async function postJson(path, payload) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify(payload)
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok || data.ok === false) {
    const message = data.error || "Request failed";
    throw new Error(message);
  }
  return data;
}

export { postJson, API_BASE };