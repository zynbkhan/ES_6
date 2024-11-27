// Question 1
function scopeExample() {
    var varVariable = 'I am a var variable (function scoped)';
    let letVariable = 'I am a let variable (block scoped)';
    const constVariable = 'I am a const variable (block scoped)';
    
    if (true) {
        var varInBlock = 'Var is accessible in the block';
        let letInBlock = 'Let is accessible only within this block';
        const constInBlock = 'Const is also only accessible in this block';
    }
    
    document.write(`Example:
    ${varVariable}, ${letVariable}, and ${constVariable}.
    Note: varVariable is function-scoped, while letVariable and constVariable are block-scoped.<br>`);
}

scopeExample();


// Question 2
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

document.write(double(5) + '<br>'); 
document.write(triple(5) + '<br>'); 


// Question 3
function userInfo({ name, age, country = 'Unknown', city = 'Unknown' }) {
    return `Name: ${name}, Age: ${age}, Country: ${country}, City: ${city}<br>`;
}

const user = { name: 'John', age: 30 };
document.write(userInfo(user));



// Question 4
function calculateTotal(price, ...discounts) {
    let finalPrice = price;
    discounts.forEach(discount => finalPrice -= discount);
    return finalPrice;
}

document.write(calculateTotal(100, 10, 5, 15) + '<br>'); 



// Question 5
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
};

document.write(calculator.add(10, 5) + '<br>'); 
document.write(calculator.subtract(10, 5) + '<br>');



// Question 6
const books = [
    { title: '1984', author: 'George Orwell', yearPublished: 1949 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', yearPublished: 1960 }
];

function logBooks(bookArray) {
    for (let book of bookArray) {
        document.write(`${book.title} by ${book.author}, published in ${book.yearPublished}<br>`);
    }
}

logBooks(books);




// Question 7
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const generator = idGenerator();

document.write(generator.next().value + '<br>'); 
document.write(generator.next().value + '<br>'); 



// Question 8
function add(a, b) {
	return a + b;
  }
  
  function subtract(a, b) {
	return a - b;
  }
  
  function multiply(a, b) {
	return a * b;
  }
  
  function divide(a, b) {
	if (b === 0) {
	  return "Error: Division by zero";
	}
	return a / b;
  }
  
  console.log("Addition: ", add(5, 3));        
  console.log("Subtraction: ", subtract(10, 4));
  console.log("Multiplication: ", multiply(4, 7)); 
  console.log("Division: ", divide(20, 5));    
  console.log("Division by zero: ", divide(10, 0));


  
// Question 9
const student = {
    name: 'John',
    age: 20,
    grade: 'A',
    subjects: ['Math', 'Science']
};

for (let prop in student) {
    document.write(`${prop}: ${student[prop]}<br>`);
}



// Question 10
let numbers = [1, 2, 3, 4];
let squaredNumbers = numbers.map(num => num ** 2);

document.write('Original: ' + numbers + '<br>');
document.write('Squared: ' + squaredNumbers + '<br>');



// Question 11
function operate(a, b, callback) {
    return callback(a, b);
}

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }

document.write(operate(5, 3, add) + '<br>'); 
document.write(operate(5, 3, subtract) + '<br>'); 



// Question 12
setTimeout(() => {
    document.write('Hello, World!' + '<br>');
}, 3000);



// Question 13
const interval = setInterval(() => {
    document.write(new Date().toLocaleTimeString() + '<br>');
}, 2000);

setTimeout(() => {
    clearInterval(interval);
}, 10000);



// Question 14
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received!");
        }, 2000); 
    });
}

fetchData()
    .then(response => {
        document.write(response + "<br>"); 
    })
    .catch(error => {
        document.write("Error: " + error + "<br>"); 
    });



// Question 15
async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received!");
        }, 2000); 
    });
}

async function fetchAndLog() {
    try {
        const response = await fetchData();
        document.write(response + "<br>"); 
    } catch (error) {
        document.write("Error: " + error + "<br>"); 
    }
}

fetchAndLog();



// Question 16
function power(base, exponent) {
    return base ** exponent;
}

document.write(power(2, 3) + '<br>'); 


// Question 17
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    speak() {
        document.write(`${this.name} says Woof!<br>`);
    }
}

const dog = new Animal('Dog', 'Canine');
dog.speak();





// Question 18
function checkEvenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
}

document.write(checkEvenOrOdd(4) + '<br>'); 
document.write(checkEvenOrOdd(7) + '<br>'); 


// Question 19
const users = {
    name: 'John',
    address: {
        city: 'New York'
    }
};

document.write(users.address?.city + '<br>'); 



