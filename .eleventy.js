const socialImages = require("@11tyrocks/eleventy-plugin-social-images");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(socialImages);

  eleventyConfig.addWatchTarget("./src/sass/");
  
  eleventyConfig.addPassthroughCopy("./src/fonts/");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
