const time = document.querySelector("#time");
const tarikh = document.querySelector("#tarikh");
const week = document.querySelector("#week");


const getTime = () => {
    const d = new Date();
    const h = String(d.getHours()).padStart(2, 0);
    const m = String(d.getMinutes()).padStart(2, 0);
    const s = String(d.getSeconds()).padStart(2, 0);
    const ampm = Number(h) >= 12 ? "PM":"AM";
    time.textContent = `${h}:${m}:${s} ${ampm}`;
    const mo = d.toLocaleString("en-US", {month: "short"});
    const da = String(d.getDate()).padStart(2, 0);
    const y = d.getFullYear();
    const bar = d.getDay();
    for (let i = 0; i < 7; i++) {
        if(i === parseInt(bar)){
            week.children[i].classList.add("bg-red-600", "font-bold", "text-white", "border-blue-600", "border-4");
        }else{
            week.children[i].classList.remove("bg-red-600", "font-bold", "text-white", "border-blue-600", "border-4");
        }
    }

    tarikh.textContent = `${mo}-${da}-${y}`;

}
setInterval(getTime, 1000);