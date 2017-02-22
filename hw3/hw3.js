function makeDanger(elem, text) {
    elem.parentElement.className = 'form-group has-danger';
    msg = elem.parentElement.getElementsByClassName('form-control-feedback')[0];
    msg.innerHTML = text;

}

function makeSucces(elem, text) {
    elem.parentElement.className = 'form-group has-success';
    msg = elem.parentElement.getElementsByClassName('form-control-feedback')[0];
    msg.innerHTML = text;

}




function checkPhone(elem) {
    
    if (/^\+7\(\d{3}\)-\d{3}-\d{2}-\d{2}$/.test(elem.value)) {
        makeSucces(elem, 'Все получилось');
    } else {
        makeDanger(elem, 'Что-то не так! Телефон должен иметь вид:+7(123)-456-78-90')
    }

}

function checkEmail(elem) {
    if (/\w+@\w+.\w+/.test(elem.value)) {
        makeSucces(elem, 'Все получилось');
    } else {
        makeDanger(elem, 'Что-то не так! Email должен иметь вид email@example.com')
    }
}
function checkP(elem) {
    if (/^[A-Z]{2} \d{7}$/.test(elem.value)) {
        makeSucces(elem, 'Все получилось');
    } else {
        makeDanger(elem, 'Что-то не так! Код должен иметь вид BM 1234567')
    }
}
function checkColor(elem) {
        makeSucces(elem, 'Все получилось');
    } else {
        makeDanger(elem, 'Что-то не так! Код должен иметь вид #123456 или #ABC')
    }
}
function checkCell(elem) {
    if (/^[A-H]{1}[1-8]{1}$/.test(elem.value)) {
        makeSucces(elem, 'Все получилось');
    } else {
        makeDanger(elem, 'Что-то не так! Ячейка должна иметь вид A2')
    }
}
function searchTime(elem) {
    if (elem.value.match(/\d{2}[:-]\d{2}/g)) {
        makeSucces(elem, elem.value.match(/\d{2}[:-]\d{2}/g));
    } else {
        makeDanger(elem, 'Ничего не нашел')
    }
}
function searchNumbers(elem) {
    if (elem.value.match(/\d+(\.\d+)?/g)) {
        makeSucces(elem, elem.value.match(/\d+(\.\d+)?/g));
    } else {
        makeDanger(elem, 'Ничего не нашел')
    }
}