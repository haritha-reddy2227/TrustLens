const analyzeUrl = (url) => {
  const result = {
    https: false,
    suspiciousKeywords: false,
    suspiciousCharacters: false,
  };

  if (url.startsWith("https://")) {
    result.https = true;
  }

  const keywords = [
    "login",
    "verify",
    "account",
    "password",
    "bank",
    "secure",
    "update",
  ];

  const lowerUrl = url.toLowerCase();

  result.suspiciousKeywords = keywords.some((keyword) =>
    lowerUrl.includes(keyword),
  );

  result.suspiciousCharacters = url.includes("@") || url.includes("..");

  return result;
};

module.exports = {
  analyzeUrl,
};
