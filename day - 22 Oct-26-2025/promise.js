/*
console.log("Kotha debar age!");
const kothaDilam = () => {
    console.log("Koitha Rakhbona");
}
setTimeout(kothaDilam, 3000);
console.log("Kotha debaar pore");
*/

const myPromise = new Promise((resolve, reject) => {
    const success = true;
    const waitFunc = s => {
        if (s) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected!");
        }
    }
    setTimeout(() => waitFunc(success), 2000);
});

myPromise
    .then((message) => {
        console.log(message);
        return `1st then: ${message}`;
    }).then((newMessage) => {
        console.log(newMessage);
    })
    .catch((error) => {
        console.error(error);
    });

  