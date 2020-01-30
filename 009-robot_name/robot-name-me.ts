class RobotName {
    private static generatedNames: Set<string> = new Set()

    name: string = ""

    constructor() {
        this.name = this.getUniqueName();
    }

    resetName(): void {
        this.name = this.getUniqueName();
    }

    private getUniqueName(){
        let robotName: string
        do{
            robotName = this.generateRandomLetters() + this.generateRandomDigits()
        }while(RobotName.generatedNames.has(robotName))

        RobotName.generatedNames.add(robotName);
        
        return robotName
    }

    private generateRandomLetters(): string {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65) +
            String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    }

    private generateRandomDigits(): number {
        return Math.floor(Math.random() * 900) + 100
    }
}

export default RobotName;