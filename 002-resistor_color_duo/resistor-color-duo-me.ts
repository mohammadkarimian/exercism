export class ResistorColor {
  private colors: string[];
  private colorsCoded: string[] = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white"
  ];
  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw Error("At least two colors need to be present");
    }

    this.colors = colors;
  }

  value = (): number => {
    return (
      this.colorsCoded.indexOf(this.colors[0].toLowerCase()) * 10 +
      this.colorsCoded.indexOf(this.colors[1].toLowerCase())
    );
  };
}
