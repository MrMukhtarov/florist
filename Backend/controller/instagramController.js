const Instagram = require("../model/instagramSchema.js");

const addInstagram = async (req, res, next) => {
  let instagram;
  const { img, profileName } = req.body;
  try {
    instagram = new Instagram({
      img,
      profileName,
    });
    await instagram.save();
  } catch (error) {
    console.log(error);
  }
  if (!instagram) {
    return res.status(500).json({ message: "invali add" });
  } else {
    return res.status(201).json({ instagram });
  }
};

const updateInstagram = async (req, res, next) => {
  const { img, profileName } = req.body;
  const id = req.params.id;
  let instagram;
  try {
    instagram = await Instagram.findByIdAndUpdate(id, {
      img,
      profileName,
    });
    instagram = await instagram.save();
  } catch (error) {
    console.log(error);
  }
  if (!instagram) {
    return res.status(404).json({ message: "invalid update" });
  } else {
    return res.status(200).json({ instagram });
  }
};

const deleteInstagram = async (req, res, next) => {
  const id = req.params.id;
  let intagram;
  try {
    instagram = await Instagram.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
  if (!instagram) {
    return res.status(404).json({ message: "invalid delete" });
  } else {
    return res.status(200).json({ instagram });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let instagram;
  try {
    instagram = await Instagram.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!instagram) {
    return res.status(404).json({ message: "invalid id" });
  } else {
    return res.status(200).json({ instagram });
  }
};

const getAllInstagram = async (req, res, next) => {
  let instagram;
  try {
    instagram = await Instagram.find();
  } catch (error) {
    console.log(error);
  }
  if (!instagram) {
    return res.status(400).json({ message: "ivalid" });
  } else {
    return res.status(200).json({ instagram });
  }
};

exports.getAllInstagram = getAllInstagram;
exports.getById = getById;
exports.updateInstagram = updateInstagram;
exports.deleteInstagram = deleteInstagram;
exports.addInstagram = addInstagram;
