let tg = window.Telegram.WebApp;

document.addEventListener('DOMContentLoaded', function() {
  const btnAccept = document.getElementById('btnAccept');
  const btnCancel = document.getElementById('btnCancel');
  const codeInput = document.getElementById('codeInput');

  btnAccept.addEventListener('click', function() {
      const code = codeInput.value;
      if (code) {
        tg.sendData(code); // отправляем данные в бота
        tg.close()
      } else {
          alert("Пожалуйста, введите код.");
      }
  });

  btnCancel.addEventListener('click', function() {
    tg.close(); // закрываем мини-приложение
  });
});
