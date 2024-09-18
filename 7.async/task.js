class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, doAction) {
        if(time === null || time === undefined || doAction === undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({ time, callback: doAction, canCall: true });  
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(el => el.time !== time);
    }

    getCurrentFormattedTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    start() {
        if(this.intervalId) {
            return;
        }
        function timerHandler() {
            this.alarmCollection.forEach(el => {
                if(el.time === this.getCurrentFormattedTime() && el.canCall === true) {
                    el.canCall = false;
                    el.callback();
                }               
            });
        }
        this.intervalId = setInterval(timerHandler.bind(this), 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(el => el.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}