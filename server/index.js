const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");
const app = express();
const port = 5000;
require("dotenv").config();

app.use(
  cors({
    origin: process.env.CLIENT_ADDRESS,
  })
);

app.use(express.json());

function extractDriveLinks(html) {
  const $ = cheerio.load(html);
  const links = [];
  $('a[href*="drive.google.com/file"]').each((_, a) => {
    links.push($(a).attr("href"));
  });
  return links;
}

function extractFileId(url) {
  const match = url.match(/\/file\/d\/(.*?)(\/|$)/);
  return match ? match[1] : null;
}

app.post("/api/list", async (req, res) => {
  try {
    const { url } = req.body;
    const page = await axios.get(url);
    const links = extractDriveLinks(page.data);
    const ids = links.map(extractFileId).filter(Boolean);
    res.json({ ids });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to extract file links");
  }
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
