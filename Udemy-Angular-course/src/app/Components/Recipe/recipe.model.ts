export class Recipe {
  /**
   * The recipe name.
   */
  public name: string;
  /**
   * The recipe description.
   */
  public description: string;
  /**
   * The recipe image.
   */
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
