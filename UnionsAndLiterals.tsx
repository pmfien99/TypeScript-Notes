// UNIONS
// Expand a value's alloed type to be twp pr mpre possible types.

let mathematics = Math.random() > 0.5
? undefined
: "Mark Markus"; 
// it's type is (string | undefined)

let thinker : string | null = null; 
if (Math.random() > 0.5) {
    thinker = "A Thinker";
}
// In this case it starts of null but is konwn to potentially be a string 

// If you have a value that is of type string and number
// you can use shared methods like .toString 
// but not ones that are only used on one type (like toUpperCase() and .toFixed() )

// NARROWING
// When TSC infers that a value is of a more specific type that what it was defined as

//1) Assignment Narrowing
// When an initial value is given to the variable TSC will understand which type it is

let invent: number | string = "Hey There";
invent.toUpperCase(); // Ok: string 
// invent.toFixed(); won't work for type string 

//2) Conditional Checks 
// if statement checking the variable measn TSC will understand that inside the body the variable must be the same type of the known value 
let test = Math.random() > 0.5
? "This is a Test"
: 51; 

if (test === "This is a Test") {
    test.toUpperCase(); // OK 
}
// test.toUpperCase(); WONT WORK HERE


//LITERALS 

const philo = "Hypatia"; 
// philo is a string but it's TYPE is "Hypatia"
// because it is a constant 
let philo2 = "Hypatia"
// this is a TYPE string which represents all possible strings

// You can use literals in union annotations... so this is valid 
let lifespan: number | "ongoing" | "uncertain";
lifespan = 89; // OK
lifespan = "ongoing"; // OK
// lifespan = "test" would not work 

// NOTE ON STRICT NULL CHECK - https://www.youtube.com/watch?v=3_M6DB9tySQ
