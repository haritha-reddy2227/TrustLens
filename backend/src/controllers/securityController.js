const securityService = require("../services/securityService");

const analyzeWebsite = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        message: "URL is required",
      });
    }

    const result = await securityService.analyzeWebsite(url);

    res.json(result);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Website analysis failed",
    });
  }
};

module.exports = {
  analyzeWebsite,
};
