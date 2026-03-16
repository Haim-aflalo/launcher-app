import mongoose from "mongoose";
import "dotenv/config";

export async function mongooseConnect() {
  try {
    mongoose.connect(process.env.MONGOOSE_URI);
    console.log("database connected");
    return true;
  } catch (error) {
    console.error("an error ocurred", error);
    process.exit(-1);
  }
}
