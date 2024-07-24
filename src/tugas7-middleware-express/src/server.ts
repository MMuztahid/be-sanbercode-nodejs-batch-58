import express from "express";
const uploadRoute = require('./route');

const app = express();
const PORT = 3000;
app.use(express.json());

app.use("/api" , uploadRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
