// Q Find the Average Age
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 },
    { name: 'David', age: 28 },
  ]; 
 function  findAvgAge(people) {
    let totalAge=0;
        for (let i=0 ;i<people.length;i++){
            totalAge+=people[i].age
        }
        return totalAge/people.length; 
 }
 console.log(findAvgAge(people));


//  Question: Count the Number of Names Starting with "A"
const names = ["Alice", "Bob", "Anna", "Alex", "Charlie", "Amanda"];
let count=0;
for(i=0;i<names.length;i++){
    if(names[i][0]==="A"){
        count++;
    }
}
console.log(count);

// Q Find the Two Numbers with the Maximum Sum const numbers = [10, -2, 8, 15, -5, 20, 3];?