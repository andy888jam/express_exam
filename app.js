const express = require('express')
const app = express()
const port = 3000
//新版本handlebars的樣板引擎設定
const { create } = require('express-handlebars')
const hbs = create({
  defaultLayout: 'main',
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

//載入靜態檔案
app.use(express.static('public'))

//設定各個路由
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/porfolio', (req, res) => {
  res.render('porfolio')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

//監聽伺服器
app.listen(port, () => {
  console.log(`hello`)
})