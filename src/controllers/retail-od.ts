import { Request, Response } from 'express';

const createRetailOD = (req: Request, res: Response) => {
  res.status(200).send("hello world");
};

export { createRetailOD };
