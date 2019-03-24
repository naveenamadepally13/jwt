var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

router.get('/api', (req, res)=>{
  res.json({
    message:'Connected with API'
  });
});

router.post('/loginuser', (req,res)=>{
  console.log("In Login USER");
  const user = {
    email: req.body.email,
    password: req.body.password
  };

  console.log(req.body);

  jwt.sign({user}, 'secretkey',(err, token)=>{
    res.json({token})
  });

});

router.post('/auth', verifyToken, (req,res)=>{
  console.log("auth");
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
  // console.log(req.body);
  const bearerHeader = req.body.headers['authorization'];

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
