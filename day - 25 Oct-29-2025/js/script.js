const jsForm = document.querySelector("#jsForm");
const countries = document.querySelector("#countries");
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
    }

    if (!email) {
        errEmail.textContent = "Please provide you email address";
    }

    if (!pass) {
        errPass.textContent = "Please provide the password";
    }

    if (!cPass) {
        errCpass.textContent = "Please confirm the password";
    }

    if(!gender){
        errGender.textContent = "Please select your gender";
    }

    if(skills.length == 0){
        errSkills.textContent = "Please select your skill";
    }

    if(!country){
        errCountry.textContent = "Please select your country";
    }

    
    
})

