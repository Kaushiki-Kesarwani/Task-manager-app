const express = require('express');

const router = express.Router();

const {registeruser} =  require('../controllers/authControllers');

router.post('/register',registeruser);

module.exports = router;