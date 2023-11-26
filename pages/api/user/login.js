import axios from "axios";
import { setCookie } from "cookies-next";
export default async function handler(req, res) {
  const { headers, body } = req;

  if (body) {
    try {
      const { status, statusText, data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_SERVER_URL}/api/v1/user/login`,
        body
      );
      if (status === 200 && statusText === "OK") {
        setCookie('ecom_user', data, { req, res, maxAge: 60 * 6 * 24 * 365 });
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
