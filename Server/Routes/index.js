"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const router = express_1.default.Router();
exports.default = router;
/* GET home page. */
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home' });
});
/* GET about page. */
router.get('/about', function (req, res, next) {
    let resumePath = 'Public/Assets/docs/resume.pdf';
    fs_1.default.readFile(resumePath, function (err, data) {
        res.contentType('application/pdf');
        res.send(data);
    });
});
/* GET Projects page. */
router.get('/projects', function (req, res, next) {
    res.render('index', { title: 'Projects' });
});
/* GET services page. */
router.get('/services', function (req, res, next) {
    res.render('index', { title: 'Services' });
});
/* GET contact us page. */
router.get('/contact', function (req, res, next) {
    res.render('index', { title: 'Contact' });
});
//module.exports = router;
//# sourceMappingURL=index.js.map