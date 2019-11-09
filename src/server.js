import express from "express";
import cors from "cors";

import { GetAncestries, GetPaths, GetSpells } from "./api.js";
const app = express();
app.use(cors());
const PORT = 3000;

app.get("/", (req, res) => res.status(200).json({ message: "Hello World!" }));
app.get("/ancestries", GetAncestries);
app.get("/paths", GetPaths);
app.get("/spells", GetSpells);
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
