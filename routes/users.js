const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')


/* GET users listing. */
router.get('/', userController.getAll);
router.post('/register', userController.createUser);

module.exports = router;
