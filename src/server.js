import express from "express";
import cors from "cors";

import {
  GetAncestries,
  GetPaths,
  GetSpells,
  GetCharacters,
  InsertInto,
} from "./api.js";
import ParseText from "./parse_api";
const app = express();
app.use(cors());
const PORT = 3000;

app.get("/", (req, res) => res.status(200).json({ message: "Hello World!" }));
app.get("/ancestries", GetAncestries);
app.get("/paths", GetPaths);
app.get("/spells", GetSpells);
app.get("/characters", GetCharacters);
app.post("/insertInto", InsertInto);
app.get("/parse_text", ParseText);
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
