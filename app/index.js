// A game with users as players who have defailt lives of 100
// Functions such as 'giveLife', 'stealLife' are used to exchange lives between users

//OOP
//parent class User
function User(name){
	this.name=name;
	this.life=100;
	this.giveLife= function (targetPlayer){

		targetPlayer.life +=1;
		this.life-=1;
		
	}
}
// child class player
function player(name){

	this.name = name;
	this.life = 50;
	this.giveLife= function (targetPlayer){

		targetPlayer.life +=3;
		this.life-=3;
		
	}


}

//make child class inherit parent class, inheritance implementation

player.prototype = new User();



User.prototype.luck=30;

User.prototype.stealLife = function(targetPlayer){

	targetPlayer.life-=1;
	targetPlayer.luck-=2;
	this.life+=1;
	this.luck+=2;

	
}




module.exports.User=User;



