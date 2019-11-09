import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = 3000;

app.get("/", (req, res) => res.status(200).json({ message: "Hello World!" }));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
