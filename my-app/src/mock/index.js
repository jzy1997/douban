const Mock = require('mockjs');
//格式：Mock.mock("请求地址","请求方式",要返回的数据)
Mock.mock("/books","get",require('./json/books'));
Mock.mock("/findMovie","get",require('./json/findMovie'));
Mock.mock("/goodBook","get",require('./json/goodBook'));
Mock.mock("/index","get",require('./json/index'));
Mock.mock("/movie","get",require('./json/movie'));
Mock.mock("/xiaozua","get",require('./json/xiaozua'));
Mock.mock("/xiaozub","get",require('./json/xiaozub'));
Mock.mock("/xiaozuc","get",require('./json/xiaozuc'));
Mock.mock("/route","get",require('./json/route'));
Mock.mock("/movienav","get",require('./json/movieNavItem'));
Mock.mock("/booknav","get",require('./json/bookNav'));
Mock.mock("/movietype","get",require('./json/movieType'));
Mock.mock("/comments","get",require('./json/commits'));
Mock.mock("/newmovie","get",require('./json/newmovie'));
Mock.mock("/newbook","get",require('./json/newbook'));
Mock.mock("/detailsitem","get",require('./json/detailsItem'));