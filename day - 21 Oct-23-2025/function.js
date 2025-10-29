function zeba (g = "Oi", n = "Abul") {
    return `${g}, ${n}!`;
    console.log("hu hu ha ha ha");
}

console.log(zeba("Hello", "Orpita"));
console.log(zeba("Hi", "Turza"));
console.log(zeba());
console.log(zeba("Salam"));
console.log(zeba(undefined, "Kalam"));

// Function Expression
const sadia = function (a, b) {
    return a + b;
};
console.log(sadia(5, 10));

// Arrow Function
/*
const nadia = (msg) => {
    return `Hello from Nadia! ${msg}`;
};
*/

const nadia = msg => `Hello from Nadia! ${msg}`;
console.log(nadia("How are you?"));