const express = require("express");
const app = express();
const port = 3000;

var postRouter = require("./routes/posts");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/posts", postRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
