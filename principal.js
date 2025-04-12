let slideElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-pass");

let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
let novaSenha= "";

sizePassword.innerHTML = slideElement.value;
slider.oninput= function(){
    sizePassword.innerHTML= this.value;
}

function generatePass(){
    let pass= "";
    for(let i = 0, n = charset.length; i < slideElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random()*n))
    }
    containerPassword.classList.remove("hide");
    containerPassword.style.display = "block";
    password.innerHTML = pass;
    novaSenha = pass;

}

function copyPass(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha);
}