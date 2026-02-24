import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      prerender: {
        handleHttpError: "warn",
        concurrency: 20,
      },
    }),
  },
};

export default config;
