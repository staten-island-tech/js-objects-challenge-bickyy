// const Riya = {
//     name: "Riya",
//     dob: 2003,
//     graduated: false,
//     age: function () {
//         console.log(this);
//         return 2020 - this.dob;
//     }
// };

// when we have an arrow function (=>) we dont have to say return 

const Homer = {
    name: "Homer",
    age: 32,
    family: {
        wife: {
            name: "Marge",
            age:32,
        },
        son: {
            name: "Bart",
            age: 10
        }
    },
    pets: ["cat", "dog"]
};

Homer.family.daughter = {
    name: "Lisa",
    age: 8
}
