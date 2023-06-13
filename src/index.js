const express = require("express")
const app = express()

app.set('view engine','ejs')
app.use(express.urlencoded({ extended: false }));

(async () => {
    const database = require('./db');
    await database.sync();
    
})

app.listen(3000, function(erro){
    if (erro){
        console.log ('Ocorreu um erro')
    }else {
        console.log ('Servidor iniciado com sucesso na porta 3000')
    }
})