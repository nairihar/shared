const SharedBuffer = require('../buffer');
const { str2sab, stringify } = require('../utils');

class SharedObject {
  constructor(data) {
    if (SharedBuffer.isSharedBuffer(data)) {
      this.shared = SharedBuffer.toObject(data);
      this.sab = data;
    } else {
      const dataStr = stringify(data);
      this.sab = str2sab(dataStr);
      this.shared = data;
    }
  }

  get() {
    return this.sab[0];
  }

  getSAB() {
    return this.sab;
  }

  set() {
    this.sab[0] = 1;
    return null;
  }
}

module.exports = SharedObject;
