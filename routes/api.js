const express = require('express');
const router = express.Router();
const parentController = require('../Controllers/parentController');
const kidController = require('../Controllers/childController');
const authController = require('../Controllers/authController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// parent Router
router.get('/parent/:id',parentController.show);
router.get('/show_all_parent',parentController.index);
router.post('/create_parent',parentController.create);
router.patch('/parent/:id',parentController.update);
router.delete('/delete_parent/:id',parentController.destroy);

// kids Router
router.get('/child/:id',kidController.show);
router.get('/show_all_child',kidController.index);
router.post('/create_child',kidController.create);
router.patch('/child/:id',kidController.update);
router.delete('/delete_child/:id',kidController.destroy);

module.exports = router;
