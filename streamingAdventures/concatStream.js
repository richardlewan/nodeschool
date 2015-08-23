var concat = require('concat-stream');
var through = require('through2');
var result = "";
var count = 0;

function write (buffer, encoding, next) {
    count++;
    var result = "";
    if(count % 2 == i){
      result = buffer.toString().toLowerCase();
    }
    else { result = buffer.toString().toUpperCase() }
    this.push(result);
    next();
}

function end (done) {
    done();
}

process.stdin
        .pipe(concat(function (text) {
		var reversed = text.toString().split("").reverse().join("");
                process.stdout.write(reversed);
         }));
