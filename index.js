const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Render aktif!" });
});

app.post("/test", (req, res) => {
  res.json({
    status: "success",
    data: req.body
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server berjalan di port " + port);
});
