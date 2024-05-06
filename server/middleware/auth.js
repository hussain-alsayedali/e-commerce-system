export function verifyTokenCustomer(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(403)
      .json({ error: "A token is required for authentication" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decoded.role !== "customer") {
      return res.status(403).json({ error: "Forbidden" });
    }
    req.user = decoded;
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }

  next();
}
export function verifyTokenAdmin(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(403)
      .json({ error: "A token is required for authentication" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decoded.role !== "admin") {
      return res.status(403).json({ error: "Forbidden" });
    }
    req.user = decoded;
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }

  next();
}
