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
    }
}

const ninja1=new Ninja("dania",5);
ninja1.SayName();
ninja1.drinkSake();
ninja1.showStats();
