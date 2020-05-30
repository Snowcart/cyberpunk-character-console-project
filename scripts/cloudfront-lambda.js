const path = require('path');
const { STATUS_CODES } = require('http');

exports.handler = async (event, context, callback) => {
  const { request } = event.Records[0].cf;
  const { uri } = request;

  if (uri.indexOf('index') !== -1) {
    return callback(null, redirect('/'));
  }

  const htmlExtRegex = /(.*)\.html?$/;
  if (htmlExtRegex.test(request.uri)) {
    const uri = request.uri.replace(htmlExtRegex, '$1');
    return callback(null, redirect(uri));
  }
  if (!uri || uri === '/') {
    request.uri = 'index.html';
  } else if (uri.indexOf('.') === -1) {
    request.uri = uri + '.html';
  }

  // callback(null, staticContent('URI: [' + request.uri + ']'));

  callback(null, request);
};

function redirect(to) {
  return {
    status: '301',
    statusDescription: STATUS_CODES['301'],
    headers: {
      location: [{ key: 'Location', value: to }],
    },
  };
}
