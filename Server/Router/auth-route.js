const express = require("express");
const { home, register } = require("../Controller/auth-controller");
const router  = express.Router();

router.route('/').get(home)

router.route('/register').post(register)

module.exports = {router};

