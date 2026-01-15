// 1. Basic Object Creation
// Task:Create an object named laptop with properties:
// ● brand → "Dell"
// ● price → 55000
// ● isAvailable → true
// Then, print all its properties.
let laptop={"brand":"Dell", "price": 55000, "isAvailable": true};
console.log(laptop);

// 2. Modify and Delete Properties
// Task:
// Create an object named employee with:
// { name: "John", position: "Developer", salary: 50000 }
// ● Update the salary to 60000
// ● Add a new property department → "IT"
// ● Delete the position property
// Finally, log the updated object.
let employee={ name: "John", position: "Developer", salary: 50000 }
employee.salary=60000;
employee.department="IT";
delete employee.position;
console.log(employee);

// 3. Nested Object Access
// Task:
// Given:
// let user = {
// name: "Anita",
// contact: {
// email: "anita@example.com",
// phone: "9876543210"
// }
// };
// Print Anita’s email and phone using dot notation
let user = {
name: "Anita",
contact: {
email: "anita@example.com",
phone: "9876543210"
}
};
console.log(user.contact.email);
console.log(user.contact.phone);


// 4. Create an object:
// let movie = { title: "Inception", year: 2010, rating: 8.8 };
// ●Convert it to JSON string using JSON.stringify()
// Then, convert the JSON string back to an object using JSON.parse()
// Finally, print the movie title from the parsed object.
let movie = { title: "Inception", year: 2010, rating: 8.8 };
let jsonString = JSON.stringify(movie);
let jsonParse=JSON.parse(jsonString);
console.log(jsonParse.title);