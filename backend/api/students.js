const express = require('express');
const mongoose = require('mongoose');
require('../models/students');

const router = express.Router();
const Students = mongoose.model('Student');

router.get('/', getStudents);
router.get('/:id/edit', editStudent);

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

async function editStudent(req, res) {
  const { id } = req.params;
  const student = await Students.findOne({ _id: id });

  res.json(student);
}

async function saveNewStudent(req, res) {
  try {
    const user = new Students(req.body);
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
