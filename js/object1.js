// // ✅Basics + Control Flow (1–5)
// // 1. Even or Odd Number
// // Write a program to check if a number is even or odd using if-else.
// let num=7;
// if(num%2==0){
//     console.log(num+" is even");
// }
// else{
//     console.log(num+ " is odd");
// }

// // 2. Largest of Three Numbers
// // Take 3 numbers as input and print the largest one using conditional statements.
// let a=10, b=25, c=15;
// if(a>=b && a>=c){
//     console.log(a+" is the largest number");
// }
// else if(b>=a && b>=c){
//     console.log(b+" is the largest number");
// }
// else{
//     console.log(c+" is the largest number");
// }

// // 3. Grade Calculator
// // Given a student’s marks, print grade:
// // ● ≥90 → A
// // ● ≥75 → B
// // ● ≥50 → C
// // ● Otherwise → Fail
// let grad=78;
// if(grad>=90){
//     console.log("A");
// }
// else if(grad>=75){
//     console.log("B");
// }
// else if(grad>=50){
//     console.log("C");
// }
// else{
//     console.log("Fail");
// }

// // 4. FizzBuzz Problem
// // Print numbers from 1 to 50:
// // ● For multiples of 3 → “Fizz”
// // ● For multiples of 5 → “Buzz”
// // ● For multiples of both → “FizzBuzz”
// for(let i=1; i<=50; i++){
//     if(i%3==0 && i%5==0){
//         console.log("FizzBuzz");
//     }
//     else if(i%3==0){
//         console.log("Fizz");
//     }
//     else if(i%5==0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }
// }

// // 5. Palindrome String
// // Check if a given string (e.g., "madam") is a palindrome using loops and conditionals.
// let str="madam", pal="";
// let len=str.length;
// for(let i=len-1; i>=0; i--){
//     pal+=str[i];
// }
// if(str==pal){
//     console.log(str+ " is palindrome");
// }
// else {
//     console.log(str+" is not palindrome");
// }

// // ✅Arrays (6–10)
// // 6. Sum of Array Elements
// // Find the sum of all elements in [2, 4, 6, 8, 10].
// let arr=[2,4,6,8,10];
// let sum=0;
// for(let i=0; i<=arr.str(); i++){
//     sum+=arr[i];
// }

// // 7. Maximum Element in Array
// // Find the largest number in an array without using Math.max().
// let arr1=[1,4,3,2,7,6,9,8,8,55,2,45];
// let sum1=0, max=arr1[0];
// for(let j=0; j<=arr1.str(); j++){
//     if(arr1[j]>=max){
//         max=arr1[j];
//     }
//     console.log(max);
// }

// // 8. Reverse an Array
// // Reverse [1, 2, 3, 4, 5] without using .reverse().
// let s=[1,2,3,4,5], s1=[];
// for(let k=s.length-1; k>=0; k--){
//     s1.push(s[k]);
// }
// console.log(s1);

// // 9. Remove Duplicates
// // From [1, 2, 2, 3, 4, 4, 5] → get [1, 2, 3, 4, 5].
// let arr2=[1,2,2,3,4,4,5], arr2_unique=[];
// for(let l=0; l<arr2.length; l++){
//     if(arr2_unique.indexOf(arr2[l])===-1){
//         arr2_unique.push(arr2[l]);
//     }
// }
// console.log(arr2_unique);

// // 10. Second Largest Element
// // Find the second largest number in [10, 20, 4, 45, 99].
// let x=[10, 20, 4, 45, 99];
// let m=x[0];
// let sm=m;
// for(let d=0; d<x.length; d++){
//     if(x[d]>m){
//         sm=m;
//         m=x[d];
//     }
//     else if(x[d]>sm && x[d]<m){
//         sm=x[d];
//     }
// }
// console.log("Second largest element is: " + sm);

// // ✅Functions + Arrays + Loops (11–15)
// // 11. Factorial of a Number
// // Function factorial(n) → returns factorial using loop.
// function factorial(n){
//     let fact=1;
//     for(let i=1; i<=n; i++){
//         fact*=i;
//     }
//     return fact;
// }
// // 12. Count Vowels in String
// // Function countVowels(str) → returns number of vowels.
// function countVowels(str){
//     let count=0;
//     for(let i=0; i<str.length; i++){
//         if("aeiouAEIOU".indexOf(str[i])!==-1){
//             count++;
//         }
//     }
//     return count;
// }

// // 13. Check Prime Number
// // The function isPrime(n) → returns true if the number is prime.
// function isPrime(n){
//     if(n<=1) return false;
//     for(let i=2; i<=Math.sqrt(n); i++){
//         if(n%i===0) return false;
//     }
//     return true;
// }

// // 14. Array Rotation
// // Function rotateArray(arr, k) → rotates array by k positions.
// // Example: [1,2,3,4,5], 2 → [3,4,5,1,2].[4,5,1,2,3]
// let rotateArray = (arr, k) => {
//     k = k % arr.length;
//     let rotated = arr.slice(k).concat(arr.slice(0, k));
//     return rotated;
// };

// 15. Frequency Counter
// Function countFrequency(arr) → returns an object with frequency of each element.
// Example: [1,2,2,3] → {1:1, 2:2, 3:1}.
function countFrequency(arr) {
    let freq = {};
    for (let item of arr) {
        if (freq[item]) {
            freq[item]++;   
        } else {
            freq[item] = 1; 
        }
    }
    return freq;
}
console.log(countFrequency([1,2,2,3,8,9,9]));
