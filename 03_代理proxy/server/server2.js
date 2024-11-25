const express = require("express")
const app = express();

app.use((request, response, next) => {
  console.log("有人请求服务器2了")
  next()
})

app.get('/cars', function (req, res) {
  const students = [
    { id: "001", name: "宝马", price: 20 },
    { id: "002", name: "奔驰", price: 18 },
    { id: "003", name: "奥迪", price: 22 },
  ]
  res.send(students)
});


app.listen(5001,()=>{
  console.log("服务器2被启动了，查询汽车数据调接口：http://localhost:5001/cars")
})
