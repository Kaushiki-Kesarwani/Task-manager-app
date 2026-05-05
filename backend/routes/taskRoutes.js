const express = require('express');
const router = express.Router();
const {createtask} = require('../controllers/taskController');
const protect = require('../middleware/authmiddleware');

router.post('/',protect,createtask);

module.exports = router;