let names = ['Clark', 'Bruce', 'Barry', 'Diana', 'John'];
console.log(names);

console.log('-----------------');

/* Transform this array to get new array of json Object
{firstName : 'Clark'},  {firstName : 'Bruce'} .....     */

//let firstObj = { firstName : 'Clark'};
//console.log(firstObj);

let  myNames = [];

for(let each of names){
    let myObj = { firstName : each };
    myNames.push(myObj);
}
console.log(myNames);
/*  [
      { firstName: 'Clark' },
      { firstName: 'Bruce' },
      { firstName: 'Barry' },
      { firstName: 'Diana' },
      { firstName: 'John' }
    ]           */



//Below has the same outcome as the top but in one shot 
let myCoolNames = names.map(each => {
    return {firstName : each,
            charCount : each.length}
});
console.log(myCoolNames);
/* 
      {firstName: 'Clark' charCount: 5},
      {firstName: 'Bruce' charCount: 5},
      {firstName: 'Barry' charCount: 5},
      {firstName: 'Diana' charCount: 5},
      {firstName: 'John'  charCount: 4}
    ]           */
