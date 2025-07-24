const API_BASE_URL = window.RUNTIME_CONFIG?.USER_SERVICE_URL || "http://localhost:8081/api/users";

export const registerUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) throw new Error("Failed to register user");
  return await response.json();
};

export const loginUser = async (loginData) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });
  if (!response.ok) throw new Error("Invalid login credentials");
  return await response.json();
};
