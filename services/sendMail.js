import axios from "axios";

export const sendMail = async (values) => {
  try {
    let request = await axios
      .post("/api/email", {
        name: values.name,
        email: values.email,
        message: values.message,
      })
      .then((res) => {
        return res;
      });
    return request.status === 200 ? true : false;;
  } catch (err) {
    console.error(err);
  }
};