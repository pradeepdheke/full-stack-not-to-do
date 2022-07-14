import mongoose from "mongoose";

export const dbConnect = () => {
  try {
    
    const conn = mongoose.connect(process.env.MONGO_CLIENT);
    conn && console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
