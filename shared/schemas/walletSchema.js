import Joi from 'joi';

export const walletSchema = Joi.object({
  walletId: Joi.string().guid({ version: 'uuidv4' }).required(),
  parties: Joi.array().items(Joi.string().valid('user', 'platform', 'lender')).min(3).required(),
  aggregatedKey: Joi.string().required(),
});
