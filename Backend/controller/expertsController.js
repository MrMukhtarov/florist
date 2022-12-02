const Experts = require("../model/expertsSchema.js");

const getAllExperts = async (req, res, next) => {
  let experts;
  try {
    experts = await Experts.find();
  } catch (error) {
    console.log(error);
  }
  if (!experts) {
    return res.status(400).json({ message: "not invalid category" });
  } else {
    return res.status(200).json({ experts });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let experts;
  try {
    experts = await Experts.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!experts) {
    return res.status(404).json({ message: "not id" });
  } else {
    return res.status(200).json({ experts });
  }
};

const addExperts = async (req, res, next) => {
  const { img, name, position } = req.body;
  let experts;
  try {
    experts = new Experts({
      img,
      name,
      position,
    });
    await experts.save();
  } catch (error) {
    console.log(error);
  }
  if (!experts) {
    return res.status(500).json({ message: "invalid add" });
  } else {
    return res.status(201).json({ experts });
  }
};

const updateExperts = async (req, res, next) => {
  const { img, name, position } = req.body;
  const id = req.params.id;
  let experts;
  try {
    experts = await Experts.findByIdAndUpdate(id, {
      img,
      name,
      position,
    });
    experts = await experts.save();
  } catch (error) {
    console.log(error);
  }
  if (!experts) {
    return res.status(404).json({ message: "invalid update" });
  } else {
    return res.status(200).json({ experts });
  }
};

const deleteExperts = async (req, res, next) => {
  const id = req.params.id;
  let experts;
  try {
    experts = await Experts.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
  if (!experts) {
    return res.status(404).json({ message: "invalid delete" });
  } else {
    return res.status(200).json({ experts });
  }
};

exports.addExperts = addExperts;
exports.deleteExperts = deleteExperts;
exports.updateExperts = updateExperts;
exports.getById = getById;
exports.getAllExperts = getAllExperts;
