const express = require('express');
const router = express.Router();
const parentController = require('../Controllers/parentController');
const childController = require('../Controllers/childController');
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

// child Router
router.get('/child/:id',childController.show);
router.get('/show_all_child',childController.index);
router.post('/create_child',childController.create);
router.patch('/child/:id',childController.update);
router.delete('/delete_child/:id',childController.destroy);

module.exports = router;
