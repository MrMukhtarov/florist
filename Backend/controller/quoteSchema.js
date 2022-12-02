const Quote = require("../model/quoteSchema.js");

const getAllQuote = async (req, res, next) => {
  let quotes;
  try {
    quotes = await Quote.find();
  } catch (error) {
    console.log(error);
  }
  if (!quotes) {
    return res.status(400).json({ message: "not invalid category" });
  } else {
    return res.status(200).json({ quotes });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let quotes;
  try {
    quotes = await Quote.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!quotes) {
    return res.status(404).json({ message: "not id" });
  } else {
    return res.status(200).json({ quotes });
  }
};

const addQuote = async (req, res, next) => {
  const { name, phone, email, type_services, message } = req.body;
  let quotes;
  try {
    quotes = new Quote({
      name,
      phone,
      email,
      type_services,
      message,
    });
    await quotes.save();
  } catch (error) {
    console.log(error);
  }
  if (!quotes) {
    return res.status(500).json({ message: "invalid add" });
  } else {
    return res.status(201).json({ quotes });
  }
};

const deleteQuotes = async (req, res, next) => {
  const id = req.params.id;
  let quotes;
  try {
    quotes = await Quote.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
  if (!quotes) {
    return res.status(404).json({ message: "invalid delete" });
  } else {
    return res.status(200).json({ quotes });
  }
};

exports.addQuote = addQuote;
exports.deleteQuotes = deleteQuotes;
exports.getById = getById;
exports.getAllQuote = getAllQuote;
