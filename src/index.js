const express = require("express")
const app = express()
const ejs = require('ejs')

app.set('view engine','ejs')
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }));


(async () => {
    const database = require('./db');
    await database.sync();
    
})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/cadastro', (req, res) => {
    res.render("cadastro")
})

app.listen(3000, function(erro){
    if (erro){
        console.log ('Ocorreu um erro')
    }else {
        console.log ('Servidor iniciado com sucesso na porta 3000')
    }
})