import { type } from "os";

export class WordProblem {
    constructor(readonly question: string) { }

    private readonly validTokens: string[] = ["what", "is", "by"];
    private readonly operators: string[] = ["plus", "minus", "multiplied", "divided"];

    answer(): number {
        const questionTokens = this.question.replace("?", "").split(" ");
        let answer: number = 0;
        let operator: string = "";

        questionTokens.forEach(token => {
            token = token.toLowerCase();
            if (
                !this.validTokens.includes(token) &&
                !this.operators.includes(token) &&
                !/^(\d|\-)\d*$/.test(token)
            ) {
                throw new ArgumentError();
            } else if (this.operators.includes(token)) {
                operator = token;
            } else if (/^(\d|\-)\d*$/.test(token)) {
                if (operator == "") {
                    answer = parseInt(token);
                } else {
                    if (operator == this.operators[0]) {
                        answer += parseInt(token);
                    } else if (operator == this.operators[1]) {
                        answer -= parseInt(token);
                    } else if (operator == this.operators[2]) {
                        answer *= parseInt(token);
                    } else if (operator == this.operators[3]) {
                        answer /= parseInt(token);
                    }
                }
            }
        });
        return answer;
    }
}

export class ArgumentError extends Error { }
