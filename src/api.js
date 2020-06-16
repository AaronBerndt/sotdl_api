import RunMongoCommand from "./utilities/RunMongoCommand";

export const GetAncestries = async ({ query }, res) => {
  try {
    const data = await RunMongoCommand(query, "ancestries", "select");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json("Api Failed");
  }
};

export const GetPaths = async ({ query }, res) => {
  try {
    const data = await RunMongoCommand(query, "paths", "select");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const GetSpells = async ({ query }, res) => {
  try {
    const data = await RunMongoCommand(query, "spells", "select");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const GetCharacters = async ({ query }, res) => {
  try {
    const data = await RunMongoCommand(query, "characters", "select");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const InsertInto = async (
  { query: { collectionName, documentObject: query } },
  res
) => {
  try {
    console.log(collectionName, documentObject);
    const data = await RunMongoCommand(query, collectionName, "insert");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};
