const Questions = require("../models/questionModal");

const createQuestions = async (req, res) => {
  try {
    const question = await Questions.create(req.body);
    res.status(201).json({ question });
  } catch (error) {
    console.log("something went wrong while creating a question");
    res.status(500).json({ message: "something went wrong", error: error });
  }
};
const getQuaestions = async (req, res) => {
  try {
    const questions = await Questions.find();
    res.status(200).json({ questions });
  } catch (error) {
    console.log("something went wrong while listing all the questions");
    res.status(500).json({ message: "something went wrong", error: error });
  }
};

module.exports = { createQuestions, getQuaestions };
