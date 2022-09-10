var age = 10
var salary = 15.00

// console.log(`variable type of age is ${typeof age}`);
// console.log(`variable type of salary is ${typeof salary}`);

// var name ='John Smith'
// console.log(`variable type of name is is ${typeof name}` );

const displayGreeting = function (name ,year) {
    console.log(`Happy new Year ${year} ${name}`);
}
// console.log(`variable type of displayGreeting is is ${typeof displayGreeting}` );

const displayGreetingWithEmoji = function (name ,year){
    console.log(`:-) :-) Happy new Year ${year} ${name} :-) :-)`);
}

const greet = function(name, year ,func){
    func(name,year)
} 

greet('Sam',2022 , displayGreetingWithEmoji)
greet('Jane', 2022 ,displayGreeting)