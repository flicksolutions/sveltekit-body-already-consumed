import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
  const response = await fetch("/json");
  const data = await response.json();

  return { data };
}) satisfies PageLoad;

export const prerender = true;

export const entries = async () => {
  return new Array(100).fill(0).map((_, i) => ({ json: `page-${i + 1}` }));
};
