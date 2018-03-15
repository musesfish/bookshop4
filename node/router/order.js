const express = require('express');
const pool = require('../pool');
let router = express.Router();
module.exports = router;

router.get("/del/:aid",(req,res)=>{
    let aid = req.params.aid;
    pool.query("DELETE FROM bs_order WHERE aid=?",aid, (err, result)=>{
      if(err)throw err;
      res.send({result:false});//向客户端输出响应消息
    });
});

router.get('/list/:pageNum', (req, res)=>{
  //读取请求数据
  let pageNum = req.params.pageNum;
  //输出响应消息
  let pager = {       //分页器对象
    totalRecord: 0,       //总的记录数
    pageSize: 5,          //页面大小
    pageCount: 0,         //总页数
    pageNum: parseInt(pageNum), //当前显示的页号
    data: []              //当前页中的数据
  };
  pool.query("SELECT COUNT(*) AS c FROM bs_order", (err, result)=>{
    if(err)throw err;
    pager.totalRecord = result[0]['c'];//总记录数
    pager.pageCount = Math.ceil(pager.totalRecord/pager.pageSize);//总页数
		let sql="SELECT o.aid,u.uname,a.receiver,o.status,o.order_time,b.title ";
		sql +=  " FROM  bs_book b,bs_order o,bs_order_detail d,";
		sql +=  " bs_receiver_address a,bs_user u";
		sql +=  " WHERE d.product_id =  b.bid AND ";
		sql +=  " o.address_id = a.aid AND";
		sql +=  " u.uid = o.user_id AND ";
		sql +=  " o.aid = d.order_id ";
		sql +=  " LIMIT ?,? ";
    pool.query(sql,[(pager.pageNum-1)*pager.pageSize,  pager.pageSize], (err, result)=>{
      if(err)throw err;
      pager.data = result;//查询到的数据:二维数组
      res.json(pager);//向客户端输出响应消息
    });
  });

});