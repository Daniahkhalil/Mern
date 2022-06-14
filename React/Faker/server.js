const express = require("express");

const  faker  = require("faker");
const app = express();
const port = 8000;
class Company{
    constructor(id,name, address){
        this.id=id;
        this.name=name;
        this.address=address;

    }
}
class User{
    constructor(id,firstName, lastName , phoneNumber,password,email){
        this.id=faker.datatype.uuid();
        this.firstName=faker.name.firstName();
        this.lastName=faker.name.lastName();
        this.phoneNumber= faker.phone.phoneNumber();
        this.password=faker.internet.password();
        this.email= faker.internet.email();
    }
}

// const createUser = () => {
//    const newUser=new User(
//     faker.datatype.uuid(),
//     faker.name.firstName(),
//     faker.name.lastName(),
//     faker.phone.phoneNumber(),
//      faker.internet.password(),
//     faker.internet.email()
   
//    );
    
//     return newUser;
// };

const createCompany = () => {
    const newCompany = new Company(
        faker.datatype.uuid(),
        faker.company.companyName(),
        {
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        }
    );
    return newCompany;
};


// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


app.get("/api/users/new", (req, res) => {
    const newUser=new User();
    res.json( newUser );
});

app.get("/api/user/company", (req, res) => {
    const newCompany=createCompany();
    res.json( newCompany );
});
// app.post("/api/users", (req, res) => {
//         // req.body will contain the form data from Postman or from React
//         console.log(req.body);
//         // we can push it into the users array for now...
//         // later on this will be inserted into a database
//         users.push(req.body);
//         // we always need to respond with something
//         res.json( { status: "ok" } );
//     });
    
    // app.delete("/api/users/:id", (req, res) => {
    //     // we can get this `id` variable from req.params
    //     const id = req.params.id;
    //     // assuming this id is the index of the users array we can remove the user like so
    //     users.splice(id, 1);
    //     // we always need to respond with something
    //     res.json( { status: "ok" } );
    // });
    
    
// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );
