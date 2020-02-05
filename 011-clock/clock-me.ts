class Clock {
    private hour: number;
    private minute: number;

    constructor(hour: number = 0, minute: number = 0) {
        this.hour = this.calculateHour(hour, minute);
        this.minute = this.calculateMinute(minute);
    }

    plus(minutes: number): Clock {
        this.hour = this.calculateHour(this.hour, this.minute + minutes);
        this.minute = this.calculateMinute(this.minute + minutes);

        return this;
    }

    minus(minutes: number): Clock {
        this.hour = this.calculateHour(this.hour, this.minute - minutes);
        this.minute = this.calculateMinute(this.minute - minutes);

        return this;
    }

    toString(): string {
        return (
            (this.hour >= 10 ? this.hour : "0" + this.hour) +
            ":" +
            (this.minute >= 10 ? this.minute : "0" + this.minute)
        );
    }

    equals(clock: Clock): boolean {
        return (this.hour == clock.hour) && (this.minute == clock.minute)
    }

    private calculateHour(hour: number, minute: number): number {
        if (minute < 0) {
            hour -= Math.ceil(Math.abs(minute) / 60);
        } else {
            hour = (hour + Math.floor(minute / 60)) % 24;
        }

        if (hour < 0) {
            hour += Math.ceil(Math.abs(hour) / 24) * 24;
        }

        return hour;
    }

    private calculateMinute(minute: number): number {
        if (minute < 0) {
            minute += Math.ceil(Math.abs(minute) / 60) * 60;
        }

        minute = minute % 60;

        return minute;
    }
}

export default Clock;
