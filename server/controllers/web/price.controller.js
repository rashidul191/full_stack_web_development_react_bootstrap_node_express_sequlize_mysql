const { Price } = require("../../models/index.js");

const { sendSuccess, sendError } = require("../../utility/response.handle.js");
const { indexService, showService } = require("../../utility/curd.service.js");
module.exports.index = async (req, res) => {
  try {
    const data = await indexService(Price);

    sendSuccess(res, "Successfully found all data!!", data);
  } catch (error) {
    sendError(res, "Can't find data in the database!!", error);
  }
};
module.exports.show = async (req, res) => {
  try {
    // const data = await Price.findByPk(req.params.id);
    const column = req.params.slug;
    const data = await showService(Price, column);
    sendSuccess(res, "Successfully found single data!!", data);
  } catch (error) {
    sendError(res, "Can't find data in the database!!", error);
  }
};
