const routes = require('express').Router();
routes.get('/',(req,res)=>{
  res.status(200).render('index',{title:'I am title'});
});

routes.get('/a',(req,res)=>{
  res.status(200).render('register',{title:'Register a person'});
});

routes.post('/register',(req,res)=>{
  res.json({message:'post request received'});
  var firstname= req.body.firstname
  var lastname

})
module.exports = routes;
