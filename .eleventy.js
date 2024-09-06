const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  eleventyConfig.setServerOptions({
    showAllHosts: true
  });
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPassthroughCopy({"src/uploads": "static/uploads"});
  // Copy Netlify CMS assets to the output folder
  eleventyConfig.addPassthroughCopy({ "src/static/admin" : "/admin" });
  
  // Copy assets to the output folder
  eleventyConfig.addPassthroughCopy("src/static/components");
  eleventyConfig.addPassthroughCopy("src/static/css");
  eleventyConfig.addPassthroughCopy("src/static/fonts");
  eleventyConfig.addPassthroughCopy("src/static/img");
  eleventyConfig.addPassthroughCopy("src/static/js");
  eleventyConfig.addPassthroughCopy({ "src/static/lab" : "/lab" });
  eleventyConfig.addPassthroughCopy({ "src/static/sangria" : "/sangria" });
  eleventyConfig.addPassthroughCopy({ "src/static/hyperspace" : "/hyperspace" });
  eleventyConfig.addPassthroughCopy({ "src/static/newwest" : "/newwest" });
  eleventyConfig.addPassthroughCopy({ "src/static/blink" : "/blink" });
  eleventyConfig.addPassthroughCopy("src/static/store");
  eleventyConfig.addPassthroughCopy({ "src/static/utils": "static/js/utils" });
  // copy Parcel output to _site folder
  eleventyConfig.addPassthroughCopy('dist/');

  // create tunnel with browser-sync
  eleventyConfig.setBrowserSyncConfig({
    tunnel: true
  });

    return {
      dir: {
        // ⚠️ These values are both relative to your input directory.
        includes: "_includes",
        input: "src",
        https: true
      },
    }
};