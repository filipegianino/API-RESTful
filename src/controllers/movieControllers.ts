import { Request, Response } from "express";

// Module
import { MovieModel } from "../models/movie";

// Logger
import Logger from "../../config/logger";
import { error } from "console";

export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body
        const movie = await MovieModel.create(data)
        return res.status(201).json(movie)
    } catch (e: any) {
        Logger.error(`Error ${e.message}`)
        return res.status(500).json({error: 'please try again later'})
    }
};
    
export async function findMovieId(req:Request, res: Response) {
    try {
        
        const id = req.params.id
        const movie = await MovieModel.findById(id)

    // se o id não for encontrado
        if(!movie) {
            return res.status(404).json({error: 'movie does not exist'})
        }
    // se o id for encontrado
        return res.status(200).json(movie)


    } catch (e: any) {
        Logger.error(`Error ${e.message}`)
    }
}
        
// All Movies Registred

export async function getAllMovies(req:Request, res: Response) {
    try {
        const movies = await MovieModel.find();
        return res.status(200).json(movies)
        
    } catch (e: any) {
        Logger.error(`Error ${e.message}`)
    }
        
    
}

// Movie By Id

export async function findMovieById(req: Request, res: Response) {
    try {
        
        const id = req.params.id
        const movie = await MovieModel.findById(id);

        if(!movie) {
            return res.status(404).json({ error: 'The movie does not exist' })
        }

        return res.status(200).json(movie)


    } catch (e: any) {
        Logger.error(`Error ${e.message}`)
    }
}

// Remove Movie

export async function removeMovie(req: Request, res: Response) {

    try { 
        const id = req.params.id
        const movie = await MovieModel.findById(id)

        if(!movie) {
            return res.status(404).json({error: 'the movie does not exist.'})
        }

        await movie.deleteOne();
        return res.status(200).json({ msg: 'film was deleted'})
        
    } catch (e: any) {
        Logger.error(`Error ${e.message}`)
        return res.status(500).json({error: 'please try again later'})
        
    }
    
}

export async function updateMovie(req: Request, res: Response) {
    try {

        const id = req.params.id
        const data = req.body

        const movie = await MovieModel.findById(id)
        
        if(!movie) {
            return res.status(404).json({error: 'the movie does not exist'})
        } 

        await MovieModel.updateOne({_id: id}, data)
        return res.status(200).json(data)
    
} catch (e: any) {
    Logger.error(`Error ${e.message}`)
    
}
}

