const { Blog, Category } = require("../../models/index.js");
const { sendSuccess, sendError } = require("../../utility/response.handle.js");
const { indexService, showService } = require("../../utility/curd.service.js");
module.exports.index = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;

    const data = await indexService(Blog, {
      page,
      limit,
      include: [
        {
          model: Category,
          attributes: ["id", "name"],
          as: "category",
        },
      ],
    });

    sendSuccess(res, "Successfully found all data!!", data);
  } catch (error) {
    sendError(res, "Can't find data in the database!!", error);
  }
};
module.exports.show = async (req, res) => {
  try {
    // const data = await Blog.findByPk(req.params.id);
    const column = req.params.slug;
    const data = await showService(Blog, column, {
      include: [
        {
          model: Category,
          attributes: ["id", "name"],
          as: "category",
        },
      ],
    });
    sendSuccess(res, "Successfully found single data!!", data);
  } catch (error) {
    sendError(res, "Can't find data in the database!!", error);
  }
};
