import express from "express";
import fs from "fs";
const app = express();
const port = 3000;


// app.get('/',(req,res)=>{
//     // res.status(200).send("hello");
//     res.status(200).json({message:"hello GET", app:"Natours"});
// });
// app.post('/',(req,res)=>{
//      res.status(200).send("hello POST");
// });

app.use(express.json());

const tours = JSON.parse(
    fs.readFileSync(`./starter/dev-data/data/tours-simple.json`)
);
app.get('/api/v1/tours', (req, res)=>{
    res.status(200).json({
        status: "success",
        results: tours.length,
        data: {
            tours
        }
    });
});

app.post('/api/v1/tours', (req,res)=>{
    console.log(req.body);
    res.send('Done');

});
app.listen(port, ()=>{
    console.log(`App Running on port ${port}`);
});
