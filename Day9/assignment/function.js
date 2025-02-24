//1.
// let x = "5"; 
// let y = 5; 
// console.log(x == y);  
// console.log(x === y); 

//2.
// const words = ["JavaScript", "Programming", "Function", "Hoisting"];
// function findLongestWordLength(arr) {
//     let maxLength = 0;
//     for (let word of arr) {
//       if (word.length > maxLength) {
//       maxLength = word.length;
//     }
//   }
//   return maxLength;
// }
// console.log(findLongestWordLength(words));

//3. 
// function testScope() { 
// if (true) { 
// var a = 1️0; 
// let b = 2️0; 
// const c = 3️0; 
// } 
// console.log(a); 
// console.log(b); 
// console.log(c); 
// } 
// testScope();

//4.
// const name = "John";  

// function greet() { 
//   if (true) { 
//     const message = "Hello " + name;  
//     console.log(message);  
//   }
// }
// greet();

//5.
// const multiply = (a, b) => a * b;

//6.
// const obj = { 
//     name: "Alice", 
//     sayHello: function() { 
//       setTimeout(() => { 
//         console.log("Hello, " + this.name); 
//       }, 1000); 
//     } 
//   }; 
//   obj.sayHello();

//7.
// console.log(a); 
// var a = 10;; 
// console.log(b); 
// let b = 20;

// 8.
// var double = function(n) { 
//     return n * 2; 
//   };
  
//   console.log(square(5));
  
//   console.log(double(4)); 
  
//   function square(n) { 
//     return n * n; 
//   }

//9.
// console.log(5 + "5");  
// console.log(5 - "3");  
// console.log(5 * "2");  
// console.log("10" / 2); 
// console.log(10 % "3");

//10.
// let x = 10;
// x += 5;
// x *= 2;
// x -= 3;
// x /= 2;

//11.
// console.log(5 > 3 && 10 < 20); 
// console.log(5 > 3 || 10 > 20); 
// console.log(!(5 > 3)); 
//12.
// function sum(a, b, c = 5) { 
//     return a + b + c; 
//     } 
//     console.log(sum(2, 3));  
//     console.log(sum(2, 3, 10));
//13.
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sum(1, 2, 3));         
  console.log(sum(5, 10, 15, 20));  
  console.log(sum(100, 200));      
  console.log(sum(7));               
  console.log(sum());                
    





  
