// Select element with ID
const myDiv = document.getElementById("myDiv");
// myDiv.innerHTML = "<b>The text is given by JS</b>";
// myDiv.innerText = "The text is given by JS";
myDiv.textContent = "The text is given by JS";


// Select Element with Class
const myClass = document.getElementsByClassName("myClass")[0];
myClass.textContent = "This is a demo text for myClass";

// Select Element by tag name
const p = document.getElementsByTagName("p")[0];
p.textContent = "This is a other demo text from js";
p.addEventListener("click", () => alert("Paragraph is clicked!"));

const myOtherDiv = document.querySelector("#myOtherDiv");
myOtherDiv.textContent = "This is a demo text for my other div";
myOtherDiv.addEventListener("mouseover", () => {
    myOtherDiv.textContent = "It\'ll change the text!";
});
myOtherDiv.addEventListener("mouseout", () => {
    myOtherDiv.textContent = "This is a demo text for my other div";
});


// const myOtherClass = document.querySelector(".myOtherClass");
const myOtherClass = document.querySelectorAll(".myOtherClass")[0];
myOtherClass.innerHTML = "This is a demo text for my other class";

myOtherClass.addEventListener("mouseover", () => {
    myOtherClass.style.color = "red";
    myOtherClass.style.fontSize = "24px";
    myOtherClass.style.fontStyle = "italic";
})

myOtherClass.addEventListener("mouseout", () => {
    myOtherClass.style.color = "black";
    myOtherClass.style.fontSize = "16px";
    myOtherClass.style.fontStyle = "normal";
})

const dhaka = document.getElementById("dhaka");
dhaka.textContent = "Dhaka is the capital of Bangladesh...";
dhaka.style.cssText = `
    color: blue;
    font-style: italic;
    font-family: arial;
    text-shadow: 1px 1px 1px #000;
    font-weight: bold;
    letter-spacing: 3px;
    font-variant: small-caps;
    animation: jsAni 2s infinite linear;
`;

const style = document.createElement("style");
style.innerHTML = `
    @keyframes jsAni {
        0% {transform: translateX(0px);}
        50% {transform: translateX(50px);}
        100% {transform: translateX(0px);}
    }
`;
document.head.appendChild(style);

const bd = document.querySelector("#bd");
bd.style.cssText = `
    border: 1px solid #000;
    padding: 10px;
    border-radius: 8px;
    width: 300px;
    background: linear-gradient(to top right, lightgrey, lightblue)
`;
const h1 = document.createElement("h1");
h1.textContent = "This is heading!";
const para = document.createElement("p");
para.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias facere tenetur temporibus fugit quidem obcaecati quis cum optio quos totam rerum magnam, quibusdam aliquid recusandae delectus repellat itaque, quaerat at. Laboriosam ea alias vitae facere in animi quaerat numquam velit?";
const button = document.createElement("button");
button.textContent = "Read more";
bd.appendChild(h1);
bd.appendChild(para);
bd.appendChild(button);

const addPara = document.getElementById("addPara");
const paraList = document.getElementById("paraList");

addPara.addEventListener("click", () => {
    const p = document.createElement("p");
    p.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias facere tenetur temporibus fugit quidem obcaecati quis cum optio quos totam rerum magnam, quibusdam aliquid recusandae delectus repellat itaque, quaerat at. Laboriosam ea alias vitae facere in animi quaerat numquam velit?";
    paraList.appendChild(p);
})

const increment = document.querySelector("#increment");
const num = document.querySelector("#num");
num.textContent = 0;
const decrement = document.querySelector("#decrement");
increment.addEventListener("click", () => {
    let val = parseInt(num.textContent);
    num.textContent = ++val;
})
decrement.addEventListener("click", () => {
    let val = parseInt(num.textContent);
    num.textContent = --val;
})


const bgImg = document.querySelector("#bgImg");
const dhk = document.querySelector("#dhk");
const bd2 = document.querySelector("#bd2");

dhk.addEventListener("click", () => {
    bgImg.src = "./images/dhaka.webp"
})

bd2.addEventListener("click", () => {
    bgImg.src = "./images/bd.jpg"
})