import axios from "axios";

export const sendMail = async (email, name, message) => {
  try {
    let request = await axios
      .post("/api/email", {
        name: name,
        email: email,
        message: message,
      })
      .then((res) => {
        return res;
      });
    return request.status === 200 ? true : false;;
  } catch (err) {
    console.error(err);
  }
};