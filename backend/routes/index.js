const { auth } = require('../middleware/auth');

const router = require('express').Router();

router.get('/',(req,res) => res.send({status:"SUCCESS",message:"Working.."}))
router.use("/*",auth);
//add fetch Restaurant route

module.exports = router;
