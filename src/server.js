import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine.js";
import initWebRouter from "./route/web.js";
import connectDB from "./config/connectDB.js";
import dotenv from "dotenv"; // khai báo cái này để dùng let port=process.env.PORT
let app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);  //cấu hình file viewEngine.js
initWebRouter(app); //kết nối router
connectDB(); //kết nối database
let port = process.env.PORT || 8000; // nếu nó undefind thì nó chạy cổng 8000
app.listen(port,() => {
  console.log("đã chạy...." + port);
});
