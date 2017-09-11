/**
 * Extract then name of a subschema from a $ref property
 * @param url
 * @returns {*}
 */
module.exports = function(url) {
  var openapiVersion = arguments[1].data.root.openapiVersion
  var replace = '#/definitions/';

  if (openapiVersion === 'v3') {
    replace = '#/components/schemas/'
  }

  return url.replace(replace, '')
};
