const jsForm = document.querySelector("#jsForm");
const countries = document.querySelector("#countries");

const genders = ["Male", "Female", "Others"];
const skillsArr = ["HTML", "CSS", "JS", "React.js", "Express.js", "MongoDB"];

const err = document.querySelectorAll(".err");
err.forEach(e => {
    e.style.cssText = `
        color: red;
        font-size: 14px;
        font-style: italic;
        margin-bottom: 6px;
        margin-top: 2px
    `
});
const errName = document.querySelector(".errName");
const errEmail = document.querySelector(".errEmail");
const errPass = document.querySelector(".errPass");
const errCpass = document.querySelector(".errCpass");
const errGender = document.querySelector(".errGender");
const errSkills = document.querySelector(".errSkills");
const errCountry = document.querySelector(".errCountry");

const createOption = (val) => {
    const option = document.createElement("option");
    option.setAttribute("value", val);
    option.textContent = val;
    countries.appendChild(option);
}

let data;
const getCountry = async () => {
    const res = await fetch("./js/countries.json");
    data = await res.json();
    data.forEach(d => {
        createOption(d.name);
    });
}

getCountry();

jsForm.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(jsForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const pass = formData.get("pass");
    const cPass = formData.get("cPass");
    const gender = formData.get("gender");
    const skills = formData.getAll("skills[]");
    const country = formData.get("country");

    if (!name) {
        errName.textContent = "Please provide you name";
    }else if(!/^[A-Za-z. ]*$/.test(name)) {
        errName.textContent = "Invalid name formate";
    }else{
        errName.textContent = "";
    }

    if (!email) {
        errEmail.textContent = "Please provide you email address";
    }else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        errEmail.textContent = "Invalid email address";
    }else{
        errEmail.textContent = "";
    }

    if (!pass) {
        errPass.textContent = "Please provide the password";
    }else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>\/?]).{8,}$/.test(pass)){
        errPass.textContent = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    }else{
        errPass.textContent = "";
    }
    
    if (!cPass) {
        errCpass.textContent = "Please confirm the password";
    }else if (pass !== cPass) {
        errCpass.textContent = "Please didn\'t matched";
    }else{
        errCpass.textContent = "";
    }

    if(!gender){
        errGender.textContent = "Please select your gender";
    }else if(genders.indexOf(gender) == -1){
        errGender.textContent = "Invalid Gender";
    }else{
        errGender.textContent = "";
    }

    if(skills.length == 0){
        errSkills.textContent = "Please select your skill";
    }else{
        if(skills.filter(item => !skillsArr.includes(item)).length > 0){
            errSkills.textContent = "Paknami bondho korun";
        }else{
            errSkills.textContent = "";
        }
    }

    if(!country){
        errCountry.textContent = "Please select your country";
    }else if(!data.find(f => f.name == country)){
        errCountry.textContent = "Invalid country";
    }else{
        errCountry.textContent = "";
    }
})

const showPass = document.querySelector("#showPass")
const pass = document.querySelector("#pass")
const cPass = document.querySelector("#cPass")

showPass.addEventListener("change", e => {
    if(e.target.checked){
        pass.setAttribute("type", "text");
        cPass.setAttribute("type", "text");
    }else{
        pass.setAttribute("type", "password");
        cPass.setAttribute("type", "password");
    }
})

