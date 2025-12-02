import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "uma_chave_secreta";

export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, SECRET);
    req.userId = decoded.id;
    return next();
  } catch (error) {
    return res.status(401).json({ error: "Token inválido" });
  }
};
