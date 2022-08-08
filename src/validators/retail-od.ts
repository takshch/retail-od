import { object, string, number } from 'joi';
import { RequestHandler } from 'express';

const validateCreateRetailOD: RequestHandler = async (req, res, next) => {
  const userSchema = object().strict().keys({
    firstName: string().required(),
    lastName: string().required(),
    mobile: number().required().min(10).max(10),
    email: string().email().required(),
  });

  const applicationSchema = object().strict().keys({
    address: string().required(),
    aadhaarNumber: number().required().min(12).max(12),
    panNumber: number().required().min(10).max(10),
  });

  const schema = object().strict().keys({
    user: userSchema,
    application: applicationSchema,
  });

  try {
    await schema.validateAsync(req.body);
    next();
  } catch (e: any) {
    const { details } = e;
    const { message } = details[0];
    res.status(400).send({ error: message });
  }
};

export { validateCreateRetailOD };