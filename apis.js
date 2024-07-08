const express =  require('express')
const dbConnect =  require('./mongodb_connectiondb');
const app =  express()

app.use(express.json());


app.get('/', async (req,resp) =>{
    let data = await dbConnect();
    data =  await data.find().toArray()
    console.log(data)
    resp.send(data)
})



app.post('/', async (req,resp) =>{
   let data = await dbConnect();
   let result = await data.insertOne(req.body)
   console.log("Inserted document:", result);
    resp.send(result);
   
})

app.put("/",(req,resp) =>{
    console.log({result:"updated"})
})

app.listen(5000)

