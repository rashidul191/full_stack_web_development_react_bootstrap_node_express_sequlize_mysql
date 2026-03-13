const { ContactMessage } = require("../../models/index.js");
const { sendSuccess, sendError } = require("../../utility/response.handle.js");

const {
  indexService,
  createService,
  showService,
  updateService,
  deleteService,
} = require("../../utility/curd.service.js");

module.exports.index = async (req, res) => {
  try {
    const result = await indexService(ContactMessage);

    sendSuccess(res, "Find all data successful", result);
  } catch (error) {
    sendError(res, "Can't find data in the database!!", error);
  }
};

module.exports.show = async (req, res) => {
  try {
    let id = req.params.id;
    const result = await showService(ContactMessage, id);
    sendSuccess(res, "Successfully found single data!!", result);
  } catch (error) {
    sendError(res, "Can't find data in the database!!", error);
  }
};

module.exports.delete = async (req, res, next) => {
  const result = await deleteService(ContactMessage, req.params.id);
  try {
    sendSuccess(res, "Delete successfully!!", result);
  } catch (error) {
    next(error);
    sendError(res, "Can't delete data!!", error);
  }
};
