const express = require("express");
const { home } = require("../Controller/auth-controller");
const router  = express.Router();

router.route('/').get(home)

module.exports = {router};

