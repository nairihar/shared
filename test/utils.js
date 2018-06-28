const assert = require('assert');

const {
  bytes,
  str2sab, ua2str,
  stringify, parse,
} = require('../src/utils');

const str = 'Hello';
let bs = null;

describe('Check calculators', () => {
  it('check text byte size', () => {
    bs = bytes(str);
    const bytesExRes = Int16Array.BYTES_PER_ELEMENT * str.length;
    assert.equal(bs, bytesExRes);
  });
});

describe('Check parsers', () => {
  it('check stringify', () => {
    const obj = { hello: 4 };
    const strExRes = '{"hello":4}';
    const strObj = stringify(obj);
    assert.equal(strObj, strExRes);
  });

  it('check parse', () => {
    const strObj = '{"s":true}';
    const objExRes = { s: true };
    const obj = parse(strObj);
    assert.deepEqual(obj, objExRes);
  });
});

describe('Check convertors', () => {
  const sub = new SharedArrayBuffer(bs);
  let strArrayBuffer = null;

  it('convert string to array buffer', () => {
    const strABStringExRes = '72,101,108,108,111';
    strArrayBuffer = str2sab(str, sub);
    assert.equal(strArrayBuffer.toString(), strABStringExRes);
  });

  it('convert array buffer to string', () => {
    const strRes = ua2str(strArrayBuffer);
    assert.equal(strRes, str);
  });
});
