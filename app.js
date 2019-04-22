const express=require('express');
var server=express();
var bodyParser=require('body-parser');
var userRouter=require('./routes/user.js');
server.listen(8080);
server.use(express.static('public'));

server.use(bodyParser.urlencoded({
      extended:false
}));
server.use('/user',userRouter);

