import mongoose from "mongoose";

export const connectToDB = async () => {
  const connection = {};

  console.log(connection);
  try {
    if (connection.isConnected) return;

    const db = await mongoose.connect(process.env.DATABASE_URL);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
