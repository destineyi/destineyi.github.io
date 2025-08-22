import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Mock enquiry endpoint - logs and echoes back data
app.post("/api/enquiry", (req, res) => {
  const { fullName, email, message } = req.body || {};
  console.log("[ENQUIRY]", { fullName, email, message });
  res.status(200).json({
    ok: true,
    received: { fullName, email, message },
    note: "Mock endpoint. Server-side processing to be implemented later.",
  });
});

app.listen(PORT, () => {
  console.log(`Mock API server listening on http://localhost:${PORT}`);
});

