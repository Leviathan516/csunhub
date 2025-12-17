import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Needed because you're using ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve ALL files from repo root
app.use(express.static(__dirname));

// Default route → index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`CSUN Hub web server running on port ${PORT}`);
});
