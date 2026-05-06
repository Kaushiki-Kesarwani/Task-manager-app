const express = require('express');
const router = express.Router();
const {createtask,gettask,updatetask,deletetask} = require('../controllers/taskController');
const protect = require('../middleware/authmiddleware');

router.post('/',protect,createtask);
router.get("/", protect, gettask);
router.put('/:id',protect, updatetask);
router.delete('/:id',protect,deletetask);

module.exports = router;
