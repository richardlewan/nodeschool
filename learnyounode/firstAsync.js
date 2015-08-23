var fs = require('fs');

var path = process.argv[2];

fs.readFile(path, function (err, data) {
  if (err) throw err;

  var dataStr = data.toString();
  var arr = dataStr.split('\n');

  console.log(arr.length - 1);
});
