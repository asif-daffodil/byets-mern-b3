let n = 0;
while (n <= 10) {
    console.log(n);
    n += 1;
}

let year = 2000;
while(year <= 2100) {
    if(year % 400 == 0) {
        console.log(year);
    }else if(year % 100 == 0){
        year++;
        continue;
    }else if(year % 4 == 0) {
        console.log(year);
    }
    year++;
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let g = 399;
for (let i = 1; i <= 10; i++) {
    console.log(`${g} x ${i} = ${g * i}`);
    // console.log(g + " x " + i + " = " + g * i);
}

