module.exports = function (c) {
  c.addPassthroughCopy("src/admin");
  c.addPassthroughCopy("src/uploads");
  return { dir: { input: "src", output: "_site" } };
};