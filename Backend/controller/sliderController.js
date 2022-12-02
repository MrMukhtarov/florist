const Slider = require("../model/sliderSchema.js");

const getAllSliders = async (req, res, next) => {
  let slider;
  try {
    slider = await Slider.find();
  } catch (error) {
    console.log(error);
  }
  if (!slider) {
    return res.status(400).json({ message: "Not enable" });
  } else {
    return res.status(200).json({ slider });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let slider;
  try {
    slider = await Slider.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!slider) {
    return res.status(404).json({ message: "Enable id" });
  } else {
    return res.status(200).json({ slider });
  }
};

const updateSlider = async (req, res, next) => {
  const { title, desc, img } = req.body;
  const id = req.params.id;
  let slider;
  try {
    slider = await Slider.findByIdAndUpdate(id, {
      title,
      desc,
      img,
    });
    slider = await slider.save();
  } catch (error) {
    console.log(error);
  }
  if (!slider) {
    return res.status(404).json({ message: "enable update" });
  } else {
    return res.status(200).json({ slider });
  }
};

const addSlider = async (req, res, next) => {
  let slider;
  const { title, desc, img } = req.body;
  try {
    slider = new Slider({
      title,
      desc,
      img,
    });
    await slider.save();
  } catch (error) {
    console.log(error);
  }
  if (!slider) {
    return res.status(500).json({ message: "enable adding" });
  } else {
    return res.status(201).json({ slider });
  }
};

const deleteSlider = async (req, res, next) => {
  const id = req.params.id;
  let slider;
  try {
    slider = await Slider.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
  if (!slider) {
    return res.status(404).json({ message: "Unable Delete" });
  } else {
    return res.status(200).json({ slider });
  }
};

exports.getAllSliders = getAllSliders;
exports.getById = getById;
exports.updateSlider = updateSlider;
exports.addSlider = addSlider;
exports.deleteSlider = deleteSlider;
