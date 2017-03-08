'use strict';

/**
 * handlebars default config
 * More http://handlebarsjs.com/reference.html
 * @member
 * @property [data=boolean] set to false to disable data tracking.
 * @property [compat=boolean] set to true to enable recursive field lookup.
 * @property [noEscape=boolean] set to true to not HTML escape any content.
 * @property [knownHelpers=boolean] optimize a number of cases.
 * @property [knownHelpersOnly=boolean] prevent indent
 * @property [strict=boolean] run in strict mode
 * @property [explicitPartialContext=boolean]
 * @property [ignoreStandalone=boolean] When the value is true,disables standalone tag
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
};
