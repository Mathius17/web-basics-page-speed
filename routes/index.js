var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

function shuffleArray(originalArray) {
  const array = [...originalArray];
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  const filePath = path.resolve('public/images');

  let images = fs.readdirSync(filePath).map(file => `images/${file}`);
  images = shuffleArray(images);

  res.render('index', { images });
});

module.exports = router;
