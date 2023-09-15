const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
  handleRedirectUser,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);

router.get("/analytics/:shortId", handleGetAnalytics);

router.get("/:shortId", handleRedirectUser);



module.exports = router;
