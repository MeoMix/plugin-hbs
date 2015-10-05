export function translate(load) {
  load.source = 'module.exports = require(\'handlebars\').compile(\'' + load.source
  .replace(/'/g, '\\\'')
  .replace(/[\f]/g, '\\f')
  .replace(/[\b]/g, '\\b')
  .replace(/[\n]/g, '\\n')
  .replace(/[\t]/g, '\\t')
  .replace(/[\r]/g, '\\r')
  .replace(/[\u2028]/g, '\\u2028')
  .replace(/[\u2029]/g, '\\u2029') + '\');';
}
