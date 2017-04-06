var Clock = (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.getTime = function () {
        var timeString = this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds();
        return timeString.toString();
    };
    Clock.prototype.getHours = function () {
        var hours = this.time.getHours();
        var hoursString = hours.toString();
        if (hours < 12) {
            hoursString = '0' + hoursString;
        }
        return hoursString;
    };
    Clock.prototype.getMinutes = function () {
        var minutes = this.time.getMinutes();
        var minutesString = minutes.toString();
        if (minutes < 10) {
            minutesString = '0' + minutesString;
        }
        return minutesString;
    };
    Clock.prototype.getSeconds = function () {
        var seconds = this.time.getSeconds();
        var secondsString = seconds.toString();
        if (seconds < 10) {
            secondsString = '0' + secondsString;
        }
        return secondsString;
    };
    return Clock;
}());
var clockBox = document.getElementById('clock');
setInterval(function () {
    var clock = new Clock();
    clockBox.innerHTML = clock.getTime();
}, 1000);
