const Contact = require("../model/contactSchema.js");

const getAllContact = async (req, res, next) => {
  let contacts;
  try {
    contacts = await Contact.find();
  } catch (error) {
    console.log(error);
  }
  if (!contacts) {
    return res.status(400).json({ message: "not invalid category" });
  } else {
    return res.status(200).json({ contacts });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let contacts;
  try {
    contacts = await Contact.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!contacts) {
    return res.status(404).json({ message: "not id" });
  } else {
    return res.status(200).json({ contacts });
  }
};

const addContact = async (req, res, next) => {
  const { email, message } = req.body;
  let contacts;
  try {
    contacts = new Contact({
      email,
      message,
    });
    await contacts.save();
  } catch (error) {
    console.log(error);
  }
  if (!contacts) {
    return res.status(500).json({ message: "invalid add" });
  } else {
    return res.status(201).json({ contacts });
  }
};

const deleteContact = async (req, res, next) => {
  const id = req.params.id;
  let contacts;
  try {
    contacts = await Contact.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
  if (!contacts) {
    return res.status(404).json({ message: "invalid delete" });
  } else {
    return res.status(200).json({ contacts });
  }
};

exports.addContact = addContact;
exports.deleteContact = deleteContact;
exports.getById = getById;
exports.getAllContact = getAllContact;
