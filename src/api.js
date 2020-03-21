import RunMongoCommand from "./utilities/RunMongoCommand";

export const GetAncestries = async ({ query }, res) => {
  try {
    const data = await RunMongoCommand(query, "ancestries");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json("Api Failed");
  }
};

export const GetPaths = async ({ query }, res) => {
  try {
    const data = await RunMongoCommand(query, "paths");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const GetSpells = async ({ query }, res) => {
  try {
    const data = await RunMongoCommand(query, "spells");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const GetCharacters = async ({ query }, res) => {
  try {
    const data = await RunMongoCommand(query, "characters");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};
