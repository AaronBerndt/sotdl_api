import { MongoClient } from "mongodb";

const createClient = async () => {
  try {
    console.log("Attempting to create client");
    const uri = process.env.MONGO_URI;
    console.log(uri);
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Sucessfully created client");
    return client;
  } catch (error) {
    console.log(error);
  }
};

const createDBO = async (connection) => {
  try {
    console.log("Attempting to create DBO");
    const dbo = await connection.db("sotdl");
    console.log("Sucessfully created DBO");
    return dbo;
  } catch (error) {
    console.log(error);
  }
};

const runMongoQuery = async (dbo, query, collection, queryType) => {
  try {
    console.log(query);
    const data =
      queryType === "select"
        ? await dbo.collection(collection).find(query).toArray()
        : await dbo.collection(collection).insertOne(JSON.parse(query));
    console.log("Sucessfully ran query");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const closeClient = async (client) => {
  try {
    console.log("Attempting to close client");
    await client.close();
    console.log("Sucessfully closed client");
  } catch (error) {
    console.log(error);
  }
};
const RunMongoCommand = async (query, collection, queryType) => {
  try {
    const client = await createClient();
    const dbo = await createDBO(client);
    const data = await runMongoQuery(dbo, query, collection, queryType);
    await closeClient(client);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default RunMongoCommand;
