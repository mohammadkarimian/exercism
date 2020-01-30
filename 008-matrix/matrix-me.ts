class Matrix {
    rows: number[][] = [];
    columns: number[][] = [];

    constructor(readonly matrix: string) {
        matrix.split("\n").forEach((value, rowIndex) => {
            this.rows[rowIndex] = [];
            value.split(" ").forEach((value, columnIndex) => {
                if (this.columns[columnIndex] === undefined) {
                    this.columns[columnIndex] = [];
                }

                this.rows[rowIndex].push(parseInt(value));
                this.columns[columnIndex].push(parseInt(value));
            });
        });
    }
}

export default Matrix;
