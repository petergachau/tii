import express from "express";

import cors from "cors";

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));

app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Welcome to tour API");
  });


//   mongoose
//   .connect(process.env.PORT)
//   .then(() => {
//     app.listen(port, () => console.log(`Server running on port ${port}`));
//   })
//   .catch((error) => console.log(`${error} did not connect`));
app.listen(port, () => {
    console.log(`Server running on port: ${port}...`);
  });