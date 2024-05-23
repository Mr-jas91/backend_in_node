//require("dovenv").config({ path: "./env" });
import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import { User } from "./models/user.models.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("MONGODB connection failed !!!", err));



app.get("/",  (req, res) => {
  res.send( "hello world!" );
});
/*
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
    throw err;
  }
})();
*/
