function singleArgEscape(arg) {
  if (typeof arg === 'string') {
    return arg.replace(/[^a-zA-Z0-9_-]/g, function (charToEscape) {
      return '\\' + charToEscape;
    });
  }
  // console.log('non è una stringa: ', arg);
  return arg;
}

function shellArgsEscape(args) {
  if (!Array.isArray(args)) {
    args = [args];
  }

  return args.map(singleArgEscape).join(' ');
}

module.exports = shellArgsEscape;
