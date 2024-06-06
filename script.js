const tg = window.Telegram.WebApp;
const codeInput = document.getElementById("codeInput");
const errorMessage = document.getElementById("errorMessage");
const accept = document.getElementById("accept");
let inputValue;

document.addEventListener("DOMContentLoaded", function () {
  codeInput.addEventListener("input", function () {

    const cleanedValue = this.value.replace(/\D/g, "");
    if(this.value)
    console.log(this.value);
    // Валидация на наличие только цифр
    if(!this.value){
      errorMessage.style.display = "block";
      accept.disabled = true;
      errorMessage.textContent = "Поле не должно быть пустым*";
    } else if (!/^\d*$/.test(this.value)) {
      errorMessage.style.display = "block";
      accept.disabled = true;
      errorMessage.textContent = "Введите только цифры*";
    } else {
      errorMessage.style.display = "none";
      inputValue = cleanedValue;
      accept.disabled = false;
      errorMessage.textContent = "";

    }
  });

  accept.addEventListener("click", function () {
    console.log(inputValue);
  })
});

// tg.expand();
// tg.MainButton.textColor = '#FFFFFF';
// tg.MainButton.color = '#2cab37';

// let item = "";

// function sessionStorageGet(key) {
//     try {
//       return JSON.parse(window.sessionStorage.getItem('__telegram__' + key));
//     } catch (e) {}
//     return null;
//   }

// let btn1 = document.getElementById("btn1");

// btn1.addEventListener("click", function(){
//         var storedParams = sessionStorageGet('initParams');
//         tg.MainButton.hide();
//         p.innerText = storedParams;

// });

// // Отправка данных при нажатии на кнопку
// // Обновление данных в usercard
// let usercard = document.getElementById("usercard");
// let p = document.createElement("p");
// p.innerText = `${tg.initData}`;
// usercard.appendChild(p);
