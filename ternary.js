//First I declare a var that I want to be connected to the ternary
const age = 21

//Now I declare another var which will work with the previous one to determine if the condition is truthy or falsy
//Using this statement = (condition ? exprIfTrue : exprIfFalse)
//Now if the age is above 21 it returns "Beer" & if not "Juice" 
const beverage = age >= 21 ? "Beer" : "Juice"

console.log(beverage)