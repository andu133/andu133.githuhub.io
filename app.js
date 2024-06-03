let tg = window.Telegram.WebApp;

tg.expand();
tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

function sessionStorageGet(key) {
    try {
      return JSON.parse(window.sessionStorage.getItem('__telegram__' + key));
    } catch (e) {}
    return null;
  }

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function(){
        var storedParams = sessionStorageGet('initParams');
        tg.MainButton.hide();
        p.innerText = storedParams;

});



// Отправка данных при нажатии на кнопку
// Обновление данных в usercard
let usercard = document.getElementById("usercard");
let p = document.createElement("p");
p.innerText = `${tg.initData}`;
usercard.appendChild(p);
