import Joi from 'joi';

export const commitmentSchema = Joi.object({
  party: Joi.string().valid('user', 'platform', 'lender').required(),
  commitment: Joi.string().min(10).required(),
  zkp: Joi.string().min(10).required(),
});
