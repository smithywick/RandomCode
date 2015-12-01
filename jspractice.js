<html>

<head>

<script>

var apple = {
	bar: function(){
		console.log("lambda");
	},
	type: function(){
		console.log(this.whatami);
	},
	whatami: 'apple'
};

apple.bar();
apple.type();

var mytruck = {
	type: function(make, model, year){
		this.make = make;
		this.model = model;
		this.year = year;
	}
	
	
	
}


use strict;

var myCar = {
	
	carStats:function(make, model, topSpeed, brakeSpeed, accelerateSpeed){
		this.make = make;
		this.model = model;
		this.topSpeed = topSpeed;
		this.brakeSpeed = brakeSpeed;
		this.accelerateSpeed = accelerateSpeed;
		this.speed = 0;
	},
	brake: function(howLong){
		if(this.speed > 0){
			this.speed -= this.brakeSpeed * howLong;
		}
		if(this.speed <0){
			this.speed = 0
		}
		if(this.speed===0){
			console.log("You've completely stopped!");
		}		
	},
	speedUp: function(speed){
		if(this.topSpeed < this.topSpeed + speed){
			this.speed += speed*this.accelerateSpeed;			
			console.log("You're going " + this.speed + " MPH!");
		}
		else{
			console.log("You're going too fast! Slow down!");
		}
	},	
}

var car = new myCar("Ford", "Fusion", 130, 15, 10);

car.speedUp()


var myCar = {
	carStats: function(make, model, topspeed) {
	this.make = make;
	this.model = model;
	this.topspeed = topspeed;
	},
	brake: function(bnum){
		if(this.currentspeed - bnum > 0){
			this.currentspeed -= bnum;
			console.log('Putting on the brakes! Current speed is ' + this.currentspeed);
		}
		else if(this.currentspeed<0){
			this.speed = 0;
		}
		else{
			console.log('You have stopped!');
		}
	},
	speedup: function(snum){
		if(this.currentspeed < this.topspeed){
		this.currentspeed+=snum;
		console.log('Increasing speed to ' + this.currentspeed + '!');
		}
		else if(this.currentspeed === this.topspeed){
			console.log("You've reached the top speed of " + this.topspeed);			
		}
		if(this.currentspeed === this.topspeed){
			console.log("You've reached the top speed of " + this.topspeed);
		}
	},
	currentspeed: 0,
	make: '',
	model: '',
	topspeed: 0
}

function vehical(make, model, topspeed) {
	this.make = make;
	this.model = model;
	this.topspeed = topspeed;
	this.currentspeed = 0;
	
	this.brake = function(bnum){
		if(this.currentspeed - bnum > 0){
			this.currentspeed -= bnum;
			console.log('Putting on the brakes! Current speed is ' + this.currentspeed);
		}
		else if(this.currentspeed<0){
			this.speed = 0;
		}
		else{
			console.log('You have stopped!');
		}
	}
	
	this.speedup = function(snum){
		this.currentspeed+=snum;
		console.log('Increasing speed to ' + this.currentspeed + '!');
	}
}

var ford = new vehical('ford','fusion',130);

ford.speedup(8);
ford.brake(9);

myCar.carStats('ford','fusion',130);
myCar.speedup(120);
myCar.brake(5);
myCar.speedup(15);
myCar.brake(90);

console.log(myCar.make);


</script>

</head>

<body>
<button onclick="myFunction()">Speed up</button>
</body>

</html>