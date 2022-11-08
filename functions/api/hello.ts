export async function onRequestGet(req) {
  const { searchParams } = new URL(req.url);
  const age = searchParams.get('age');

  return new Response(`Hello world ${age}`);
}
