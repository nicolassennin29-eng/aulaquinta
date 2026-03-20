const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("brach: Gabriel Alves");
});

app.listen(3005, () => {
  console.log("Servidor ao laine!!!!");
});
