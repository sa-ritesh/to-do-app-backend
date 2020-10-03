const express=require('express');
const port=5000;
const db=require('./config/mongoose');
const app=express();
app.use(express.urlencoded());

const Task=require('./models/task')
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('assets'));
app.use('/',require('./routes/route'));
app.listen(port,function(err){
	if(err){
		console.log('Error in listening to the PORT');
		return;
	}
    console.log('Successfully listening to the PORT');
})