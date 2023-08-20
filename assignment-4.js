// //first task
// function cubeNumber(number){
//     if(!isNaN(number)){
//         return Math.pow(Number(number), 3)
//     }else{
//         return 'Not a valid number';
//     }
// }
// const input = cubeNumber(4);
// console.log(input);


// //second task
// function matchFinder(string1, string2) {
//     if (typeof string1 === 'string' &&  typeof string2 === 'string') {
//         if (string1.toLowerCase().indexOf(string2.toLowerCase()) > -1) {
//             return true
//         } else {
//             return false;
//         }
//     } 
//     else {
//         return "Your input is not string. Please input string";
//     }
// }
// const input2 = matchFinder("john", "ohn");
// console.log(input2);


// //third task
// function sortMaker(arr) {
//     let isNumberNegative = false;
//     let isValueEqual = false;
//     let sortingItemReturn = null;
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             isNumberNegative = true;
//         }

//         if (arr[0] === arr[1]) {
//             isValueEqual = true;
//         }
//     }
//     if (isNumberNegative === false && isValueEqual === false) {
//         sortingItemReturn = arr.sort((item1, item2) => (item1 < item2 ? 1 : -1));
//     } else if (isValueEqual === true) {
//         sortingItemReturn = "equal";
//     } else {
//         sortingItemReturn = "Invalid Input";
//     }
//     return sortingItemReturn
// }
// const sortMakerInput = sortMaker([2,4]);
// console.log(sortMakerInput);


// //fourth task
// function findAddress(obj) {
//     const properties = ['street', 'house', 'society'];
//     let output = '';
  
//     for (let i = 0; i < properties.length; i++){
//       const prop = properties[i];
      
//       if (obj[prop]) {
//         output += obj[prop] + ',';
//       } 
//       else {
//         output += '__,';
//       }
//     }
//     return output;
// }
// const object = {society: "Earth Perfect" };
// const objectInput = findAddress(object);
// console.log(objectInput);


// //fifth task
// function canPay(changeArray, totalDue){
//     let changeSum = 0;
//     for (let i = 0; i < changeArray.length; i++) {
//         changeSum += changeArray[i]
//     }
//     let returnValue = null;

//     if (changeArray.length <= 0) {
//         returnValue = "The array is empty";
//     } 
//     else if (changeSum >= totalDue) {
//         returnValue = true;
//     } 
//     else if (changeSum < totalDue) {
//         returnValue = false;
//     }
//     return returnValue;
// }
// const arrayNumberInput =canPay([7,4], 10);
// console.log(arrayNumberInput);


function findAddress(obj){
    if(typeof obj !== "object"){
        return "invalid"
    }
    else{
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__";
        return(street+","+house+","+society);
    }
}
const objInput = {
    street:10,
    // house:"15A",
    society:"Earth Perfect"
}
const objOutput = findAddress(objInput);
console.log(objOutput);

