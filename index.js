const express = require("express");
const app = express();
const port = 3000;
const triangleRouter = require("./routes/triangle");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/triangle", triangleRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({message: err.message});
  return;
});
app.listen(port, () => {
  console.log(`React Tech Test App listening at http://localhost:${port}`);
});