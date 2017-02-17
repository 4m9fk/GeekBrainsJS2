// 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
xhr.open('GET', 'phones.json', false);

// 3. Отсылаем запрос
xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
  // обработать ошибку
  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
 
    var phones = JSON.parse(xhr.responseText);
    console.log(phones);
    var cont = document.getElementsByClassName('container');
    var list = document.createElement('ul');
    
    for (var i =0 ; i<phones.length;i++){
        var li = document.createElement('li');
        li.innerHTML= phones[i].name;
        list.appendChild(li);
    }
    cont[0].appendChild(list);
   
}
