let express = require('express');
const {register,login} = require('../controller/tureONianController')
const router = express.Router();


router.route('/tureONian/register').post(register);

router.route('/tureONian/login').post(login);

module.exports = router;


















   
