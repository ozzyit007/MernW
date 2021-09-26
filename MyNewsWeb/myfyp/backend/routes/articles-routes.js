const express = require('express');

const {check} = require('express-validator');
const articlesControllers = require('../controllers/admin-controller');

const router = express.Router();

//FOR ADMIN-ARTICLES

router.get('/:pid', articlesControllers.getArticleById);

//FOR USERS

//POST ROUTE
router.post('/',
[
  check('title').not().isEmpty(),
  check('description').isLength({min: 5}),

],
articlesControllers.createArticle);

//PATCH Router

router.patch('/:pid', [
  check('title').not().isEmpty(),
  check('description').isLength({min:5})
],
articlesControllers.updateArticle);

//delete
router.delete('/:pid', articlesControllers.deleteArticle);

module.exports = router;
