class SpaceAge {
    private readonly EARTH_ORBITAL_PERIOD_SEC: number = 31557600;
    private readonly MERCURY_ORBITAL_PERIOD_SEC: number = 7600543.81992;
    private readonly VENUS_ORBITAL_PERIOD_SEC: number = 19414149.052176;
    private readonly MARS_ORBITAL_PERIOD_SEC: number = 59354032.69008;
    private readonly JUPITER_ORBITAL_PERIOD_SEC: number = 374355659.124;
    private readonly SATURN_ORBITAL_PERIOD_SEC: number = 929292362.8848;
    private readonly URANUS_ORBITAL_PERIOD_SEC: number = 2651370019.3296;
    private readonly NEPTUNE_ORBITAL_PERIOD_SEC: number = 5200418560.032;

    private readonly FRACTION_DIGITS: number = 2;

    readonly seconds: number;

    constructor(seconds: number) {
        this.seconds = seconds;
    }

    onEarth(): Number {
        return Number(
            (this.seconds / this.EARTH_ORBITAL_PERIOD_SEC).toFixed(
                this.FRACTION_DIGITS
            )
        );
    }

    onVenus(): Number {
        return Number(
            (this.seconds / this.VENUS_ORBITAL_PERIOD_SEC).toFixed(
                this.FRACTION_DIGITS
            )
        );
    }

    onMercury(): Number {
        return Number(
            (this.seconds / this.MERCURY_ORBITAL_PERIOD_SEC).toFixed(
                this.FRACTION_DIGITS
            )
        );
    }

    onMars(): Number {
        return Number(
            (this.seconds / this.MARS_ORBITAL_PERIOD_SEC).toFixed(
                this.FRACTION_DIGITS
            )
        );
    }

    onJupiter(): Number {
        return Number(
            (this.seconds / this.JUPITER_ORBITAL_PERIOD_SEC).toFixed(
                this.FRACTION_DIGITS
            )
        );
    }

    onSaturn(): Number {
        return Number(
            (this.seconds / this.SATURN_ORBITAL_PERIOD_SEC).toFixed(
                this.FRACTION_DIGITS
            )
        );
    }

    onUranus(): Number {
        return Number(
            (this.seconds / this.URANUS_ORBITAL_PERIOD_SEC).toFixed(
                this.FRACTION_DIGITS
            )
        );
    }

    onNeptune(): Number {
        return Number(
            (this.seconds / this.NEPTUNE_ORBITAL_PERIOD_SEC).toFixed(
                this.FRACTION_DIGITS
            )
        );
    }
}

export default SpaceAge;
