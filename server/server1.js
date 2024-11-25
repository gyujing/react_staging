const express = require("express")
const app = express();

app.use((request, response, next) => {
  console.log("有人请求服务器1了")
  next()
})

app.get('/students', function (req, res) {
  const students = [
    { id: "001", name: "tom", age: 12 },
    { id: "002", name: "jack", age: 18 },
    { id: "003", name: "mary", age: 22 },
  ]
  res.send(students)
});


app.listen(5000,()=>{
  console.log("服务器1被启动了，查询学生数据调接口：http://localhost:5000/students")
})
