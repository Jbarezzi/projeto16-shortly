const validateWithJoi = (schema) => {
    return async (req, res, next) => {
        const objectToValidate = req.body;
        try{
            await schema.validateAsync(objectToValidate, { abortEarly: false });
            next();
        } catch (error) {
            const errors = error.details.map(detail => detail.message);
            res.status(422).send(errors);
        } 
    }
}

export default validateWithJoi;