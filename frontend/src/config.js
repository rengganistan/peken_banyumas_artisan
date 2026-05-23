// Gunakan env variable kalau ada, fallback ke Railway production
const rawBase = import.meta.env.VITE_API_URL || "https://pekenbanyumasartisan-production.up.railway.app";
// Pastikan selalu HTTPS dan tidak ada trailing slash
export const API_BASE = rawBase.replace(/^http:\/\//, "https://").replace(/\/$/, "");
