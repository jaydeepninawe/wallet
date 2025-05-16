import Joi from 'joi';

export const zkpSchema = Joi.object({
  commitment: Joi.string().min(10).required(),
  zkp: Joi.string().min(10).required(),
});
