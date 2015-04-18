// This script sends an OSC message over UDP

var osc = require('osc');
var udpPort = new osc.UDPPort({
    localAddress: "172.31.24.152", //Change this to the local IP on the network (I think)
	localPort: 99951 // I THINK this is the receive port, should you wish to receive.
});
		 
  // Open the socket. 
udpPort.open();
		   
// Send an OSC message where the type is inferred. 
udpPort.send({
 	  address: "/sl/0/down",
	  args: ["undo"]
	  }, "127.0.0.1", 65400); //Specify the destination IP and port.

// Send an OSC message where the type is specified with metadata.
udpPort.send({
 	  address: "/sl/0/up",
	  args:[
	  {
		  type: "f", // OSC type tag string
		  value: 444.4
	  },
	  {
		  type: "s", // OSC type tag string
		  value: "chris"
	  },
	  {
		  type: "s", // OSC type tag string
		  value: "yochris"
	  }
	  ]

	  },  "127.0.0.1", 65400);

