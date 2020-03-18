const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

export default class Rational {
  constructor(readonly num: number, readonly den: number) {
    const divisor = gcd(num, den);
    const reducedNum = num / divisor;
    const reducedDen = den / divisor;

    [this.num, this.den] =
      reducedDen < 0 ? [-reducedNum, -reducedDen] : [reducedNum, reducedDen];
  }

  add(that: Rational): Rational {
    return new Rational(
      this.num * that.den + this.den * that.num,
      this.den * that.den
    );
  }

  sub(that: Rational): Rational {
    return new Rational(
      this.num * that.den - this.den * that.num,
      this.den * that.den
    );
  }

  mul(that: Rational): Rational {
    return new Rational(this.num * that.num, this.den * that.den);
  }

  div(that: Rational): Rational {
    return new Rational(this.num * that.den, this.den * that.num);
  }

  abs(): Rational {
    return new Rational(Math.abs(this.num), Math.abs(this.den));
  }

  exprational(x: number): Rational {
    return x >= 0
      ? new Rational(this.num ** x, this.den ** x)
      : new Rational(this.den ** -x, this.num ** -x);
  }

  expreal(x: number): number {
    // See https://en.wikipedia.org/wiki/Nth_root#Logarithmic_calculation
    // Using logarithmic calculation gets us the precision necessary to pass
    // the test "Raise a real number to a positive rational number".
    return 2 ** (Math.log2(x ** this.num) / this.den);
  }

  reduce(): Rational {
    return this;
  }
}