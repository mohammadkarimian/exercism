class Transcriptor {
    private readonly dnaNucleotideComplements: { [key: string]: string } = {
        G: "C",
        C: "G",
        T: "A",
        A: "U"
    };

    toRna(dna: string) {
        let rna: string = "";
        for (let index = 0; index < dna.length; index++) {
            const rnaChar = this.dnaNucleotideComplements[dna.charAt(index)];
            if (!rnaChar) {
                throw Error("Invalid input DNA.");
            }
            rna += rnaChar;
        }

        return rna;
    }
}

export default Transcriptor;
