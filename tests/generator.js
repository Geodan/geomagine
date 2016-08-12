var completepromise = new Promise(function(resolve, reject){
	var i = 0;
	window.setInterval(function(){
		i++;
		if (i>3){
			resolve();
		}
	},1000);
});

completepromise.then(function(){
		console.log('!!');
});