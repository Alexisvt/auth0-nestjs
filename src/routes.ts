import { RequestMethod } from '@nestjs/common';

export default [
  { path: '/items', method: RequestMethod.POST },
  { path: '/shopping-cart', method: RequestMethod.POST },
];
