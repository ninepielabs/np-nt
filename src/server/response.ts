import type { NextApiResponse } from 'next'
import { HttpStatus } from 'constants/http';

export const ok = (res: NextApiResponse, data: object = {}) => {
  return res.status(HttpStatus.OK).json(data);
};
