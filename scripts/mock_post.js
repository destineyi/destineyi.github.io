import http from "http";

const payload = JSON.stringify({
  fullName: "Test User",
  email: "test@example.com",
  message: "Hello from mock client!",
});

const options = {
  hostname: "localhost",
  port: process.env.PORT || 3001,
  path: "/api/enquiry",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(payload),
  },
};

const req = http.request(options, (res) => {
  let data = "";
  res.on("data", (chunk) => (data += chunk));
  res.on("end", () => {
    console.log("Status:", res.statusCode);
    console.log("Body:", data);
  });
});

req.on("error", (err) => {
  console.error("Request error:", err.message);
});

req.write(payload);
req.end();

