var end = new Date('11/01/2024 9:00 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('shaneCounter').innerHTML = 'NOW OPEN';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('shaneCounter').innerHTML = days + 'days ';
        document.getElementById('shaneCounter').innerHTML += hours + 'hrs ';
        document.getElementById('shaneCounter').innerHTML += minutes + 'mins ';
        document.getElementById('shaneCounter').innerHTML += seconds + 'secs';
    }

    timer = setInterval(showRemaining, 1000);
