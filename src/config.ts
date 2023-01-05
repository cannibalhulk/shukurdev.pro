// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Shukur Huseynli";
export const SITE_DESCRIPTION =
  "Welcome to my blog! I mostly write about modern web development, coding and lifestyle";
export const TWITTER_HANDLE = "@cannibal_dev";
export const MY_NAME = "Shukur Huseynli";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
