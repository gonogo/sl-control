// Listens on the serial port belonging to the Teensy and logs all data to the console.
var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/tty.usbmodem128751", {
  baudrate: 57600
});

serialPort.on("open", function () {
	console.log('Connection Opened');
	serialPort.on('data', function(data) {
  		console.log('-' + data);
	});
	//serialPort.write("ls\n", function(err, results) {
  	//	console.log('err ' + err);
  	//	console.log('results ' + results);
	//});
});

