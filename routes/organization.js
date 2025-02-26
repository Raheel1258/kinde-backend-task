const express = require("express");
const fetchFromAPI = require("../utils/fetchFromAPI");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const token = process.env.ACCESS_TOKEN_SECRET;
    if (!token) {
      return res.status(401).json({ error: "Authorization token is required" });
    }

    const response = await fetchFromAPI(`${process.env.KINDE_URL}/organizations`, token);
    res.json(response);
  } catch (error) {
    next(error); 
  }
});

router.get("/:orgId/users", async (req, res, next) => {
  try {
    const { orgId } = req.params;
    if (!orgId) {
      return res.status(400).json({ error: "Organization ID is required" });
    }

    const token = process.env.ACCESS_TOKEN_SECRET;
    if (!token) {
      return res.status(401).json({ error: "Authorization token is required" });
    }

    const response = await fetchFromAPI(`${process.env.KINDE_URL}/organizations/${orgId}/users`, token);
    res.json(response);
  } catch (error) {
    next(error); 
  }
});

module.exports = router;
