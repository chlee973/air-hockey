import SceneKeys from '../consts/SceneKeys';
import TextureKeys from '../consts/TextureKeys';

export class MainScene extends Phaser.Scene {
  private hockeyTable!: Phaser.GameObjects.Image;
  private malletJS!: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  private malletTS!: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;

  constructor() {
    super(SceneKeys.Main);
  }

  create(): void {
    const [w, h] = [window.innerWidth, window.innerHeight];
    const scale = w / h > 0.5 ? h / 1280 : w / 640;

    this.hockeyTable = this.add.image(w / 2, h / 2, TextureKeys.HockeyTable).setScale(scale);

    this.malletJS = this.physics.add
      .image(w / 2, (3 * h) / 4, TextureKeys.MalletJS)
      .setScale(scale);
    this.malletTS = this.physics.add
      .image(w / 2, (1 * h) / 4, TextureKeys.MalletTS)
      .setScale(scale);
    window.addEventListener('resize', this.resizeGame.bind(this));
  }

  update(): void {}
  resizeGame() {
    const [w, h] = [window.innerWidth, window.innerHeight];
    const scale = w / h > 0.5 ? h / 1280 : w / 640;
    this.game.scale.resize(w, h);
    this.hockeyTable.setScale(scale);
    this.hockeyTable.setPosition(w / 2, h / 2);

    this.malletJS.setScale(scale);
    this.malletJS.setPosition(w / 2, (3 * h) / 4);
    this.malletTS.setScale(scale);
    this.malletTS.setPosition(w / 2, (1 * h) / 4);
  }
}
