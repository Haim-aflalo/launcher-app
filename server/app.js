import express from "express";
import cors from "cors";
import { launchersRouter } from "./routes/launchersRoutes.js";
import { usersRouter } from "./routes/usersRoutes.js";
import { mongooseConnect } from "./db/connect.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use("/api", launchersRouter);
app.use("/api/auth", usersRouter);

mongooseConnect();
app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
