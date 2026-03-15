const jwt = require("jsonwebtoken");

module.exports.generateToken = (auth) => {
  const payload = {
    id: auth.id,
    email: auth.email,
    role: auth.role,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY || "MERN%RT", {
    expiresIn: "10d", // 2day
  });

  // res.cookie("access-token", token, {
  //   httpOnly: true,
  // });

  return token;
};
