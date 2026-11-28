const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>FurReal</h1><p>Welcome to FurReal.</p>");
});

app.listen(PORT, () => {
  console.log("App at http://localhost:" + PORT);
});
