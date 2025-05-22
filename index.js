const express = require('express');
const app = express()

app.use('/', (req, res) => {
    return res.send('<H1>Hello world</H1>')
})

app.listen(8000, (err)=>{
    if(err){
        console.log(err)
    }else {
        console.log('Server started at 8000')
    }
})