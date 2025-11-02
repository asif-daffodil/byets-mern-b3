let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');
let resetBtn = document.getElementById('resetBtn');
let heading = document.querySelector("#todoNum");

let au1 = document.getElementById('au1');
let au2 = document.getElementById('au2');
let au3 = document.getElementById('au3');


let count = 0;
let cls;

startBtn.onclick = ()=> {
    cls = setInterval(()=> {
        if(count<=5){
            heading.innerHTML = count;
            count++;
            au1.play();

        }else{
            count = 0;
            au3.play();
            clearInterval(cls)
            heading.innerHTML = count;
        }
    },1000)
    
    startBtn.innerHTML = "Start";
    
}

pauseBtn.onclick = ()=> {
    au2.play();
    clearInterval(cls);
    startBtn.innerHTML = "Resume";
}

resetBtn.onclick = ()=> {
    au3.play();
    clearInterval(cls);
    count = 0;
    startBtn.innerHTML = "Start";
    heading.innerHTML = count;

}
