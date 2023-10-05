import { body } from "express-validator";

export const movieCreateValidation = () => {
    return [
        body('title')
            .isString()
            .withMessage('the title is mandatory')
            .isLength({ min: 5 })
            .withMessage('title with less than 3 letters'),
        body('rating')
            .isNumeric()
            .withMessage('rating is not a number')
            .custom((value:number) => {
                if(value < 0 || value > 10) {
                    throw new Error ('invalid rating')
                }
                return true
            }),
        body('description')  
            .isString()
            .withMessage('mandatory description'),
            body('poster')  
            .isURL()
            .withMessage('Image need to be a URL.'),


            
    ]
}