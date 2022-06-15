const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
setup:{ 
    type:String,
    required:[true,"Setup is required"],
    minlength:[10,"Setup must be 10 charcters long"]
},
punchline:{ 
    type:String,
    required:[true,"Punchline is required"],
    minlength:[3,"Punchline must be 10 charcters long"]
}

    
},
{timestamps:true}
);
 
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;
