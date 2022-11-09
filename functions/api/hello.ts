export async function onRequestGet({ request }) {
  const { searchParams } = new URL(request.url);
  const age = searchParams.get('age');

  return new Response(`Hello world ${age}`);
}
