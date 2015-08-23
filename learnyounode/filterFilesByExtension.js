var fs = require('fs');

var dir = process.argv[2];
var extension = process.argv[3];

fs.readdir(dir, function (err, list) {     
   if (err) throw err;
   for(var i=0; i < list.length; i++) {
     var file = list[i].toString();
     if(file.split('.')[1] === extension) {
       console.log(file);
     }
   }
});
