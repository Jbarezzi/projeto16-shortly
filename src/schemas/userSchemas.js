import Joi from "joi";

const newUser = Joi.object({
    name: Joi.string().trim().required(),
    email: Joi.email().trim().required(),
    password: Joi.string().trim().required(),
    confirmPassword: Joi.string().valid(password),
});

export default newUser;