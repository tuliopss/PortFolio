const express = require('express');
const app = express();
const path = require('path');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/index.js', express.static(path.join(__dirname, 'public/index.js'), {type: 'application/javascript'}));


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/calculadora', (req, res) => {
    res.render('calculadora')
})

app.get('/todolist', (req, res) => {
    res.render('toDoList')
})

app.get('/coffemenu', (req, res) => {
    res.render('coffemenu')
})
app.get('/coffeshop', (req, res) => {
    res.render('coffeshop')
})
app.get('/search', (req, res) => {
    res.render('search')
})
app.get('/prova', (req, res) => {
    res.render('prova')
})
app.get('/agenda', (req, res) => {
    res.render('coffemenu')
})


app.listen(3000, (erro) => {
    if(erro) {
        console.log('Erro ao iniciar servidor');
    } else {
        console.log('Servidor iniciado');
    }
 })

console.log('oi');