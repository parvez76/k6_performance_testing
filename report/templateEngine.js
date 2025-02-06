// report/templateEngine.js
import Handlebars from "handlebars";

export const compileTemplate = (template, data) => {
  const compiled = Handlebars.compile(template);
  return compiled(data);
};
