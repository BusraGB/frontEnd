let prices = [17, 87, 54, 85, 10]; 
console.log(prices);
console.log('----------------------------');

//Create a new array and store numbers less than 70 from above array 
let lowPrices = prices.filter(each => each < 70);
console.log(lowPrices);

//Filter prices array to only get prices more than 20 then print each item
//below is in one shot of the above concept 
prices.filter(each => each > 20)
    .forEach(each => console.log(each));

const bla = [
    {
        "id": 3,
        "name": "Test1",
        "gender": "Male",
        "phone": 7684567890
    },
    {
        "id": 4,
        "name": "Paige",
        "gender": "Female",
        "phone": 3786741487
    },
    {
        "id": 6,
        "name": "Tedmund",
        "gender": "Male",
        "phone": 2227140732
    },
    {
        "id": 7,
        "name": "Hershel",
        "gender": "Male",
        "phone": 5278678322
    }
];

//Get all the names & print
bla.filter(each => each.gender == "Male")
   .map(each => each.name)
   .forEach(each => console.log(each));
