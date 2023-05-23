const p1 = {
    firstName : "Elif", 
    lastName  : "K",
    gender    : "Female", 
    age       : 18
    }; 
console.log(p1.firstName);

console.log('----------------------');

//Store firstNam & lastName into firstName, lastName variables 
//use destructing syntax

/* let{firstName, lastName, gender} = p1;      //created 2 variables and extracted the field of p1 object and assign the value to it
   console.log(firstName);
   console.log(lastName);
   console.log(gender);        */


//Create a function to expect Person object & print out firstName , lastName field

/* function printPerson(thePerson){
       console.log(thePerson.firstName);
       console.log(thePerson.lastName);
   }            */
                      //thePerson
function printPerson({firstName, lastName}){
    console.log(firstName);
    console.log(lastName);
}
printPerson(p1);

let p2 = {
    firstName : "Ali", 
    lastName  : "S",
    age       : 18 
}
printPerson(p2); 