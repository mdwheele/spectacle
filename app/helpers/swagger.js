module.exports = function(partial) {
  var version = arguments[1].data.root.openapiVersion

  return 'swagger/' + version + '/' + partial;
};
