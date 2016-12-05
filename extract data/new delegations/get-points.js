var fs = require('fs');
var regex = /\(x[\s\S]*?\)/g; // get all string starts with "(x" ..... and ends with ")"
var res ;
var log_file = fs.createWriteStream(__dirname + '/ezouhour-coord.txt', {flags : 'w'});
fs.readFile("ezouhour.txt", 'utf8', function(err, data) {
  if (err) throw err;

do {
	var i = 0;
    res = regex.exec(data);
    if (res) {
        log_file.write(res[i] +"\n");
        i++
    }
} while (res);

});