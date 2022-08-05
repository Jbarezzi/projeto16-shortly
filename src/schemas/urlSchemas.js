import Joi from "joi";

const newUrl = Joi.object({
    url: Joi.string().uri({ allowRelative: true }),
});

export default newUrl;