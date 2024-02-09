import SceneKeys from '../consts/SceneKeys';

export class MainMenuScene extends Phaser.Scene {
  constructor() {
    super(SceneKeys.MainMenu);
  }
  preload(): void {}

  create(): void {
    this.scene.start(SceneKeys.Main);
  }
}
