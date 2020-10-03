const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/to-do-app-db');
const db=mongoose.connection;

db.on('error',function(err){
	console.log('Error in connecting to DB');
	return;
});
db.once('open',function(){
	console.log('Successfully Connected to the DB');
});
module.exports=db;