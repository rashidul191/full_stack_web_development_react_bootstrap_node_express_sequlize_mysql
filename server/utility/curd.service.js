// get all data
module.exports.indexService = async (model) => {
  return await model.findAll({});
};

// create data
module.exports.createService = async (model, data) => {
  return await model.create(data);
};

// get single by id
module.exports.showService = async (model, id) => {
  return await model.findByPk(id);
};

// update single by id
module.exports.updateService = async (model, id, data) => {
  const record = await model.findByPk(id);
  if (!record) throw new Error("Record not found");
  return await record.update(data);
};

// bulk update multiple records
module.exports.bulkUpdateService = async (model, dataArray) => {
  // dataArray = [{ id: 1, data: {...} }, { id: 2, data: {...} }]
  const promises = dataArray.map((item) =>
    model.findByPk(item.id).then((record) => record?.update(item.data)),
  );
  return await Promise.all(promises);
};

// delete single by id
module.exports.deleteService = async (model, id) => {
  const deleted = await model.destroy({
    where: { id },
  });
  if (!deleted) throw new Error("Record not found");
  return deleted;
};

// bulk delete
module.exports.bulkDeleteService = async (model, ids) => {
  // ids = [1,2,3]
  const results = await model.destroy({ where: { id: ids } });
  return { message: `Deleted ${results} records successfully` };
};

// query with filter, pagination, sorting
module.exports.queryDataService = async (model, filters = {}, queries = {}) => {
  const { page = 1, limit = 10, sortBy = "id", filterBy = null } = queries;
  const offset = (page - 1) * limit;
  const result = await model.findAll({
    where: filters,
    offset: offset,
    limit: limit,
    order: [[sortBy, "ASC"]],
    attributes: filterBy || undefined,
  });

  const totalRecords = await model.count({ where: filters });
  const pageCount = Math.ceil(totalRecords / limit);
  return { totalRecords, pageCount, result };
};
