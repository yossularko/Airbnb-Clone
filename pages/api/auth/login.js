import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

const secret = process.env.SECRET;

export default async function (req, res) {
  const { email, password } = req.body;

  if (email === "admin@dev.com" && password === "21232123") {
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        email: email,
      },
      secret
    );

    const serialized = serialize("airbnbtoken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialized);
    res.status(200).json({ message: `You are login as ${email}` });
  } else {
    res.status(401).json({ message: "Invalid credencial!" });
  }
}
