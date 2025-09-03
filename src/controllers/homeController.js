import db from "../models/index.js";
import CRUDService from "../services/CRUDService.js";

let homePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    console.log(data);
    return res.render("homeController.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getCRUD = (req, res) => {
  return res.render("getcrud.ejs");
};

// tạo bảng user
let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  return res.send("post crud from post server");
};

// hiển thị thông tin user ra ngoài giao diện qua EJS
let displayGetCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();

  return res.render("displayCRUD.ejs", {
    //viết như vậy là truyền biến cho file ejs trong view, object,arry,string
    dataTable: data,
  });
};

//Edit User Information
let getEditCRUD = async (req, res) => {
  let userId = req.query.id; // yêu cầu url có id như này http://localhost:8080/edit-crud?id=6
  console.log(userId);
  if (userId) {
    let userData = await CRUDService.getUserInfoById(userId);

    return res.render("editCRUD.ejs", {
      user: userData,
    });
  } else {
    return res.send("user not found");
  }
};

//updata CRUD
let putCRUD = async (req, res) => {
  let data = req.body;
  let allUser = await CRUDService.updateUserData(data);
  return res.render("displayCRUD.ejs", {
    dataTable: allUser,
  });
};

//xóa user
let deleteCRUD = async (req, res) => {
  let id = req.query.id;
  if (id) {
    await CRUDService.deleteUserById(id);
    return res.send("delete sucseed!");
  } else {
    return res.send("not found a user delete");
  }
};
export default {
  getHomePage: homePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayGetCRUD: displayGetCRUD,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
  deleteCRUD: deleteCRUD,
};
