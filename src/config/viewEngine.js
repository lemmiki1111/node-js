import express from "express";

let configViewEngine = (app) => {
  app.use(express.static("./src/public"));  // Nói cho express biết thư mục chứa file tĩnh (ảnh, css, js)
  app.set("view engine","ejs");  // Chỉ định template engine là EJS
  app.set("views","./src/views");  // Chỉ định thư mục chứa các file .ejs
};
export default configViewEngine;
