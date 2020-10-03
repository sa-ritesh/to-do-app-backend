const express=require('express');
const router=express.Router();

const home_controller=require('../controllers/controller.js');

router.get('/',home_controller.home);
router.post('/add-task',home_controller.add);
router.get('/delete-task',home_controller.delete);

module.exports=router;