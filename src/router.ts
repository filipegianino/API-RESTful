import {Router, Request, Response} from 'express'
import { createMovie, findMovieById, findMovieId, getAllMovies, removeMovie, updateMovie } from './controllers/movieControllers';

// Validations
import { validate } from './middleware/handleValidation';
import { movieCreateValidation } from './middleware/movieValidation';
import { deleteModel } from 'mongoose';

const router = Router();

export default router.get('/test', (req: Request, res: Response) => {
    res.status(200).send('API Working')
})
.post('/movie', movieCreateValidation(), validate, createMovie)
.get('/movie/:id', findMovieId)
.get('/movie', getAllMovies)
.get('/movie/:id', findMovieById)
.delete('/movie/:id', removeMovie)
.patch('/movie/:id', updateMovie, movieCreateValidation(), validate)