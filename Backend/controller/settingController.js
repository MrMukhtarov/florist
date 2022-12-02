const Setting = require("../model/settingsSchema.js");

const getAllSettings = async (req, res, next) => {
  let settings;
  try {
    settings = await Setting.find();
  } catch (error) {
    console.log(error);
  }
  if (!settings) {
    return res.status(400).json({ message: "not invalid post" });
  } else {
    return res.status(200).json({ settings });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let settings;
  try {
    settings = await Setting.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!settings) {
    return res.status(404).json({ message: "not id" });
  } else {
    return res.status(200).json({ settings });
  }
};

const updateSetting = async (req, res, next) => {
  const { icon1, icon2, icon3, icon4, address, number1, number2, email } =
    req.body;
  const id = req.params.id;
  let settings;
  try {
    settings = await Setting.findByIdAndUpdate(id, {
      icon1,
      icon2,
      icon3,
      icon4,
      address,
      number1,
      number2,
      email,
    });
    settings = await settings.save();
  } catch (error) {
    console.log(error);
  }
  if (!settings) {
    return res.status(404).json({ message: "invalid update" });
  } else {
    return res.status(200).json({ settings });
  }
};

exports.updateSetting = updateSetting;
exports.getById = getById;
exports.getAllSettings = getAllSettings;
