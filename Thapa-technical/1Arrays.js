// Traversal of Array

// const names = ["rudra", "sham", "arav", "arohi"];

// for (let i = 0; i <=names.length; i++) {
//   console.log(names[i]);
// }

// for(let ele in names){
//   console.log(ele);
// }
// for (let ele of names) {
//   console.log(ele);
// }

// names.forEach((function(ele,idx,array){
//   console.log("This " +  ele + " is present in index of " + idx + " in this array " +array);
// }));

// names.forEach( (ele, idx, array)=> {
//   console.log(
//     "This " + ele + " is present in index of " + idx + " in this array " + array
//   );
// });

//Searching of element in Array

const names = ["rudra", "shami", "arav", "arohi", "sham"];

// indexOf searches from start
// console.log(names.indexOf("ram"));
// console.log(names.indexOf("arohi"));
// console.log(names.indexOf("sham"));

// lastIndexOf searches from last returns the index of starting only example below shami index is 1 it seraches from last and gives same index
// console.log(names.lastIndexOf("shami"));
// console.log(names.lastIndexOf("ram"));
// console.log(names.lastIndexOf("shami"));

//includes returns boolean (true or false )
// console.log(names.includes("rudra"));
// console.log(names.includes("ram"));

//find and findIndex
// console.log(
//   names.find((ele) => {
//     if (ele == "arav") {
//       return ele;
//     } else {
//       return 0;
//     }
//   })
// );

// const numbers = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];

// console.log(numbers.find((ele)=>{
//   return (ele < 5);
// }));
// console.log(
//   numbers.find((ele) => {
//     return ele < 5 && ele > 2;
//   })
// );

// console.log(
//   numbers.findIndex((ele) => {
//     return ele < 5;
//   })
// );
// console.log(
//   numbers.findIndex((ele) => {
//     return ele < 5 && ele > 2;
//   })
// );

// sorting methods

// let vowels = ["i", "a", "o", "e", "u"];
// console.log(vowels.sort());

// to sort numbers
// const numbers = [121, 111, 109, 22, 78, 13, 97, 43, 61, 45];
// console.log(numbers.sort()); gives wrong output

// console.log(numbers.sort((a, b) => a - b)); //ascending sort
// console.log(numbers.sort((a, b) => b - a));// descending sort
// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
// If the result is negative, a is sorted before b.
// If the result is positive, b is sorted before a.
// If the result is 0, no changes are done with the sort order of the two values.

// console.log(
//   numbers.sort((a, b) => {
//     console.log(a - b);
//     return a - b;
//   })
// );

const numbers = [121, 111, 109, 22, 78, 13, 97, 43, 61, 45];

// console.log(numbers.sort(function () {
//   console.log(0.5 - Math.random());
//   return 0.5 - Math.random();
// }));

//push,pop,shift,unshift
// console.log(numbers.push("rudra"));
// console.log(numbers.unshift("arav"));
// console.log(numbers.pop());
// console.log(numbers.shift());

const months = ["rudra", "ram", "sham", "bandh"];
// const idx = months.indexOf("ram");
// const newMonths = months.splice(idx,1,"Ram");
// console.log(newMonths);
// console.log(months);
// const newMonths = months.splice(months.length, 0, "Ram");
// console.log(newMonths);
// console.log(months);

// update the bandh to arohi
// const updateArohi = () =>{
//     const idx = months.indexOf("bandh");
//     if(idx !== -1){
//         months.splice(idx,1,"Arohi")
//     }else{
//         console.error("no data found");
//     }
// };

// updateArohi();
// console.log(months);

// Map Method and filter
// const num = [9, 1, 3, 6, 5, 4, 0];
// console.log(
//   num
//     .map((ele) => {
//       return ele * 2;
//     })
//     .filter((ele) => {
//       return ele > 8;
//     })
// );

//Reduce method
// const num = [9, 1, 3, 6, 5, 4, 0];
// console.log(num.reduce((acc,ele)=>{
//         return acc += ele;
// }));

const num = [9, 1, 3, 6, 5, 4, 0];
// console.log(
//   num
//     .map((ele) => {
//       return ele * 2;
//     })
//     .filter((ele) => {
//       return ele > 8;
//     })
//     .reduce((acc,ele) => {
//       return acc += ele;
//     })
// );


// forEach returns undefined
// num.forEach(function (ele, idx, array) {
//   console.log(ele * 2 + 1, idx);
// });
