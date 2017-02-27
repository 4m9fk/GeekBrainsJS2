/**
 * Created by Sirozhka on 26.02.2017.
 */
function Clock(elem) {
    var switcher = 1;
    this.t  = 0;
    this.start = function () {
        switcher = 1;
     //   alert('start');
        paint();

    };
    this.stop = function () {
        switcher = 0;
      

    };

    var clock = document.querySelector(elem.elem);
    if (clock) {
        var canvas = document.createElement('canvas');
        canvas.setAttribute('height', '400');
        canvas.setAttribute('width', '400 ');
        canvas.id = elem.elem + 'canvas';
        var h = document.createElement('h3');
        clock.appendChild(h);

        var button = document.createElement('button');
        button.className = 'btn btn-success';
        button.innerHTML = 'Start';
        button.addEventListener('click',this.start);
        clock.appendChild(button);
        var button2 = document.createElement('button');
        button2.className = 'btn btn-danger float-right';
        button2.innerHTML = 'Stop';
        button2.addEventListener('click',this.stop);
        clock.appendChild(button2);
        clock.appendChild(canvas);

    }
    else {
        console.error('Не найдено елемента ' + elem.elem);

    }


    function paint() {
        if (!switcher) {
            return 0;
        } else {
            var date = new Date();
            var hours = (date.getHours()<10)?'0'+date.getHours():date.getHours();
            var minutes = (date.getMinutes()<10)?'0'+date.getMinutes():date.getMinutes();
            var seconds = (date.getSeconds()<10)?'0'+date.getSeconds():date.getSeconds();
            var time = hours + " : " + minutes + " : " + seconds;
            var h = document.querySelector(elem.elem + ' > h3');
            h.innerHTML = time;
            var clock = document.querySelector(elem.elem + ' > canvas').getContext("2d");
            clock.save();
            clock.clearRect(0,0,400,400);
            clock.translate(200, 200);
            clock.scale(0.4,0.4);
            clock.rotate(-Math.PI/2);

            clock.strokeStyle = "black";
            clock.fillStyle = "black";
            clock.lineWidth = 6;
            clock.lineCap = "round";

            clock.save();
            clock.beginPath();

            for (var i = 0; i < 12; i++) {
                clock.rotate(Math.PI/6);
                clock.moveTo(200,0);
                clock.lineTo(220,0);
            }
            clock.stroke();// нарисовали то, что ранее описали
            clock.restore();// достаем последний сохраненный контекст из стэка

            clock.save();
            // рисуем часовую стрелку, вращая холст
            clock.rotate((Math.PI/6)*hours +
                (Math.PI/360)*minutes +
                (Math.PI/21600)*seconds);
            clock.lineWidth = 14;
            clock.beginPath();
            clock.moveTo(-20,0);
            clock.lineTo(150,0);
            clock.stroke();
            clock.restore();
            clock.save();
            // минутная стрелка
            clock.rotate((Math.PI/30*minutes) +
                (Math.PI/1800)*seconds);
            clock.lineWidth = 10;
            clock.beginPath();
            clock.moveTo(-28,0);
            clock.lineTo(212,0);
            clock.stroke();
            clock.restore();
            clock.save();

            // секундная стрелка
            clock.rotate(seconds * Math.PI/30);
            clock.strokeStyle = "#D40000";// цвет контура
            clock.fillStyle = "#D40000";
            clock.lineWidth = 6;

            clock.beginPath();
            clock.moveTo(-30,0);
            clock.lineTo(183,0);
            clock.stroke();
            clock.restore();

            clock.restore();

            this.t = setTimeout(function () {
                paint()
            }, 100);
        }
    }



    this.start();
}