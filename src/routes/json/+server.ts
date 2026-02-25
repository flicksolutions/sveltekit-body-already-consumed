import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return new Response(JSON.stringify({ message: "mock data" }), {
    headers: { "Content-Type": "application/json" },
  });
};
