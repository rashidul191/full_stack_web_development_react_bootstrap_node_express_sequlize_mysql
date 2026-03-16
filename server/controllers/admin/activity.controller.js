const { Activity } = require("../../models/index.js");
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
    const result = await indexService(Activity);

    sendSuccess(res, "Find all data successful", result);
  } catch (error) {
    sendError(res, "Can't find data in the database!!", error);
  }
};

module.exports.create = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await createService(Activity, data);
    sendSuccess(res, "Successfully create Activity!", result);
  } catch (error) {
    next(error);
    sendError(res, "Can't create data!!", error);
  }
};

module.exports.show = async (req, res) => {
  try {
    let id = req.params.id;
    const result = await showService(Activity, id);
    sendSuccess(res, "Successfully found single data!!", result);
  } catch (error) {
    sendError(res, "Can't find data in the database!!", error);
  }
};

module.exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const record = await Activity.findByPk(id);
    if (!record) throw new Error("Record not found");
    const result = await updateService(Activity, id, data);
    sendSuccess(res, "Updated successfully!!", result);
  } catch (error) {
    sendError(res, "Can't update Activity!!", error);
  }
};

module.exports.delete = async (req, res, next) => {
  const result = await deleteService(Activity, req.params.id);
  try {
    sendSuccess(res, "Delete successfully!!", result);
  } catch (error) {
    next(error);
    sendError(res, "Can't delete data!!", error);
  }
};
