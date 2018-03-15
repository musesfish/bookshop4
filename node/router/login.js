const express = require('express');
const pool = require('../pool');
let router = express.Router();
module.exports = router;

router.get('/chklog', (req, res)=>{
  //读取请求数据(路由参数Parameters)
  let uname = req.session.uname;
  //输出响应消息
  if(uname){
		res.send({result:true,uname:uname});
	}else{
		res.send({result:false});
	}
});

router.get('/dolog/:uname/:upwd', (req, res)=>{
  //读取请求数据(路由参数Parameters)
  let uname = req.params.uname;
	let upwd = req.params.upwd;
  //输出响应消息
  pool.query('SELECT * FROM bs_user WHERE uname=? AND upwd=?', [uname,upwd], (err, result)=>{
    if(err) throw err;
		if(result.length>0){
			req.session.uname=result[0].uname;
			res.json(result[0].uname);
		}
    else res.json(null);
		res.end();
  });
});
