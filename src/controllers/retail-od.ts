import { Request, Response } from 'express';
import * as RetailODService from '../services/retail-od';

const createRetailOD = async (req: Request, res: Response) => {
  const { user, application } = req.body;

  try {
    const result = await RetailODService.createRetailOD(user, application);
    if (result) {
      return res.status(200).send(result);
    }
  } catch (e) {
    console.log(e);
  }

  res.status(500).send();
};

export { createRetailOD };
