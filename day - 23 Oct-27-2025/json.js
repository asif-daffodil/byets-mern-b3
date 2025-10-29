const stdList = {
    stdNo1 : "Jeba",
    stdNo2 : "Nadia",
    stdNo3 : "Arpita",
    subjects: ["HTML", "CSS", "JS", "Bootstrap", "TailwindCSS", "React.js", "Node.js", "Express.js", "MongoDB"],
    stdFunc: () => "This is a std function!",
    stdCity : {
        jeba : "Gazipur", 
        nadia: "Barishal",
        arpita: "Faridpur"
    }   
} 

// console.log(stdList.stdNo1 + " " + stdList.stdNo2 + " " + stdList.stdNo3);

// console.log(`${stdList.stdNo1} ${stdList.stdNo2} ${stdList.stdNo3}`);
console.log(stdList["stdNo1"]);
console.log(stdList.stdNo1);
for(let k in stdList) {
    console.log(stdList[k]);
}

for(let val of stdList.subjects) {
    console.log(val);
}

console.log(stdList.stdFunc());
console.log(stdList.stdCity.nadia);






