let prices = [17, 87,54, 85, 10];

// prices.forEach(bla => console.log(bla));

/* prices.forEach(bla => {console.log(bla);
                          console.log('This is another line'); 
                         });         */

/*function processItem(bla){
      console.log(bla);
      console.log('This is another line');
}      */ 

/*const processItem = (bla)=>{
    console.log(bla);
    console.log('This is another line');
}       */

//prices.forEach(processItem);
prices.forEach(bla => {
    console.log(bla);
    console.log('This is another line');
});

//processItem('Hello World');
//processItem(12);   


/* Create a new array with each number doubled from prices array 
[17, 87, 54, 85, 10]; ----> [34, 174, 108, 170, 20];       */
let doublePrices = prices.map(each => each * 2);    //each is basically taking the prices values so the prices array values is getting doubled by *2
console.log(doublePrices);

/* Create a new array with item turned into this "price is YourPriceHere"
[17, 87, 54, 85, 10]; ---->  ["price is 17", "price is 87", .........]     */
let tagPrices = prices.map(each => 'Price is ' + each);
console.log(tagPrices);

