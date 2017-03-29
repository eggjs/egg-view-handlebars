'use strict';

/**
 * handlebars default config
 * More http://handlebarsjs.com/reference.html
 * @member
 * @property {Boolean} [data=true] set to false to disable data tracking.
 * @property {Boolean} [compat=true] set to true to enable recursive field lookup.
 * @property {Boolean} [noEscape=false] set to true to not HTML escape any content.
 * @property {Boolean} [knownHelpers=false] optimize a number of cases.
 * @property {Boolean} [knownHelpersOnly=true] prevent indent
 * @property {Boolean} [strict=false] run in strict mode
 * @property {Boolean} [explicitPartialContext=true]
 * @property {Boolean} [ignoreStandalone=true] When the value is true,disables standalone tag
 * @property {Object} [partials] register partial
 */
exports.handlebars = {
  data: true,
  compat: true,
  noEscape: false,
  knownHelpers: false,
  knownHelpersOnly: true,
  strict: false,
  explicitPartialContext: true,
  ignoreStandalone: true,
  partials: {},
};
