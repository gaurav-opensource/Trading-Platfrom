const express = require('express');
const { login, register } = require('../Controllers/AuthController');

const router = express.Router();

router.post('/signup', register);
router.post('/login', login);

module.exports = router;
