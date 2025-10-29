const herPromise = new Promise((resolve, reject) => {
    const success = true;
    const resReturnFunc = s => s === true ? resolve("She kept her promise"): reject("She didn\'t kept her promise");
    setTimeout(() => resReturnFunc(success), 5000);
});

const myJob = async () => {
    const herRes = await herPromise;
    console.log(herRes);
}

myJob();

