import axios from "axios";
import { getCookie } from "cookies-next";
export default async function handler(req, res) {
  const { headers,body } = req;
  const getCookies = getCookie("ecom_user", { req, res });
  const user = getCookies && JSON.parse(getCookies);

  if (user) {
    try {
      const { status, statusText, data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/api/v1/user/service?email=${user?.email}`,
        body,
        {
          headers: {
            token: user?.token,
          },
        }
      );
      if (status === 200 && statusText === "OK") {
        return res.status(200).json(data);
      } else {
        res.status(204).json({
          status: false,
          msg: "No Content",
        });
      } 
    } catch (err) {
      console.log("get otp server error", err);
      res.status(500).json({
        status: false,
        msg: err?.response?.data,
      });
    }
  } else {
    res.status(502).json({
      status: false,
      msg: "Bad Gateway",
    });
  }
}
