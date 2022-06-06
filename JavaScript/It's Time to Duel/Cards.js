class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;

    }
}

class Unit extends Card{
    constructor(name,cost,power,resilence){
        super(name,cost);
        this.power=power;
        this.resilence=resilence;

    }

    attack(unit) {
        if( unit instanceof Unit ) {
            unit.resilence -= this.power;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

class Effect extends Card{
    constructor(name, cost, stat, magnitude) {
        super(name,cost);
        this.stat=stat;
        this.magnitude=magnitude;

        let mode="";
        if(this.magnitude > 0){
            mode="increase";
        }else{
            mode="reduce";
        }
        this.text = `${mode} the target's ${this.stat} by ${this.magnitude}`;
    }

    play(unit){
        if(unit instanceof Unit){
            if(this.stat == "Resilience"){
                unit.resilence +=this.magnitude;
            }else if (this.stat == "Power"){
                unit.power += this.magnitude;
            } else {
                console.log("This is not an Option idiot !");
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
        
    }
}

