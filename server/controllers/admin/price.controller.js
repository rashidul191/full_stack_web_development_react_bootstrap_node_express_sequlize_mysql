const { Price } = require("../../models/index.js");
const { sendSuccess, sendError } = require("../../utility/response.handle.js");
const ImageFile = require("../../lib/ImageFile.js");
const imageHandler = new ImageFile("prices");
const {
  indexService,
  createService,
  showService,
  updateService,
  deleteService,
} = require("../../utility/curd.service.js");

module.exports.index = async (req, res) => {
  try {
    const result = await indexService(Price);
    sendSuccess(res, "Find all data successful", result);
  } catch (error) {
    sendError(res, "Can't find data in the database!!", error);
  }
};

module.exports.create = async (req, res, next) => {
  try {
    const data = req.body;
    data.image = req.file ? imageHandler.store(req.file) : null; // image manage
    const result = await createService(Price, data);
    sendSuccess(res, "Successfully create Price!", result);
  } catch (error) {
    next(error);
    console.log("create: ", error);
    sendError(res, "Can't create data!!", error);
  }
};

module.exports.show = async (req, res) => {
  try {
    let id = req.params.id;
    const result = await showService(Price, id);
    sendSuccess(res, "Successfully found single data!!", result);
  } catch (error) {
    sendError(res, "Can't find data in the database!!", error);
  }
};

module.exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const record = await Price.findByPk(id);
    if (!record) throw new Error("Record not found");
    if (req.file) {
      data.image = imageHandler.store(req.file);
    } else {
      data.image = record.image;
    }
    const result = await updateService(Price, id, data);
    sendSuccess(res, "Updated successfully!!", result);
  } catch (error) {
    sendError(res, "Can't update Price!!", error);
  }
};

module.exports.delete = async (req, res, next) => {
  const result = await deleteService(Price, req.params.id);
  try {
    sendSuccess(res, "Delete successfully!!", result);
  } catch (error) {
    next(error);
    sendError(res, "Can't delete data!!", error);
  }
};
