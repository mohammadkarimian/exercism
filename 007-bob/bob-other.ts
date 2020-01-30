class Bob {
    hey(speech: string): string {

        if (Bob.hearsBoring(speech)) {
            return 'Fine. Be that way!'
        }

        if (Bob.hearsFreaky(speech)) {
            return 'Whoa, chill out!'
        }

        if (Bob.hearsInquisitive(speech)) {
            return 'Sure.'
        }

        return 'Whatever.'
    }

    protected static hearsBoring(speech: string): boolean {
        return speech.length === 0 || /^\s*$/.test(speech)
    }

    protected static hearsFreaky(speech: string): boolean {
        return /[A-Z]/.test(speech) && speech === speech.toUpperCase()
    }

    protected static hearsInquisitive(speech: string): boolean {
        return speech.endsWith('?')
    }
}

export default Bob