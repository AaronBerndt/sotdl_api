import RunMongoCommand from "./utilities/RunMongoCommand";

export const GetAncestries = async ({ query: { name } }, res) => {
  try {
    const query = name !== undefined ? { Name: name } : {};
    const data = await RunMongoCommand("SHADOWS", query, "ancestries");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const GetPaths = async ({ query: { type } }, res) => {
  try {
    return res.status(200).json(error);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const GetSpells = async ({ query: { tradition, level, type } }, res) => {
  try {
    return res.status(200).json(error);
  } catch (error) {
    return res.status(500).json(error);
  }
};
