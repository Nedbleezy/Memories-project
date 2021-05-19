const PostSchema = require("../models/PostModel");

const getAllpost = async (req, res) => {
  try {
    const AllPost = await PostSchema.find({});
    res.status(200).json(AllPost);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};
// create post

const createpost = async (req, res) => {
  try {
    const newpost = req.body;
    const createdPost = await new PostSchema(newpost).save();
    res.status(201).json(createdPost);
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: error.message });
  }
};

const updatepost = async (req, res) => {
  try {
    const Editpost = req.body;
    const id = req.params.id;
    options = { new: true };
    const updatedPost = await PostSchema.findOneAndUpdate(
      id,
      Editpost,
      options
    );
    res.status(201).json(updatedPost);
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: error.message });
  }
};

//DELETE ONE
const deletepost = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedPost = await PostSchema.findOneAndDelete(id);
    res.status(200).json(deletedPost);
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: error.message });
  }
};

module.exports = {
  getAllpost,
  createpost,
  updatepost,
  deletepost,
};
