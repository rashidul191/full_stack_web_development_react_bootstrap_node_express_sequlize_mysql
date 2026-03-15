const jwt = require("jsonwebtoken");

/**
 * 1. check if token exists
 * 2. if not token send res
 * 3. decode the token
 * 4. if valid token then call next() *
 */

const checkLogin = async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")?.[1];
    if (!token) {
      return res.status(401).json({
        status: "fail",
        error: "You are not a logged in",
        //  error: "UnAuthorized access",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY || 'MERN%RT', function (err, decoded) {
      if (err) {
        return res.status(403).json({
          status: "fail",
          message: "Forbidden access",
        });
      }
      req.user = decoded; // user role email = decoded
      next(error);
    });
  } catch (error) {
    next("Authentication Failure!");
    return res.status(401).json({
      status: "fail",
      error: "Invalid token",
    });
  }
};

module.exports = checkLogin;
