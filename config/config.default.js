'use strict';

const path = require('path');

module.exports = appInfo => ({
  /**
   * handlebars default config
   * More http://handlebarsjs.com/reference.html
   * @member
   * @property {Boolean} [data=true] set to false to disable data tracking.
   * @property {Boolean} [compat=true] set to true to enable recursive field lookup.
   * @property {Boolean} [noEscape=false] set to true to not HTML escape any content.
   * @property {Boolean} [knownHelpers=false] optimize a number of cases.
   * @property {Boolean} [knownHelpersOnly=false] set to true to allow further optimzations based on the known helpers list.
   * @property {Boolean} [preventIndent=true] prevent indent
   * @property {Boolean} [strict=false] run in strict mode
   * @property {Boolean} [explicitPartialContext=true]
   * @property {Boolean} [ignoreStandalone=true] When the value is true,disables standalone tag
   * @property {String} [partialsPath] full path to partials directory
   */
  handlebars: {
    data: true,
    compat: true,
    noEscape: false,
    knownHelpers: false,
    knownHelpersOnly: false,
    preventIndent: true,
    strict: false,
    explicitPartialContext: true,
    ignoreStandalone: true,
    partialsPath: path.join(appInfo.baseDir, 'app/view/partials'),
    helperPath: path.join(appInfo.baseDir, 'app/extend/hbs-helper'),
  },
});
