import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;
  app.use(express.json());

  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, specialization, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      await fetch("https://script.google.com/macros/s/AKfycbw-saieiW0OFerGoHXo4WE_kSv_Vyc3MlTQBu26loFSyboreKft6yoPuWfnzR2QDxl7/exec", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          name,
          email,
          phone: phone || "",
          company: "",
          service: specialization || "",
          message,
        }),
      });

      console.log("Submitted to Google Sheet:", { name, email });
      return res.status(200).json({ message: "Inquiry received successfully" });
    } catch (error) {
      console.error("Google Sheet error:", error);
      return res.status(500).json({ error: "Failed to save inquiry" });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log("Server running on http://localhost:3000");
  });
}

startServer();
