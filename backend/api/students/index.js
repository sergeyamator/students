const express = require('express');
const mongoose = require('mongoose');
require('../../models/students');

const router = express.Router();
const Students = mongoose.model('Student');

router.get('/', getStudents);
router.get('/:id', getStudentById);

router.post('/', saveNewStudent);
router.post('/:id', updateStudent);

async function getStudents(req, res) {
  try {
    const students = await Students.find();
    res.json(students);
  } catch (e) {
    throw Error(e);
  }
}

async function getStudentById(req, res) {
  const { id } = req.params;

  try {
    const student = await Students.findOne({ _id: id }); // .populate('mentor'); Does it need ?
    res.json(student);
  } catch (err) {
    res.json(err);
  }
}

async function saveNewStudent(req, res) {
  const student = { ...req.body, ...{ mentor: mongoose.Types.ObjectId(req.body.mentor) } };
  try {
    const user = new Students(student);
    await user.save();
    res.send('saved');
  } catch (e) {
    throw Error(e);
  }
}

async function updateStudent(req, res) {
  const { id } = req.params;
  const student = await Students.findOneAndUpdate({ _id: id }, req.body, {
    new: true, // return the new students instead of the old one
    runValidators: true,
  }).exec();

  res.json(student);
}

module.exports = router;
