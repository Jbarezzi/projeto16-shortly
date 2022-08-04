import Joi from "joi";

const newUser = Joi.object({
    name: Joi.string().trim().required(),
    email: Joi.string().email().trim().required(),
    password: Joi.string().trim().required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
});

const signinUser = Joi.object({
    email: Joi.string().email().trim().required(),
    password: Joi.string().trim().required(),
});

export { newUser, signinUser };