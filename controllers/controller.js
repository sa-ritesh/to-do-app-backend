const express=require('express');
const app=express();
app.use(express.urlencoded());
const Task=require('../models/task');

module.exports.home=function(req,res){
	Task.find({},function(err,tasks){
		if(err){
			console.log('Error in fetching from DB');
			return;
		}
		return res.render('home',{
			task_list:tasks
		});
	})
}

module.exports.add=function(req,res){
   console.log(req.body);
   Task.create({
   	description:req.body.description,
   	date:req.body.date,
   	category:req.body.category
   },function(err,newTask){
   	if(err){
   		console.log('Error in creating a New Task');
   		console.log(err);
   		return;
   	}
    return res.redirect('back');
   })
   
  };

  module.exports.delete=function(req,res){
  		let id=req.query.id;
  	    Task.findByIdAndDelete(id,function(err){
    	if(err){
    		console.log('Error in deleting the Task');
    		return;
    	}
    	return res.redirect('back');
    })

  }