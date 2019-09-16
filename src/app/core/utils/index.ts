export class AppUtils {
  static fibonacci(num: number): number {
    if (num === 1 || num === 2) {
      return 1;
    }
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }


  public static generateNum() {
    const factor = Math.ceil(Math.random() * 10) % 3;
    let num = 0;

    switch (factor) {
      case 0:
        num = 27;
        break;
      case 1:
        num = 28;
        break;
      case 2:
        num = 29;
        break;
      default:
        num = 29;
        break;
    }
    return num;
  }
}
