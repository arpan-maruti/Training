import express from 'express';
import {
    getTours,
    getTourById,
    postTour,
    patchTour,
    deleteTour,
    checkId,
    checkBody
} from '../controllers/tourController.js';

const tourRouter = express.Router();

tourRouter.param('id', checkId);
tourRouter.route('/').get(getTours).post(checkBody, postTour);
tourRouter.route('/:id').get(getTourById).patch(patchTour).delete(deleteTour);

export default tourRouter;
