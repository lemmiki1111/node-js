import userServer from "../services/userServer.js";
let handlelLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  let userData = await userServer.handleUserLogin(email, password);

  //khi password và email rỗng null underfind
  if (!email || !password) {
    return res.status(500).json({
      message: "tài khoản không tồn tại trong hệ thống",
    });
  }

  //thành công
  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};
export default {
  handlelLogin: handlelLogin,
};
//check email tồn tại và password
// return userInfor
//access_token:JWT json web token
