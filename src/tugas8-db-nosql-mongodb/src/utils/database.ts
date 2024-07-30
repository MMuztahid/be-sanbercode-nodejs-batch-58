import mongoose from "mongoose";
import { DATABASE_URL } from "./env";

const connect = async () => {
  try {
    if(DATABASE_URL) {
      await mongoose.connect(DATABASE_URL, {
        autoIndex: true,
        dbName: "clustermine",
        connectTimeoutMS: 10000,
      });
    }
    
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    console.log("Error connecting to database");
  }
};

export default connect;
