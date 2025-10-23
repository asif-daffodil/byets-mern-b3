const totalClass = 50;
if (totalClass > 20 && totalClass <= 30) {
    console.log("1/3rd class has been finished!");
}else if(totalClass > 30 && totalClass <= 40){
    console.log("50% class has been finished!");
}else if(totalClass > 40 && totalClass <= 60){
    console.log("2/3rd class has been finished!");
}else{
    console.log("Ajke jatio nirapod shorok dibos");
}

const pa = 18;
const pg = "Female";

if (pg === "Male") {
    if(pa >= 21){
        console.log("The person is eligible for marriage");
    }else{
        console.log("The person is not eligible for marriage");
    }
}else{
    if(pa >= 18) {
        console.log("The person is eligible for marriage");
    }else{
        console.log("The person is not eligible for marriage");
    }
}

// Electric bill calculation (For first 50 units – 3.50 tk/unit For next 100 units – 4.00 tk/unit For next 100 units – 5.20 tk/unit For units above 250 – 6.50 tk/unit)

const unit = 40;
let totalBill = 0;

if (unit <= 50) {
    totalBill = unit * 3.50; 
    console.log(`Total bill is ${totalBill}`);
}else if (unit <= 150) {
    totalBill = (50 * 3.50) + ((unit - 50) * 4); 
    console.log(`Total bill is ${totalBill}`);
}else if (unit <= 250) {
    totalBill = (50 * 3.50) + (100 * 4) + ((unit - 150) * 5.20); 
    console.log(`Total bill is ${totalBill}`);
}else {
    totalBill = (50 * 3.50) + (100 * 4) + (100 * 5.20) + ((unit - 250) * 6.50); 
    console.log(`Total bill is ${totalBill}`);
}


