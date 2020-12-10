const express = require('express')

const bodyparser = require('body-parser')

const psl = require('psl')

const app = express()

app.set('view engine','ejs')

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

const PORT = process.env.PORT || 4000

app.get('/',(req,res) => {
    res.render('extractbaseurl',{title:"Bulk Base URL Extractor From Subdomains"})
})

app.post('/getbaseurlwithouthttp',(req,res) =>{

var parsed = psl.parse(req.body.domain);

console.log(parsed.domain)

res.json({

baseurl:parsed.domain

})


})


app.listen(PORT)