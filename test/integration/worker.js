const { parentPort } = require('worker_threads'); // eslint-disable-line import/no-unresolved

const { SharedObject } = require('../../src');

console.log('worker.start');

const sharedData = new SharedObject({
  profile: {
    name: 'Nairi',
    age: 18,
  },
  test: 'test',
});
console.log('worker');

setImmediate(() => {
  parentPort.postMessage({ sharedData: sharedData.getSAB() });
});

console.log('worker.start.2');
setTimeout(() => {
  console.log(sharedData.get());
}, 1000);
console.log('worker.end.2');
