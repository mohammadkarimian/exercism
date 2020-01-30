class Bob {
    hey(sentence: string) {
        if (this.isQuestion(sentence) && this.isYell(sentence)) {
            return 'Calm down, I know what I\'m doing!';
        } else if (this.isQuestion(sentence)) {
            return "Sure.";
        } else if (this.isYell(sentence)) {
            return "Whoa, chill out!";
        } else if (this.isSilence(sentence)) {
            return 'Fine. Be that way!'
        } else {
            return "Whatever.";
        }
    }

    private isYell(sentence: string): boolean {
        return (
            sentence
                .split("")
                .every(character => character === character.toUpperCase()) &&
            this.isLetterExist(sentence)
        );
    }

    private isLetterExist(sentence: string): boolean {
        return (
            sentence
                .split("")
                .find(
                    c =>
                        c.toUpperCase().charCodeAt(0) >= "A".charCodeAt(0) &&
                        c.toUpperCase().charCodeAt(0) <= "Z".charCodeAt(0)
                ) != undefined
        );
    }

    private isQuestion(sentence: string): boolean {
        return sentence.trim().endsWith('?')
    }

    private isSilence(sentence: string): boolean {
        return !Boolean(sentence.trim());
    }
}

export default Bob;
