const Fs = require("fs");
const Path = require("path");
const Sass = require("node-sass");
const getComponents = () => {
  const allComponents = [];
  const types = ["atoms", "molecules", "organisms"];
  types.forEach((type) => {
    allComponents.push(
      ...Fs.readdirSync(`src/${type}`).map((file) => ({
        input: `src/${type}/${file}`,
        output: `lib/${file.slice(0, -4) + "css"}`,
      }))
    );
  });
  return allComponents;
};

const compile = (path, fileName) => {
  const result = Sass.renderSync({
    data: Fs.readFileSync(Path.resolve(path)).toString(),
    outputStyle: "expanded",
    includePaths: [Path.resolve("src")],
  });
  Fs.writeFileSync(Path.resolve(fileName), result.css.toString());
};
compile("src/global.scss", "lib/global.css");
getComponents().forEach((component) => {
    if(component.input && component.output){
        compile(component.input, component.output);
    }
});
