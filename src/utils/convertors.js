const { bytes } = require('./calculators');

exports.str2sab = (str) => {
  const bs = bytes(str);
  const sab = new SharedArrayBuffer(bs);
  const ua = new Uint16Array(sab);

  for (const i in str) {
    ua[i] = str.charCodeAt(i);
  }

  return ua;
};

exports.ua2str = ab => String.fromCharCode.apply(null, new Uint16Array(ab));
