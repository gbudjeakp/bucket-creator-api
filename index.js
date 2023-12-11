const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;
const bucketRouter = require ('./routes/Bucket');



//////Express MiddleWares//////////////
// const corsOptions = {
//     origin: 'http://127.0.0.1:5173', 
//     credentials: true
//   };

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// app.use(express.static(join(__dirname, "public")));

app.use('/api/v1', bucketRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})