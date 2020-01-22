export class ResistorColor {
    private colors: string[];

    constructor(colors: string[]) {
      if (colors.length < 2){
        throw Error("At least two colors need to be present");
      }
        this.colors = colors;
    }

    private colorRules: { [key: string]: number } = {
        'black': 0,
        'brown': 1,
        'red': 2,
        'orange': 3,
        'yellow': 4,
        'green': 5,
        'blue': 6,
        'violet': 7,
        'grey': 8,
        'white': 9
    };

    value = (): number => {
        return combineNumbers(this.colorRules[this.colors[0]],
            this.colorRules[this.colors[1]]);
    };
}

function combineNumbers(firstNumber: number, secondNumber: number): number {
    const result = `${firstNumber}${secondNumber}`;
    return +result;
}