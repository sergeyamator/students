const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const Mentor = require('../../models/mentor');
const { JWT_SECRET } = require('../../config');

const multerConfig = {
  storage: multer.diskStorage({
    destination(req, res, next) {
      next(null, path.join(__dirname, '../../public/img/avatar'));
    },
    filename(req, file, next) {
      const splittedName = file.originalname.split('.');
      const fileName = `${req.body.email}-avatar.${splittedName[splittedName.length - 1]}`;
      const directory = path.join(__dirname, '../../public/img/avatar');
      const files = fs.readdirSync(directory);

      files.forEach((currentFile) => {
        if (currentFile.startsWith(req.body.email)) {
          fs.unlinkSync(path.join(directory, currentFile));
          next(null, fileName);
        } else {
          next(null, fileName);
        }
      });
    },
    fileFilter(req, file, next) {
      const image = file.mimetype.startsWith('image/');

      if (image) {
        return next(null, true);
      }

      return next({ message: 'File type not supported' }, false);
    },
  }),
};

const router = express.Router();

router.get('/', (req, res) => {
  const authorizationHeader = req.get('Authorization');

  if (authorizationHeader) {
    const token = authorizationHeader.split(' ')[1];

    jwt.verify(token, JWT_SECRET, async (err, decoded) => {
      try {
        const mentor = await Mentor.findById(decoded.sub);

        res.json({
          id: mentor._id,
          email: mentor.email,
          username: mentor.username,
          createdAt: mentor.created_at,
          avatar: mentor.avatar,
          technologies: mentor.technologies,
        });
      } catch (e) {
        res.status(500);
        res.json(e);
      }
    });
  }
});

router.post('/', multer(multerConfig).single('avatar'), async (req, res) => {
  const avatar = req.file && req.file.filename || '';
  const mentor = await Mentor.findOneAndUpdate(
    { email: req.body.email },
    { $set: { ...req.body, avatar } },
    { new: true },
  );

  res.json(mentor);
});

module.exports = router;
