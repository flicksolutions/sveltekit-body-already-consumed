import type { PageLoad } from "./$types";

export const load = (async () => {
  return {};
}) satisfies PageLoad;

export const prerender = true;

export const entries = async () => {
  return new Array(100).fill(0).map((_, i) => ({ random: `page-${i + 1}` }));
};
