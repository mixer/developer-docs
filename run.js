const Handlebars = require("handlebars");
const fs = require("fs");

Handlebars.registerHelper("toJSON", function(object) {
  return new Handlebars.SafeString(JSON.stringify(object));
});

const templateSrc = fs.readFileSync("./template.mustache").toString();
const templateFn = Handlebars.compile(templateSrc);

const json = require("./methods.json");

console.log(json);

const md = templateFn(json);

fs.writeFileSync("./out.md", md);
