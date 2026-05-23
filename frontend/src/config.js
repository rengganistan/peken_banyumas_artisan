// Gunakan env variable kalau ada, fallback ke localhost untuk development
export const API_BASE = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
