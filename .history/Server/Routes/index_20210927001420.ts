import express from 'express';
import fs from 'fs';
const router = express.Router();
export default router;

/* GET home page. */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  let resumePath = './Assets/docs/Hanren-Resume 2022 v2-SE.pdf';
  fs.readFile(resumePath, function (err, data) {
    res.contentType('application/pdf');
    res.send(data);
  });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects'});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

/* GET contact us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact'});
});

//module.exports = router;
