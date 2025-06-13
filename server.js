const express = require("express");
const cors = require("cors");
const path = require("path");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Route 1: Restaurant List

app.get("/swiggy", async (req, res) => {
  try {
    const swiggyUrl =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const response = await fetch(swiggyUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/119.0.0.0 Safari/537.36",
        Accept: "application/json",
      },
    });

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      console.error("Not JSON response. Received HTML:", text.slice(0, 200));
      throw new Error("Swiggy returned non-JSON data (likely bot protection)");
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching Swiggy data:", error);
    res.status(500).json({ error: "Failed to fetch Swiggy data" });
  }
});

// Route 2: Restaurant Menu by resId

app.get("/menu/:resId", async (req, res) => {
  const { resId } = req.params;

  const menuUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=${resId}`;

  try {
    const response = await fetch(menuUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/119.0.0.0 Safari/537.36",
        Accept: "application/json",
      },
    });

    const contentType = response.headers.get("content-type");
    const text = await response.text();

    if (!contentType || !contentType.includes("application/json")) {
      console.error("Non-JSON response from Swiggy:");
      console.error(text.slice(0, 300));
      throw new Error("Swiggy returned non-JSON content.");
    }

    const data = JSON.parse(text);
    res.json(data);
  } catch (err) {
    console.error("Error in /menu/:resId route", err.message);
    res.status(500).json({ error: "Failed to fetch menu" });
  }
});

app.use(express.static(path.join(__dirname, "dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
