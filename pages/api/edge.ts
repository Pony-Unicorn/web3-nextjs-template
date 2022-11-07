import type { NextRequest } from 'next/server';

export default async (req: NextRequest) => {
  try {
    switch (req.method) {
      case 'GET': {
        const { searchParams } = new URL(req.url);
        const age = searchParams.get('age');

        return new Response(
          JSON.stringify({
            name: 'pony',
            age,
            ip: req.ip,
            method: req.method
          }),
          {
            headers: {
              'content-type': 'application/json;charset=UTF-8'
            }
          }
        );
      }
      case 'POST': {
        const jsonData = await req.json();

        return new Response(
          JSON.stringify({
            name: 'pony',
            age: jsonData.age,
            ip: req.ip,
            method: req.method
          }),
          {
            headers: {
              'content-type': 'application/json;charset=UTF-8'
            }
          }
        );
      }
      default:
        return new Response(null, {
          status: 404
        });
    }
  } catch (err) {
    return new Response(null, {
      status: 500
    });
  }
};

export const config = {
  runtime: 'experimental-edge'
};
