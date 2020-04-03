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

// const Homer = {
//     name: "Homer",
//     age: 32,
//     family: {
//         wife: {
//             name: "Marge",
//             age:32,
//         },
//         son: {
//             name: "Bart",
//             age: 10
//         }
//     },
//     pets: ["cat", "dog"]
// };

// Homer.family.daughter = {
//     name: "Lisa",
//     age: 8
// }

// const Riya = {
//     name: "Riya",
//     dob: 2003,
//     graduated: false,
//     age: function() {
//         console.log(this);
//         return 2020 - this.dob;
//     }
// };
// const { name,age } = Riya;

// const Angel = Riya; //this is not a COPY its a reference to 
// Angel.name = "Angel"; //incorrect 


const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" }
];
  
  //Challenge Questions
  //1) Filter all presidents, leaving only the Democratic ones

const Dems = presidents.filter( president => president.party === "D");
//2)Filter all presidents to leave only one term Republican presidents HINT use If statement
const oneRepublican = presidents.filter(president => president.terms === 1 && president.party === "R");
  //3) return only the last three presidents
const lastThree = presidents.filter(presidents => presidents.name === "John F. Kennedy" || presidents.name === "Lyndon Johnson" || presidents.name === "Dwight Eisenhower" );
  //4) log all dems who served 2 terms. HINT use chain filter, filter and slice
console.log(presidents.slice(1,3,10));
// the tenth one doesnt show 
const twoDems = presidents.filter( president => president.party === "D").filter( president => president.terms === 2);
console.log(twoDems);
  //BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"

