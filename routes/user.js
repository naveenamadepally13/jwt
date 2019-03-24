var express = require('express');
var router = express.Router();

router.get('/api', (req, res)=>{
  res.json({
    message:'Connected with API'
  });
});

// const user={
//     email:'nehanavgale0604@gmail.com',
//     password:'123'
// };

router.post('/api/loginuser', (req,res)=>{
  const user = {
    email: req.body.email,
    password: req.body.password
  }

  console.log(req.body);

  jwt.sign({user}, 'secretkey',(err, token)=>{
    res.json({token})
  });

});

router.post('/api/posts/', verifyToken, (req,res)=>{
  jwt.verify(req.token, 'secretkey', (err,authData)=>{
    if(err){
      res.sendStatus(403);
    }
    else{
      res.json({
        authData
      })
    }
  });

});

function verifyToken(req,res,next){
  const bearerHeader = req.headers['authorization'];

  if(typeof bearerHeader !== "undefined"){

    const bearer = bearerHeader.split(' ');

    const bearerToken = bearer[1];

    req.token = bearerToken;

    next();

  }else{
    res.sendStatus(403);
  }
}

module.exports = router;
