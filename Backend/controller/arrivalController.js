const Arrival = require("../model/arrivalsSchema.js");

const addArrivals = async (req, res, next) => {
  let arrival;
  const { status, img, title, price } = req.body;
  try {
    arrival = new Arrival({
      status,
      img,
      title,
      price,
    });
    await arrival.save();
  } catch (error) {
    console.log(error);
  }
  if (!arrival) {
    return res.status(500).json({ message: "invali add" });
  } else {
    return res.status(201).json({ arrival });
  }
};

const updateArrival = async (req, res, next) => {
  const { status, img, title, price } = req.body;
  const id = req.params.id;
  let arrival;
  try {
    arrival = await Arrival.findByIdAndUpdate(id, {
      status,
      img,
      title,
      price,
    });
    arrival = await arrival.save();
  } catch (error) {
    console.log(error);
  }
  if (!arrival) {
    return res.status(404).json({ message: "invalid update" });
  } else {
    return res.status(200).json({ arrival });
  }
};

const deleteArrival = async (req, res, next) => {
  const id = req.params.id;
  let arrival;
  try {
    arrival = await Arrival.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
  if (!arrival) {
    return res.status(404).json({ message: "invalid delete" });
  } else {
    return res.status(200).json({ arrival });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let arrival;
  try {
    arrival = await Arrival.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!arrival) {
    return res.status(404).json({ message: "invalid id" });
  } else {
    return res.status(200).json({ arrival });
  }
};

const getAllArrival = async (req, res, next) => {
  let arrival;
  try {
    arrival = await Arrival.find();
  } catch (error) {
    console.log(error);
  }
  if (!arrival) {
    return res.status(400).json({ message: "ivalid" });
  } else {
    return res.status(200).json({ arrival });
  }
};

exports.getAllArrival = getAllArrival;
exports.getById = getById;
exports.updateArrival = updateArrival;
exports.deleteArrival = deleteArrival;
exports.addArrivals = addArrivals;
