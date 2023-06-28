const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    //greeting.innerText = "Hello " + username + " nice to meet you";
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `반갑습니다. ${username}님 `;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
}


const savedUsername = localStorage.getItem(USERNAME_KEY)
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    paintGreetings(savedUsername)

}