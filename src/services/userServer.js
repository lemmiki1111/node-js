import db from "../models/index.js";
import bcrypt from "bcrypt";
let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checUserkEmail(email); //gọi hàm bên dưới check mail
      if (isExist) {
        //user already exist
        //compare password
        let user = await db.User.findOne({
          where: { email: email },
          attributes: ["email", "password", "roleId"], // chỉ lấy cột email
          raw: true,
        });

        if (user) {
          //so sánh password
          const checkPassword = await bcrypt.compare(password, user.password); //password (user), user.password(băm hash)
          if (checkPassword) {
            userData.errCode = 0;
            userData.errMessage = "OK";
            delete user.password;
            userData.user = user;
          } //điều kiện if else 3
          else {
            userData.errCode = 3;
            userData.errMessage = "wrong password";
          }
        } //điều kiện if else 2
        else {
          userData.errCode = 2;
          userData.errMessage = "user not found";
        }
      } //điều kiện if else 1
      else {
        //return err
        userData.errCode = 1;
        userData.errMessage = `yourEmail isn't exist in your system. plz try other email!`;
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let checUserkEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

export default {
  handleUserLogin: handleUserLogin,
};
