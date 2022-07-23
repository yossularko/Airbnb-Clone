import { serialize } from "cookie";

export default async function (req, res) {
  const { cookies } = req;

  const jwt = cookies.airbnbtoken;

  const serialized = serialize("airbnbtoken", null, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: -1,
    path: "/",
  });

  if (!jwt) {
    res.status(200).json({ message: "You are already logged out" });
  }

  res.setHeader("Set-Cookie", serialized);
  res.status(200).json({ message: "Succesfully logout" });
}
