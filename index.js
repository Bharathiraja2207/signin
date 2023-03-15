
import express from "express"; // "type": "module"
import { MongoClient } from 'mongodb'
import * as dotenv from 'dotenv'
import signinRouter from './router/login.router.js';
// import { auth } from "./middleware/auth.js";
import cors from "cors";

// import bcrypt   from ' bcrypt'
dotenv.config()
const app = express();

// console.log(process.env.mongo_url)

const PORT = process.env.PORT;
// const PORT = 4000


// const mongo_url = 'mongodb://127.0.0.1';
const mongo_url =(process.env.mongo_url)
export const client = new MongoClient(mongo_url);
await client.connect();
  console.log('mongo is connected!!');

 app.use(cors ())
  app.use(express.json())

  
app.get("/", function (request, response) {
  response.send("🙋‍♂️,hello.. 🌏 🎊✨🤩");
});

          

app.use("/users",signinRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));


