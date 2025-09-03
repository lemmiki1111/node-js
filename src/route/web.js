import express from "express";
import homePageController from "../controllers/homeController.js";
let router = express.Router();

let initWebRouter = (app) => {
  router.get("/", homePageController.getHomePage);
  router.get("/crud", homePageController.getCRUD); // page tạo user
  router.post("/post-crud", homePageController.postCRUD);  //đẩy thông tin user lên data từ page tạo user 
  router.get("/get-crud", homePageController.displayGetCRUD); //hiển thị thông tin user
  router.get("/edit-crud", homePageController.getEditCRUD); // page sửa user

  router.post("/put-crud", homePageController.putCRUD); // page đã update user từ page sửa user
  router.get("/delete-crud", homePageController.deleteCRUD); //xóa user
  return app.use("/", router);
};
export default initWebRouter;
