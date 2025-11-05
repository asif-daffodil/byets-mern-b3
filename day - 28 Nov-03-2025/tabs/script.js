const headings = document.querySelector(".headings");
const details = document.querySelector(".details");
const headingChildren = Array.from(headings.children);
const detailsChildren = Array.from(details.children);

headingChildren.forEach((head, ind) => {
    head.addEventListener("click", () => {
        headingChildren.forEach((h, i) => {
            if(i === ind){
                if(headingChildren.length - 1 > i){
                    h.classList = "w-full text-center text-xl py-2 border-r cursor-pointer bg-gray-300 font-bold";
                }else{
                    h.classList = "w-full text-center text-xl py-2 cursor-pointer bg-gray-300 font-bold";
                }
                detailsChildren[i].classList = "p-3 italic bg-gray-300 transition-all duration-300";
            }else{
                if(headingChildren.length - 1 > i){
                    h.classList = "w-full text-center text-xl py-2 border-b border-r hover:bg-gray-200 cursor-pointer";
                }else{
                    h.classList = "w-full text-center text-xl py-2 border-b hover:bg-gray-200 cursor-pointer";
                }
                detailsChildren[i].classList = "hidden p-3 italic bg-gray-300 opacity-0 transition-all duration-300";
            }
        })
    });
});