window.onload = function(){

	//get the canvas and contex and store in vars
	var canvas = document.getElementById("sky");
	var contex = canvas.getContext("2d");

	//set canvas dimention to window dimention
	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;

	//generate snowflakes and apply attr
	var maxFlakes = 100;
	var flakes = [];

	//loop through the empty flakes and apply attr
	for(var i = 0; i < maxFlakes; i++)
	{
		flakes.push({
			x: Math.random()*W,
			y: Math.random()*H,
			radius: Math.random()*5 + 2, //min of 2px and max of 7px
			d: Math.random() + 1 // density of the flakes
		})
	}

	// draw flakes onto canvas
	function drawFlakes(){

		contex.clearRect(0, 0, W, H);
		contex.fillStyle = "white";
		contex.beginPath();
		for(var i = 0; i < maxFlakes; i++)
		{
			var flake = flakes[i];
			contex.moveTo(flake.x, flake.y);
			contex.arc(flake.x, flake.y, flake.radius, 0, Math.PI*2, true);
		}
		
		contex.fill();

		//moveFlakes();  -- needs to define for movement
	}


}