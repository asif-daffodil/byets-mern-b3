const head = document.querySelectorAll(".head");
const details = document.querySelectorAll(".details");

head.forEach((h, i) => {
    h.addEventListener('click', () => {
        head.forEach((head, ind) => {
            if(i == ind) {
                head.classList = "head border-b p-3 font-bold text-xl cursor-pointer bg-black text-white relative before:content-['-'] before:absolute before:h-full before:aspect-square before:text-white before:top-0 before:right-0 before:grid before:place-items-center";
                details[ind].classList = "details px-3 py-3 max-h-max overflow-hidden transition-all duration-500";
            }else{
                head.classList = "head border-b p-3 font-bold text-xl hover:bg-gray-300 cursor-pointer relative before:content-['+'] before:absolute before:h-full before:aspect-square before:text-black before:top-0 before:right-0 before:grid before:place-items-center";
                details[ind].classList = "details px-3 py-0 max-h-0 overflow-hidden transition-all duration-500";
            }
        })
    })
})