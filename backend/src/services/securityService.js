const { analyzeUrl } = require("./urlAnalyzer");
const { calculateTrustScore } = require("./trustScoreService");

const analyzeWebsite = async (url) => {
  const analysis = analyzeUrl(url);

  const trustResult = calculateTrustScore(analysis);

  return {
    url: url,

    score: trustResult.score,

    status: trustResult.status,

    checks: {
      https: analysis.https,
      suspiciousKeywords: analysis.suspiciousKeywords,
      suspiciousCharacters: analysis.suspiciousCharacters,
    },
  };
};

module.exports = {
  analyzeWebsite,
};
