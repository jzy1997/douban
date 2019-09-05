const express = require("express");
const bodyParser = require('body-parser');
const crypto = require('crypto');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
app = express();
//跨域
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS'); 
    next();
})

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

var dbCollection = mongoose.model('people',{
    uname:String,
    pwd:String
})
// 同号注册检测
app.post("/check",(req,res)=>{
    var uname = req.body.uname;
    //连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/test',{ useNewUrlParser: true },(err)=>{
        if(err){
            console.log('连接失败');
        }else{
            console.log('连接成功');
            dbCollection.find({'uname':uname}).then((result)=>{
                if(result.length>0){
                    res.send({msg:'同号已经注册',status:200,flag:6});
                }else{
                    res.send({msg:'没有注册',status:200,flag:7});
                }
            },(err)=>{
                res.send({msg:'服务器异常',status:200,flag:5});
            })
        }
    })
})
// 注册
app.post("/regist",(req,res)=>{
    var uname = req.body.uname;
    var pwd = req.body.pwd;
    var newPwd = crypto.createHash('md5').update(pwd.toString()).digest('hex');
    console.log(uname,newPwd);
    // 连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/test',{ useNewUrlParser: true },(err)=>{
        if(err){
            console.log('连接失败');
        }else{
            console.log('连接成功');
            
            var data = dbCollection({
                uname:uname,
                pwd:newPwd
            });

            data.save().then(()=>{
                res.send({msg:'插入成功',status:200,flag:1});
            },()=>{
                res.send({msg:'插入失败',status:200,flag:2});
            })
        }
    })
})
// 登录
app.post("/login",(req,res)=>{
    var uname = req.body.uname;
    var pwd = req.body.pwd;
    var newPwd = crypto.createHash('md5').update(pwd.toString()).digest('hex');
    //连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/test',{ useNewUrlParser: true },(err)=>{
        if(err){
            console.log('连接失败');
        }else{
            console.log('连接成功');
            dbCollection.find({'uname':uname,'pwd':newPwd}).then((result)=>{
                if(result.length>0){
                    //设置session
                    // req.session.isLogin=true;
                    // req.session.uname=uname;
                    var tokenObj = {
                        isLogin:true,
                        name:uname
                    };
                    var tokenPwd = 'ahsdkljashjkfhawjklfglj';
                    var token =  jwt.sign(tokenObj,tokenPwd);
                    res.send({msg:'查询到',status:200,flag:3,token});
                }else{
                    res.send({msg:'没有查询到',status:200,flag:4,token:null});
                }
            },(err)=>{
                res.send({msg:'服务器异常',status:200,flag:5});
            })
        }
    })
})
app.listen(3000,()=>console.log("server is running ..."));