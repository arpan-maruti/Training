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

const getTours =(req, res)=>{
    res.status(200).json({
        status: "success",
        results: tours.length,
        data: {
            tours
        }
    });
}

const getTourById =(req, res)=>{
    const id = req.params.id*1;
    const tour =tours.find(el=>el.id === id);
    if(!tour)
    {
        return res.status(400).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }
    res.status(200).json({
        status: "success",
        results: tours.length,
        data: {
            tour
        }
    });
}

const postUser =(req,res)=>{
    const newId = tours[tours.length -1].id +1;
    const newTour = Object.assign({id: newId}, req.body);
 
    tours.push(newTour);
 
    fs.writeFile(
     `./starter/dev-data/data/tours-simple.json`,
     JSON.stringify(tours),
     err=>{
         res.status(201).json({
             ststus:'success',
             data:{
                 tour:newTour,
             }
         })
     }
    )
 }

 const patchUser =(req,res)=>{

    const id = req.params.id*1;
    const tour =tours.find(el=>el.id === id);
    if(!tour)
    {
        return res.status(400).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }
    res.status(200).json({
        status: "success",
        data: {
            tour: '<updated>'
        }
    });

}

const deleteUser = (req,res)=>{

    const id = req.params.id*1;
    const tour =tours.find(el=>el.id === id);
    if(!tour)
    {
        return res.status(400).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }
    res.status(204).json({
        status: "success",
        data: {
            tour: '<updated>'
        }
    });

}



app.route('/api/v1/tours').get(getTours).post(postUser);
app.route('/api/v1/tours/:id').get(getTourById).patch(patchUser).delete(deleteUser);


app.listen(port, ()=>{
    console.log(`App Running on port ${port}`);
});
