const people = [
    {
      name: 'Ben',
      age: 30,
      occupation: 'Banker',
      salary: 3000,
      pets: []
    },
    {
      name: 'Jane',
      age: 26,
      occupation: 'Teacher',
      salary: 1200,
      pets: ['dog']
    },
    {
      name: 'John',
      age: 31,
      occupation: 'Developer',
      salary: 4000,
      pets: ['dog', 'cat']
    },
    {
      name: 'Mike',
      age: 26,
      occupation: 'Developer',
      salary: 5000,
      pets: []
    },
    {
      name: 'Tom',
      age: 34,
      occupation: 'Teacher',
      salary: 3400,
      pets: ['dog', 'parrot']
    }
  ];

  // task #1
  let SUM=0
  people.forEach(obj => SUM+=obj.salary)
  console.log(SUM)
  // task #2
   
//   let newArr= people.forEach(obj => (obj.occupation ==='Developer') ? obj.salary *=2 :  false)
  

 
//  console.log(newArr)


//task #3 
const result = people.filter(obj=> obj.pets.length >= 1)
console.log(result)

//task #4

const results=people.every(obj=> obj.pets.length >= 1 )
console.log(results)

//task #5 
const Results=people.some(obj=> obj.pets.length >= 1 )
console.log(Results)






