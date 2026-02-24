import type { RequestHandler } from "./$types";

export const prerender = true;

export const GET: RequestHandler = async ({ params }) => {
  const { path } = params;
  return fetch(`https://cdn2.thecatapi.com/images/${path}.jpg`);
};
