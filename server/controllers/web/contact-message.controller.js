const { ContactMessage } = require("../../models/index.js");

const { sendSuccess, sendError } = require("../../utility/response.handle.js");

const { createService } = require("../../utility/curd.service.js");

module.exports.create = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await createService(ContactMessage, data);
    sendSuccess(res, "Successfully send message!", result);
  } catch (error) {
    next(error);
    console.log("create: ", error);
    sendError(res, "Can't create data!!", error);
  }
};
