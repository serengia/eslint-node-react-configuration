const express = require("express");
const userRouter = require("./backend/router/userRouter");
// const lodash = require("lodash");

const app = express();

// const x = 10;

app.use("/api/v1/user", userRouter);

app.get("/", (req, res) => {
  console.log("Just testing");

  res.status(200).json({
    status: "success",
    message: "<Data here>",
  });
});

app.listen(8000, () => {
  console.log("Server running on port 8000...");
});
