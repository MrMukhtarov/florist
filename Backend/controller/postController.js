const Post = require("../model/postSchema.js");

const getAllPost = async (req, res, next) => {
  let post;
  try {
    post = await Post.find();
  } catch (error) {
    console.log(error);
  }
  if (!post) {
    return res.status(400).json({ message: "not invalid post" });
  } else {
    return res.status(200).json({ post });
  }
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let post;
  try {
    post = await Post.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!post) {
    return res.status(404).json({ message: "not id" });
  } else {
    return res.status(200).json({ post });
  }
};

const addPost = async (req, res, next) => {
  const { image, type, title,desc,date } = req.body;
  let post;
  try {
    post = new Post({
        image,
        type,
        title,
        desc,
        date
    });
    await post.save();
  } catch (error) {
    console.log(error);
  }
  if (!post) {
    return res.status(500).json({ message: "invalid add" });
  } else {
    return res.status(201).json({ post });
  }
};

const updatePost = async (req, res, next) => {
  const { image, type, title,desc,date } = req.body;
  const id = req.params.id;
  let post;
  try {
    post = await Post.findByIdAndUpdate(id, {
      image,
      type,
      title,
      desc,
      date
    });
    post = await post.save();
  } catch (error) {
    console.log(error);
  }
  if (!post) {
    return res.status(404).json({ message: "invalid update" });
  } else {
    return res.status(200).json({ post });
  }
};

const deletePost = async (req, res, next) => {
  const id = req.params.id;
  let post;
  try {
    post = await Post.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
  if (!post) {
    return res.status(404).json({ message: "invalid delete" });
  } else {
    return res.status(200).json({ post });
  }
};

exports.addPost = addPost;
exports.deletePost = deletePost;
exports.updatePost = updatePost;
exports.getById = getById;
exports.getAllPost = getAllPost;
