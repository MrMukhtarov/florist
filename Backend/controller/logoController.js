const Logo = require("../model/logoSchema.js");

const getAllLogo = async (req, res, next) => {
  let logo;
  try {
    logo = await Logo.find();
  } catch (error) {
    console.log(error);
  }
  if (!logo) {
    return res.status(400).json({ message: "not invalid post" });
  } else {
    return res.status(200).json({ logo });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let logo;
  try {
    logo = await Logo.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!logo) {
    return res.status(404).json({ message: "not id" });
  } else {
    return res.status(200).json({ logo });
  }
};

const updateLogo = async (req, res, next) => {
  const { img } = req.body;
  const id = req.params.id;
  let logo;
  try {
    logo = await Logo.findByIdAndUpdate(id, {
      img,
    });
    logo = await logo.save();
  } catch (error) {
    console.log(error);
  }
  if (!logo) {
    return res.status(404).json({ message: "invalid update" });
  } else {
    return res.status(200).json({ logo });
  }
};

exports.updateLogo = updateLogo;
exports.getById = getById;
exports.getAllLogo = getAllLogo;
