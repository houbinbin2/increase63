const fire = require('./common');

const options = {
  showIp: false,
  project: '/data1/cdedesigns',
}

options.CIType = process.argv[2];

fire(options);
