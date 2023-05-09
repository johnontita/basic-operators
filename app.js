// // //TEST DATA 1
// let massMarkInKg=78;
// let heightMarkInMeters= 1.69;
// let massJohnInKg=92;
// let heightJohnInMeters=1.95;
// let BMIMark=massMarkInKg/heightMarkInMeters**2;
// let BMIJohn=massJohnInKg/heightJohnInMeters**2
// console.log(BMIMark,BMIJohn,BMIMark>BMIJohn);
// //TEST DATA 2
//  massMarkInKg=95;
//  heightMarkInKg=1.88;
//  massJohnInKg=85;
//  heightJohnInKg=1.76
//  BMIMark=massMarkInKg/heightMarkInKg**2;
//  BMIJohn=massJohnInKg/heightJohnInKg**2;
//  const higherMarkBMI=BMIMark>BMIJohn
// console.log(BMIMark,BMIJohn,higherMarkBMI);


//test data 1
const massMarkInKg= 78;
const heightMarkInMeters=1.69;
const massJohnInKg=92;
const heightJohnInMeters=1.95;
const BMIMark=massMarkInKg/heightMarkInMeters**2;
const BMIJohn=massJohnInKg/heightJohnInMeters**2;
console.log(`BMI of Mark is ${BMIMark} and BMI of John is ${BMIJohn}`)
if(BMIMark>BMIJohn){
    console.log("Mark's BMI is higher than John's ");
}
else{
    console.log("John's BMI is higher than Mark's" );
}

//strict operators
const age= Number(prompt("enter your age"));
if(age===20)
console.log("you qualify to marry");
else
console.log("you should have been in some relationship");
//strict operators with control structures

const favoriteNumber=Number(prompt('enter your favorite number'));
if(favoriteNumber===2){
    console.log('2 is a favorite number');
    }
    else if(favoriteNumber===10){
        console.log("10 is also a favorite number");

    }
    else if (favoriteNumber===5){
        console.log("5 is also favorite number");
    }
    else{
        console.log("you have missed your favorite number")
    }




