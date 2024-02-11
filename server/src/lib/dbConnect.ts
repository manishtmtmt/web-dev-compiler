import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "wd-compiler",
    });
    console.log("Database Connection established!");
  } catch (error) {
    console.log("Error connecting to database");
  }
};
