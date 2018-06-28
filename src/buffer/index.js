const {
  str2sab, ua2str, stringify, parse,
} = require('../utils');

exports.fromObject = (data) => {
  const strData = stringify(data);
  const sab = str2sab(strData);
  return sab;
};

exports.toObject = (ab) => {
  const str = ua2str(ab);
  const obj = parse(str);
  return obj;
};

exports.isSharedBuffer = sab => sab instanceof Uint16Array;
