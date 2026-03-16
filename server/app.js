import express from "express";
import cors from "cors";
import { launcherRouter } from "./routes/launcherRoutes.js";
import { mongooseConnect } from "./db/connect.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use("/api", launcherRouter);

mongooseConnect();
app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
