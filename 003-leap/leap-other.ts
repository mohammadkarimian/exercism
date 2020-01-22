export default function(year: number): boolean {
    const divisibleBy = (n: number) => year % n === 0;
    return divisibleBy(4) && !divisibleBy(100) || divisibleBy(400);
}