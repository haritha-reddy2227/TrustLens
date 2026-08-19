const calculateTrustScore = (analysis) => {
  let score = 100;

  if (!analysis.https) {
    score -= 20;
  }

  if (analysis.suspiciousKeywords) {
    score -= 25;
  }

  if (analysis.suspiciousCharacters) {
    score -= 30;
  }

  if (score < 0) {
    score = 0;
  }

  let status;

  if (score >= 80) {
    status = "GENUINE";
  } else if (score >= 50) {
    status = "UNVERIFIED";
  } else {
    status = "PHISHING";
  }

  return {
    score,
    status,
  };
};

module.exports = {
  calculateTrustScore,
};
