const { BusinessSetting } = require("../../models/index.js");
const { createService } = require("../../utility/curd.service.js");
const { sendSuccess, sendError } = require("../../utility/response.handle.js");
const ImageFile = require("../../lib/ImageFile.js");
const imageHandler = new ImageFile("business-settings");

module.exports.index = async (req, res, next) => {
  try {
    const data = await BusinessSetting.findAll({});

    sendSuccess(res, "Find data successfully", data);
  } catch (error) {
    next(error);
    // sendError(res, "Can't find data in the database!!", error);
  }
};

module.exports.update = async (req, res, next) => {
  try {
    const data = req.body;
    // console.log(data);

    // file handle
    if (req.files) {
      for (const file of req.files) {
        // data[file.fieldname] = imageHandler.store(file);
        const key = file.fieldname;
        const setting = await BusinessSetting.findOne({ where: { key } });
        const oldPath = setting ? setting.value : null;
        console.log("oldpath: ", oldPath);
        data[key] = imageHandler.update(oldPath, file);
        console.log("datakey: ", data[key]);
      }
    }

    for (const key in data) {
      const setting = await BusinessSetting.findOne({ where: { key } });
      if (setting) {
        await setting.update({ value: data[key] });
      } else {
        await BusinessSetting.create({
          key: key,
          value: data[key],
        });
      }
    }

    //  await Promise.all(
    //   Object.keys(data).map((key) =>
    //     BusinessSetting.upsert({
    //       key,
    //       value: data[key],
    //     })
    //   )
    // );

    sendSuccess(res, "Updated successfully");
  } catch (error) {
    console.log(error);
    next(error);
    // sendError(res, "Can't Update data!!", error);
  }
};
