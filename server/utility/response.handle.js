const sendSuccess = (res, message, data = {}, statusCode = 200) => {
  return res.status(statusCode).json({
    status: "success",
    message,
    data,
  });
};

const sendError = (res, message, error = {}, statusCode = 400) => {
  return res.status(statusCode).json({
    status: "fail",
    message,
    error: error.message || error,
  });
};

module.exports = {
  sendSuccess,
  sendError,
};
