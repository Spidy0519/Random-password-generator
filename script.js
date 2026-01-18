const passwordInput=document.querySelector(".password-box input"),
    copyImage=document.querySelector(".password-box img"),
    rangeInput=document.querySelector(".range-box input"),
    sliderNumber=document.querySelector(".range-box .slider-number"),
    generateButton=document.querySelector(".generate-button");

let allCharacters ="qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890!@#$%^&*()_+{}|:<>?/.,';[]=-`~";


const generatePassword=()=>{
    let newPassword="";

    for (let i=0;i<rangeInput.value;i++){
        let randomNumbers=Math.floor(Math.random()*allCharacters.length);
        newPassword+=allCharacters[randomNumbers];
        
    }
    passwordInput.value=newPassword;
    copyImage.src="icon.png";
};

rangeInput.addEventListener("input",() =>{
    sliderNumber.innerText= rangeInput.value;
    generatePassword();
});

copyImage.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyImage.src="icon2.png";
});

generatePassword();
generateButton.addEventListener("click",generatePassword);