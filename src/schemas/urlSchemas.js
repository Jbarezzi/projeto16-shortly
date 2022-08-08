import Joi from "joi";

const newUrl = Joi.object({
    url: Joi.string().uri().trim().required(),
});

export default newUrl;