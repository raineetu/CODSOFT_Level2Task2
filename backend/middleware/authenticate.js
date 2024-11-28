import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
  try {
    // Check if the Authorization header exists
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "Authorization header is missing",
        success: false,
      });
    }

    // Split the header to extract the token (expected format: "Bearer <token>")
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Token is missing",
        success: false,
      });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.secret_key);

    // Attach user information to the request
    req.user = { userId: decoded.userId };
    next(); // Proceed to the next middleware or route
  } catch (error) {
    return res.status(403).json({
      message: "Invalid or expired token",
      success: false,
    });
  }
};
