export class ColorPlus {
  r: number;
  g: number;
  b: number;
  a: number;
  strength: number;
  constructor(colorString: string) {
    this.r = parseInt(colorString.slice(1, 3), 16);
    this.g = parseInt(colorString.slice(3, 5), 16);
    this.b = parseInt(colorString.slice(5), 16);
    this.a = 255;
    this.strength = 1;
  }
  toString(): string {
    return '#' + this.r.toString(16) + this.g.toString(16) + this.b.toString(16);
  }
}
