import { MongoClient } from "mongodb";

const createClient = async url => {
  try {
    console.log("Attempting to create client");
    const client = await MongoClient.connect(url, {
      useNewUrlParser: true
    });
    console.log("Sucessfully created client");
    return client;
  } catch (error) {
    console.log(error);
  }
};

const createDBO = async (connection, database) => {
  try {
    console.log("Attempting to create DBO");
    const dbo = await connection.db(database);
    console.log("Sucessfully created DBO");
    return dbo;
  } catch (error) {
    console.log(error);
  }
};

const runMongoQuery = async (dbo, query, collection) => {
  try {
    console.log("Attempting to run query on Mongo");
    const data = await dbo
      .collection(collection)
      .find(query)
      .toArray();
    console.log("Sucessfully ran query");
    return data;
  } catch (error) {
    console.log(error);
  }
};

const RunMongoCommand = async (database, query, collection) => {
  try {
    const url = "mongodb://localhost:27017";
    const client = await createClient(url);
    const dbo = await createDBO(client, database);
    const data = await runMongoQuery(dbo, query, collection);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default RunMongoCommand;
