class Rational {
    constructor(readonly numerator: number, readonly denominator: number) { }

    add(rational: Rational): Rational {
        let result = new Rational(
            this.numerator * rational.denominator +
            this.denominator * rational.numerator,
            this.denominator * rational.denominator
        );

        return result.numerator != 0 ? result : new Rational(0, 1);
    }

    sub(rational: Rational): Rational {
        let result = new Rational(
            this.numerator * rational.denominator -
            this.denominator * rational.numerator,
            this.denominator * rational.denominator
        );

        return result.numerator != 0 ? result : new Rational(0, 1);
    }

    mul(rational: Rational): Rational {
        let result = new Rational(
            this.numerator * rational.numerator,
            this.denominator * rational.denominator
        );

        let gcd = Math.abs(this.gcd(result.numerator, result.denominator));

        return new Rational(result.numerator / gcd, result.denominator / gcd);
    }

    div(rational: Rational): Rational {
        let result = new Rational(
            this.numerator * rational.denominator,
            this.denominator * rational.numerator
        );

        let gcd = this.gcd(result.numerator, result.denominator);

        return new Rational(result.numerator / gcd, result.denominator / gcd);
    }

    abs(): Rational {
        return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
    }

    exprational(power: number): Rational {
        return new Rational(
            Math.pow(this.numerator, power),
            Math.pow(this.denominator, power)
        );
    }

    expreal(num: number): number {
        if (this.numerator > 0)
            return Number(
                Math.pow(Math.pow(num, this.numerator), 1 / this.denominator).toFixed(1)
            );
        else
            return Number(
                Math.pow(Math.pow(num, this.numerator), 1 / this.denominator)
            );
    }

    reduce(): Rational {
        let gcd = Math.abs(this.gcd(this.numerator, this.denominator));
        let negetive = this.denominator < 0 ? -1 : 1;
        return new Rational((this.numerator / gcd) * negetive, (this.denominator / gcd) * negetive);
    }

    private gcd(a: number, b: number): number {
        if (b == 0) return a;
        return this.gcd(b, a % b);
    }
}

export default Rational;
