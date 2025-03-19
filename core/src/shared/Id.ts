export default class Id {
  public static generate(): string {
    return `${this._random()}-${this._random()}-${this._random()}`;
  }

  private static _random(): string {
    return Math.random().toString(36).substring(2, 9)
  }
}
