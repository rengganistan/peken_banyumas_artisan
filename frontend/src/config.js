// Gunakan env variable kalau ada, fallback ke Railway production
export const API_BASE = import.meta.env.VITE_API_URL || "https://pekenbanyumasartisan-production.up.railway.app";
