const nums = [10 , 20 , 30 , 40]

//now I want to create another array from this array so I use .map() method

//There's also something new called an arrow function that the syntax of its like this
// () => {return blahblahblah} like in const helloWorld = () => {return console.log("Hello World")}

//here we have it much more simpler and it's just the prop that we need

const doubled = nums.map(x => x * 2)
console.log(doubled)

const names = ["alex","reza","emjay","adam"]
const namesCaped = names.map(name => name[0].toUpperCase() + name.slice(1))
console.log(namesCaped)

//in React we can use this method to work with databases because it can make new arrays from new data like in this example



