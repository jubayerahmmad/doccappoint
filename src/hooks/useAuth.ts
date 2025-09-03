export function useAuth() {
  if (typeof window === "undefined") return null;
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  return token && user ? JSON.parse(user) : null;
}
