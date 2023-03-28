import type { NextApiResponse } from 'next'
import { HttpStatus } from '@/constants/http';

export function ok(response: NextApiResponse, data: object = {}) {
  return response.status(HttpStatus.OK).json(data)
}

export function created(response: NextApiResponse, data: object = {}) {
  return response.status(HttpStatus.CREATED).json(data)
}

export function badRequest(response: NextApiResponse) {
  return response.status(HttpStatus.BAD_REQUEST).send(HttpStatus[HttpStatus.BAD_REQUEST])
}

export function unauthorized(response: NextApiResponse) {
  return response.status(HttpStatus.UNAUTHORIZED).send(HttpStatus[HttpStatus.UNAUTHORIZED])
}

export function forbidden(response: NextApiResponse) {
  return response.status(HttpStatus.FORBIDDEN).send(HttpStatus[HttpStatus.FORBIDDEN])
}

export function notFound(response: NextApiResponse) {
  return response.status(HttpStatus.NOT_FOUND).send(HttpStatus[HttpStatus.NOT_FOUND])
}

export function conflict(response: NextApiResponse, data: object = {}) {
  return response.status(HttpStatus.CONFLICT).json(data)
}

export function methodNotAllowed(response: NextApiResponse) {
  return response.status(HttpStatus.METHOD_NOT_ALLOWED).send(HttpStatus[HttpStatus.METHOD_NOT_ALLOWED]);
}

export function serverError(response: NextApiResponse) {
  return response.status(HttpStatus.INTERNAL_SERVER_ERROR).send(HttpStatus[HttpStatus.INTERNAL_SERVER_ERROR])
}
