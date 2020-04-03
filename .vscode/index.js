const Riya = {
    name: "Riya",
    dob: 2003,
    graduated: false,
    age: function () {
        console.log(this);
        return 2020 - this.dob;
    }
};

// when we have an arrow function (=>) we dont have to say return 


console.log("connected"); 