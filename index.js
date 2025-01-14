const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// ה-API Key שלך
const API_KEY = "rnd_1j5fpMK6BNY1FchJmVsBcMVu8qIT";
const RENDER_API_URL = "https://api.render.com/v1/services";

// Endpoint להחזרת רשימת האפליקציות
app.get("/services", async (req, res) => {
  try {
    const response = await axios.get(RENDER_API_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: "application/json",
      },
    });

    res.json(response.data); // מחזיר את המידע מה-Render API ללקוח
  } catch (error) {
    console.error("Error fetching services:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

// הפעלת השרת
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
