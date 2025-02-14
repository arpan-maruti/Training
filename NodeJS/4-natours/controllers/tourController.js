import fs from 'fs';

const tours = JSON.parse(
    fs.readFileSync(`./starter/dev-data/data/tours-simple.json`)
);

export const checkId = (req,res,next,val) =>{
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);
    if (!tour) {
        return res.status(400).json({
            status: 'fail',
            message: 'Invalid ID',
        });
    };
    next();
}

export const checkBody= (req, res,next) =>{
    if(!req.body.name || !req.body.price)
    {
        return res.status(400).json({
            status: "fail",
            message:"missing name or price"
        })
    }
    next();
}

export const getTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: { tours },
    });
};

export const getTourById = (req, res) => {
   
    res.status(200).json({
        status: 'success',
        data: { tour },
    });
};

export const postTour = (req, res) => {
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);

    tours.push(newTour);

    fs.writeFile(
        `./starter/dev-data/data/tours-simple.json`,
        JSON.stringify(tours),
        err => {
            res.status(201).json({
                status: 'success',
                data: { tour: newTour },
            });
        }
    );
};

export const patchTour = (req, res) => {
    
    res.status(200).json({
        status: 'success',
        data: { tour: '<updated>' },
    });
};

export const deleteTour = (req, res) => {

    res.status(204).json({
        status: 'success',
        data: null,
    });
};
