window.onload = function(){

	//get the canvas and context and store in vars
	var canvas = document.getElementById("sky");
	var context = canvas.getContext("2d");

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
			density: Math.random() + 1 // density of the flakes
		});
	}

	// draw flakes onto canvas
	function drawFlakes(){

		context.clearRect(0, 0, W, H);
		context.fillStyle = "white";
		context.beginPath();
		for(var i = 0; i < maxFlakes; i++)
		{
			var flake = flakes[i];
			context.moveTo(flake.x, flake.y);
			context.arc(flake.x, flake.y, flake.radius, 0, Math.PI*2, true);
		}
		
		context.fill();

		moveFlakes();
	}

	// animate the flakes
	var angle = 0;

	function moveFlakes(){
		angle += 0.01;
		for(var i = 0; i < maxFlakes; i++){
			var flake = flakes[i];
			flake.y += Math.pow(flake.density, 2) + 1;
			flake.x += Math.sin(angle) * 2;
			// when flake reaches the bottom
			if(flake.y > H){
				flakes[i] = {x: Math.random()*W, y: 0, radius: flake.radius, density: flake.density};
			}
		}
	}

	// call drawFlakes() every 25ms
	setInterval(drawFlakes, 25);
}