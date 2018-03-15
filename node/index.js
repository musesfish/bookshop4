const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cors = require('cors');

const routerLogin = require('./router/login');
const routerUser = require('./router/user');
const routerProduct = require('./router/product');
const routerOrder = require('./router/order');

let app = express();
http.createServer(app).listen(4000);

//使用第三方中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(cookieParser());
app.use(session({
	secret:'123456',
	/*name:'smy',*/
	cookie:{maxAge:60000},
	resave:false,
	saveUninitialized:true
}));
app.use(cors({
  origin: ['http://127.0.0.1', 'http://localhost', 'http://127.0.0.1:3000','http://localhost:3000','http://localhost:4200',
		'http://bsng.applinzi.com'],
	credentials: true, 
  methods: ['PUT','DELETE','GET','POST']
}));

//路由器
app.use('/user', routerUser);
app.use('/product', routerProduct);
app.use('/order', routerOrder);
app.use('/login', routerLogin);

