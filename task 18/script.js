// Ques 1
// const marks = [ 30,40,50,60,70];
// const squares = marks.map(mark => mark * mark);
// console.log(squares);

// Ques2
// function grades(score){
//     return score >= 90 ? 'A':
//         score >= 80 ? 'B':
//         score >= 70 ? 'C':
//         score >= 60 ? 'D':
//                        'F';
// }
// console.log(grades(50));

// Ques3
// let car ={
//     name: 'BmW',
//     model: 'X5',
//     year: 2002
// };

// function changeCarYear(carObj,newYear){
//     carObj.year = newYear;
// }
// function printCarDetails({model,year}){
//     console.log(`Model: ${model} , Year: ${year}`);
// }
// console.log("Original : ");
// printCarDetails(car);

// console.log("Updated : ");
// changeCarYear(car,2009);
// printCarDetails(car);

// Ques4
// const arr = [1,2,3,4,5,6,7,8,9,10];
// const arr2 = arr.filter(num => num % 2 == 0);
// console.log(arr2);

// Ques5
// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(num => num * num);
// const evens = numbers.filter(num => num % 2 == 0);
// const sum = squares.reduce((acc, cur) => acc + cur, 0);
// console.log(squares);
// console.log(evens);
// console.log(sum);

// Ques6
// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// fetchData();

// Ques 7
// const person = {
//     name: 'Jane Smith',
//     address: {
//         street: '456 Elm St',
//         city: 'Othertown',
//         country: 'Canada'
//     },
//     contact: {
//         email: 'jane@example.com',
//         // No 'phone' property here
//     }
// };

// const phoneNumber = person.contact?.phone;
// console.log(phoneNumber);






