import express from "express";
import cors from "cors";
import "core-js/stable";
import "regenerator-runtime/runtime";

import {
  GetAncestries,
  GetPaths,
  GetSpells,
  GetCharacters,
  InsertInto,
} from "./api.js";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.status(200).json({ message: "Hello World!" }));
app.get("/ancestries", GetAncestries);
app.get("/paths", GetPaths);
app.get("/spells", GetSpells);
app.get("/characters", GetCharacters);
app.post("/insertInto", InsertInto);
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
