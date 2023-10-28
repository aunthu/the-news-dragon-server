const express=require('express')
const app=express();
const port=process.env.POST||5000;
const cors=require('cors');

const categories=require('./Data/categories.json')

app.use(cors());
app.get('/',(req,res)=>{
    res.send('Dragon server is running,')
})

app.get('/categories', (req, res)=>{
    res.send(categories)
})

app.listen(port, ()=>{
    console.log(`Dragon API is runing on ${port}`);
})