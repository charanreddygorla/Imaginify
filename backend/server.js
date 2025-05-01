// server.js
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const FormData = require("form-data"); // ✅ correct import
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
const upload = multer({ dest: "uploads/" });

app.post("/remove-bg", upload.single("image"), async (req, res) => {
  const apiKey = process.env.REMOVE_BG_API_KEY;

  if (!apiKey) return res.status(500).send("API key not set.");

  try {
    const formData = new FormData();
    formData.append("image_file", fs.createReadStream(req.file.path));
    formData.append("size", "auto");

    const response = await axios.post("https://api.remove.bg/v1.0/removebg", formData, {
      headers: {
        ...formData.getHeaders(),
        "X-Api-Key": apiKey,
      },
      responseType: "arraybuffer",
    });

    fs.unlinkSync(req.file.path); // delete temp file

    res.set("Content-Type", "image/png");
    res.send(response.data);
  } catch (error) {
    console.error("Error removing background:", error?.response?.data || error.message);
    res.status(500).send("Background removal failed.");
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
