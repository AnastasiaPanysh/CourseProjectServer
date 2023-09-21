import { Response } from 'express';
import { iReview, iUser } from '../interfaces/interfaces';

function buildResponse(res: Response, status: number, message: string | iReview[] | iUser[]) {
  res.status(status);
  res.send(message);
}

export { buildResponse };