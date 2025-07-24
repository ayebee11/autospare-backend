const API_BASE_URL = window.RUNTIME_CONFIG?.ORDER_SERVICE_URL || "http://localhost:8083/api/orders";

export const placeOrder = async (orderData) => {
  const response = await fetch(`${API_BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });
  if (!response.ok) throw new Error("Failed to place order");
  return await response.json();
};

export const getOrdersByUser = async (userId) => {
  const response = await fetch(`${API_BASE_URL}/user/${userId}`);
  if (!response.ok) throw new Error("Failed to fetch orders");
  return await response.json();
};
