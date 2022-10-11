import { NextRequest } from 'next/server';

export default (req: NextRequest) =>
  new Response(JSON.stringify({ name: 'pony', age: 28, ip: req.ip }), {
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    }
  });

export const config = {
  runtime: 'experimental-edge'
};
