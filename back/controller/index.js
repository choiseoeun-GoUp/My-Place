const { mapDiaryContents } = require("../repository/dummyContents");
const contentsData = mapDiaryContents;
const contentsController = {
  findAll: (req, res) => {
    res.status(200).json(contentsData);
  },

  findByCategory: (req, res) => {
    const filterData = contentsData.filter(
      (el) => el.category === req.params.category
    );

    if (filterData) {
      res.status(200).json(filterData);
    } else {
      res.status(404).json("에러");
    }
  },
  createOne: (req, res) => {
    const { title, content, address, category } = req.body;
    const id = contentsData.length + 1;
    const createdAt = new Date();
    const newData = {
      id,
      title,
      content,
      address,
      category,
      createdAt,
    };
    contentsData.unshift(newData);
    res.status(200).json(contentsData);
  },

  updateById: (req, res) => {
    const updateIdx = contentsData.findIndex(
      (el) => el.id === Number(req.params.id)
    );
    const newUpdate = {
      ...contentsData[updateIdx],
      ...req.body,
    };
    contentsData.splice(contentsData[updateIdx], 1, newUpdate);
    res.status(200).json(contentsData);
  },

  deleteById: (req, res) => {
    const deleteData = contentsData.findIndex(
      (el) => el.id === Number(req.params.id)
    );
    contentsData.splice(deleteData, 1);
    res.status(200).json(contentsData);
  },
};

module.exports = {
  contentsController,
};
