//эхо-сервер
const buttonEnter = document.querySelector('.message_enter');
const inputMessage = document.querySelector('#message_text');
const chatContainer = document.querySelector('.chat');

//геолокация
const buttonGeo = document.querySelector('.geo')



//чат с эхо-сервером
const wsUrl = 'wss://echo-ws-service.herokuapp.com';

let websocket;
websocket = new WebSocket(wsUrl);
websocket.onopen = function(event) {
  getMessage("Соединение открыто")
};
websocket.onmessage = function(event) {
  getMessage(`Получено сообщение от сервера: ${event.data}`);
};
websocket.onclose = function(event) {
  getMessage("Соединение закрыто");
};
websocket.onerror = function(event) {
  getMessage(`Ошибка соединения: ${event.data}`);
};

function getMessage(message) {
    let pre = document.createElement("p");
    pre.classList.add('messageGet')
    pre.innerHTML = message;
    chatContainer.appendChild(pre);
  };

  function sendMessage(message) {
    let pre = document.createElement("p");
    pre.classList.add('messageSend')
    pre.innerHTML = message;
    chatContainer.appendChild(pre);
  };


  buttonEnter.addEventListener('click', () =>{
    let message = inputMessage.value;
    sendMessage(message);
    websocket.send(message);
    })

//кнопка гео
const error = () => {
  getMessage('Не удалось получить гео-локацию');
};

const success = (position) => {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  getMessage(`Широта: ${latitude} °, Долгота: ${longitude} °`);
  getMessage(`<a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}">Ссылка на карту</a>`);
};

buttonGeo.addEventListener('click', () => {
  if (!navigator.geolocation) {
    error()
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }

})