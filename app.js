let tg = window.Telegram.WebApp;

tg.expand();



Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initData}${tg.initData}`;

usercard.appendChild(p);
p.innerText = `TEST`;
usercard.appendChild(p);

p.innerText = `${tg.initData}`;
usercard.appendChild(p);
