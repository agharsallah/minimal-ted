
/*var fs = require('fs');
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

});*/

var proj4 = require('proj4');
var FromProjXY = proj4.defs("EPSG:4326","+proj=longlat +datum=WGS84 +no_defs"); //	
var ToProjLatLong = proj4.defs("EPSG:3857","+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs");
var a=proj4(FromProjXY,ToProjLatLong,[-92336.468,99043.202]);
console.log(a)