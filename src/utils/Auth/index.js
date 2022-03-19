import { getUserData, setUserData } from "../../firebase/db";

// login user
export const loginUser = async (data) => {
  const d = await getUserData(data.username).then((user) => {
    if (user) {
      if (user.password === data.password) {
        return {
          status: true,
          message: "Login success",
          user: user,
          accessToken: generateToken(),
        };
      } else {
        return {
          status: false,
          message: "İstifadəçi adı və ya şifrə yanlışdır.",
        };
      }
    } else
      return {
        status: false,
        message: "İstifadəçi adı və ya şifrə yanlışdır.",
      };
  });
  return d;
};

// generate temp token
const generateToken = () => {
  return "_" + Math.random().toString(32).substr(2, 9);
};

// register user

export const registerUser = async (data) => {
  const user = await getUserData(data.username);
  if (user)
    return { status: false, message: "Bu adda istifadəçi artıq mövcutdur." };
  else {
    setUserData(data);
    return {
      status: true,
      message: "İstifadəçi uğurla əlavə edildi.",
    };
  }
};
