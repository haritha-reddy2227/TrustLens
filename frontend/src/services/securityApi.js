const API_URL = "/api/security/analyze";

export const analyzeWebsite = async (url) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => null);
    throw new Error(
      `Failed to analyze website: ${response.status} ${text || ""}`,
    );
  }

  return response.json();
};
