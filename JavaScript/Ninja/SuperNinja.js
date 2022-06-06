class Ninja{
    constructor(name,health){
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength=3;
    }
    SayName(){
        console.log(this.name);
    }
    showStats(){
      
        console.log(this.name);
        console.log(this.health);
        console.log(this.speed);
        console.log(this.strength);
    }

    drinkSake(){
        this.health +=10;
        console.log(this.health);
    }
}

class Sensei extends Ninja{
    constructor(wisdom){
        super("Super Sensi",200);
        this.wisdom=10;
        super.speed=10;
        super.strength=10;


    }
showStats(){
console.log("Name:",this.name," , Health:",this.health," , Speed:",this.speed," , Strength:",this.strength);
}

speakwisdom(){
super.drinkSake();
}
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakwisdom();

superSensei.showStats();