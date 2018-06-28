const { Worker } = require('worker_threads'); // eslint-disable-line import/no-unresolved

const { SharedObject } = require('../../src');

function startWorker(path, cb) {
  const w = new Worker(path, {
    workerData: null,
  });
  w.on('message', (msg) => {
    cb(null, msg);
  });
  w.on('error', cb);
  w.on('exit', (code) => {
    if (code !== 0) {
      throw new Error(`Worker stopped with exit code ${code}`);
    }
  });
  return w;
}

startWorker(`${__dirname}/worker.js`, (err, result) => {
  if (err) {
    throw err;
  }

  console.log('master.start');
  const sharedData = new SharedObject(result.sharedData);
  console.log(sharedData.get());
  sharedData.set();
  console.log('master.end');
});
