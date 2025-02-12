import express from 'express';
import morgan from 'morgan';
import tourRouter from './routes/tourRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
const __dirname = './starter/public'
app.use(express.static(`${__dirname}`));
// Custom middleware
app.use((req, res, next) => {
    console.log('Middleware: hello');
    next();
});

// Mounting Routers
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);



export default app;
