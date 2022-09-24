export const generateRandomNumber = function (minimum, maximum){
    return Math.floor(Math.random() * (maximum - minimum)) + minimum
}

console.log(`From Utility File ${generateRandomNumber(10,100)}`);