const API_BASE_URL = window.RUNTIME_CONFIG?.PRODUCT_SERVICE_URL || "http://localhost:8082/api/products";

export const fetchAllProducts = async () => {
  const response = await fetch(`${API_BASE_URL}`);
  if (!response.ok) throw new Error("Failed to fetch products");
  return await response.json();
};
