class HandShake {
    private eventsMap: { [event: number]: string } = {
        1: "wink",
        2: "double blink",
        4: "close your eyes",
        8: "jump"
    };

    constructor(readonly input: number) { }

    commands(): string[] {
        const commands: string[] = [];
        const reverse: boolean = (this.input & 16) == 16;

        for (
            let event: number = reverse ? 8 : 1;
            event != 0 && event != 16;
            event = reverse ? event >> 1 : event << 1
        ) {
            if ((event & this.input) == event) {
                commands.push(this.eventsMap[event]);
            }
        }

        return commands;
    }
}

export default HandShake;
