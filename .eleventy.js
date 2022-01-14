const socialImages = require("@11tyrocks/eleventy-plugin-social-images");
const Image = require("@11ty/eleventy-img");
const cheerio = require('cheerio');

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [600, 1000, 1400],
    formats: ["webp", "jpeg"],
    urlPath: "/assets/general-assets/",
    outputDir: "./public/assets/general-assets/"
  });

  let imageAttributes = {
    alt,
    sizes: "100vw",
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}



module.exports = function (eleventyConfig) {
// Waiting on 11ty feature to come and currently in 1.0.4 beta
  eleventyConfig.addExtension('njk', {
    read: true,
    compile() {
      return async function render(data) {
        const html = await this.defaultRenderer(data);
        const $ = cheerio.load(html);
        
       
          await Promise.all(
            // loop over all the images in our document
            $('img').toArray().map(async (img) => {
              // grab the image attributes
              const { src = '', alt = '', sizes = '100vw'} = img.attribs;
              // convert to an optimized image
              const optimizedImage = await imageShortcode(src, alt, sizes);
              // replace our images with an optimized one
              $(img).replaceWith(optimizedImage);
            })
          )
        

        return $.html();
      }
    }
  })
  eleventyConfig.addExtension('md', {
    read: true,
    compile() {
      return async function render(data) {
        const html = await this.defaultRenderer(data);
        const $ = cheerio.load(html);
        
       
          await Promise.all(
            // loop over all the images in our document
            $('img').toArray().map(async (img) => {
              // grab the image attributes
              const { src = '', alt = '', sizes = '100vw'} = img.attribs;
              // convert to an optimized image
              const optimizedImage = await imageShortcode(src, alt, sizes);
              // replace our images with an optimized one
              $(img).replaceWith(optimizedImage);
            })
          )
        

        return $.html();
      }
    }
  })

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);

  eleventyConfig.addPlugin(socialImages);

  eleventyConfig.addWatchTarget("./src/sass/");
  
  eleventyConfig.addPassthroughCopy("./src/fonts/");
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
