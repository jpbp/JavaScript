const bodyParser = require('body-parser')
const express = require('express')
const app = express()

//middlewares
app.use(express.static('.'))//ele faz com que todos os arquivos estaticos dentro da pasta são exibidos na tela  
app.use(bodyParser.urlencoded({extended:true})) // ??
app.use(bodyParser.json())

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req,file,callback){
        callback(null,'./upload')
    },
    filename: function(req,file,callback){
        callback(null,`${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')
//xml2 para upar a foto
app.post('/upload',(req,res)=>{
    upload(req,res,err=>{
       if(err) return res.send('deu ruim')
       res.end('Concluido com sucesso') 
    })
})


//função para fecth 2 

app.post('/formulario',(req,res)=>{
    res.send({
        ...req.body,
        id:1
    })
})
app.listen(8080,()=>console.log('server ligado'))