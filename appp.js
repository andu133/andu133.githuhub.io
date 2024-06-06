let tg = window.Telegram.WebApp;

tg.expand();
tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';


let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function(){



});



// Отправка данных при нажатии на кнопку
// Обновление данных в usercard
let usercard = document.getElementById("usercard");
let p = document.createElement("p");
p.innerText = `${tg.initData}`;
usercard.appendChild(p);
