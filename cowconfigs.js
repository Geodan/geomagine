var cowconfig_geodan ={
	key: 'geomagine',	// herd name, unique for each customer, generate hash using: `$ date | md5sum | head -c12;echo;`
	protocol:'wss',
	url:'websocket.geodan.nl', 
	port:443,
	dir: 'geomagine',	// normally same as key
  };
          
var cowconfig_local ={
	key: 'imagine',
	protocol:'ws',
	url:'192.168.1.131', 
	port:8081
  };

//Set the correct config here
window.cowconfig = cowconfig_geodan;
