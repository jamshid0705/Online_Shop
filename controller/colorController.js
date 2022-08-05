const catchError = require("../utility/catchError");
const Color = require("../models/colorModel");

const getAll = catchError(async (req, res, next) => {
  const data = await Color.find();

  res.status(200).json({
    data: data,
  });
});

const add = catchError(async (req, res, next) => {
  const data = await Color.create([
    {
      color: "While",
    },
    {
      color: "Black",
    },
    {
      color: "Red",
    },
    {
      color: "Green",
    },
    {
      color: "Blue",
    },
  ]);

  res.status(200).json({
    data: data,
  });
});

module.exports = { getAll, add };
