const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 2328;


app.set('views', './views'); // Thư mục views nằm cùng cấp với file app.js
app.set('view engine', 'pug'); // Sử dụng pug làm view engine

//app.use(express.static(__dirname + 'a'))
// app.use(express.static('/public'));
//app.use(express.static(__dirname))

app.use(express.static(__dirname + '/views/a'))

///App Get Section
app.get('/a', function(req, res){
    //res.render('a/index');
    res.render('a/index');
})

// app.get('/b', function(req, res){
//     //res.render('a/index');
//     res.render('a/index');
// })


app.listen(port, () => {
    console.log("Your app running on port " + port);
})