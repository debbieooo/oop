function User(name){
	this.name=name;
	this.life=100;
	this.giveLife= function (targetPlayer){

		targetPlayer.life +=1;
		this.life-=1;
		//console.log(this.name+' gave 1 life to '+ targetPlayer.name);
		//console.log(this.name +' : ' + this.life);
		//console.log(targetPlayer.name +' : '+ targetPlayer.life)

	}
}


Bucky = new User('Bucky');
Wendy= new User('Wendy'); 

User.prototype.luck=30;

User.prototype.stealLife = function(targetPlayer){

	targetPlayer.life-=1;
	targetPlayer.luck-=2;
	this.life+=1;
	this.luck+=2;

	//console.log(this.name+ "'s life: "+ this.life +" and luck: "+this.luck);
	//console.log(targetPlayer.name+ "'s life: "+ targetPlayer.life +" and luck: "+targetPlayer.luck);
}

Wendy.giveLife(Bucky);
Bucky.stealLife(Wendy);


module.exports.User=User;



