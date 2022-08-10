import Joi from 'joi';
import { RequestHandler } from 'express';

const OPTIONS = {
  errors: {
    wrap: { label: '' },
  },
};

const validateCreateRetailOD: RequestHandler = async (req, res, next) => {
  const userSchema = Joi.object().strict().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required().messages({
      'string.pattern.base': 'user.mobile must have 10 digits'
    }),
    email: Joi.string().email().required(),
  });

  const applicationSchema = Joi.object().strict().keys({
    creditScore: Joi.number().min(0).max(999).required(),
    address: Joi.string().required(),
    aadhaarNumber: Joi.string().length(12).pattern(/^[0-9]+$/).required().messages({
      'string.pattern.base': 'application.aadhaarNumber must have 12 digits'
    }),
    panNumber: Joi.string().length(10).required(),
  });

  const schema = Joi.object({
    user: userSchema.required(),
    application: applicationSchema.required(),
  });

  try {
    await schema.validateAsync(req.body, OPTIONS);
    next();
  } catch (e: any) {
    const { details } = e;
    const { message } = details[0];
    res.status(400).send({ error: message });
  }
};

export { validateCreateRetailOD };