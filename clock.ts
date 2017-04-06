class Clock {
    private time: Date;

    constructor() {
        this.time = new Date();
    }

    public getTime(): string {
        let timeString = this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds();

        return timeString.toString();
    }

    public getHours(): string {
        let hours = this.time.getHours();
        let hoursString = hours.toString();
        if (hours < 12) {
            hoursString = '0' + hoursString;
        }

        return hoursString;
    }

    public getMinutes(): string {
        let minutes = this.time.getMinutes();
        let minutesString = minutes.toString();
        if (minutes < 10) {
            minutesString = '0' + minutesString;
        }

        return minutesString;
    }

    public getSeconds(): string{
        let seconds = this.time.getSeconds();
        let secondsString = seconds.toString();
        if (seconds < 10) {
            secondsString = '0' + secondsString;
        }

        return secondsString;
    }
}


var clockBox = document.getElementById('clock');
setInterval(function() {
    let clock = new Clock();
    clockBox.innerHTML = clock.getTime();
}, 1000);