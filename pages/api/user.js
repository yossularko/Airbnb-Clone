export default async function user(req, res) {
  const { cookies } = req;

  const jwt = cookies.airbnbtoken;

  if (!jwt) {
    return res
      .status(401)
      .json({ status: "You are logged out", your_session: "empty" });
  }

  res.status(200).json({ status: "You are logged in", your_session: jwt });
}
