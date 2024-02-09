import SceneKeys from '../consts/SceneKeys';
import TextureKeys from '../consts/TextureKeys';

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super(SceneKeys.Preload);
  }
  preload() {
    // this.load.crossOrigin = 'anonymous';
    // this.load.maxParallelDownloads = Infinity;
    this.load.image(TextureKeys.HockeyTable, 'assets/hockey_table.png');
    this.load.image(TextureKeys.MalletJS, 'assets/mallet_js.png');
    this.load.image(TextureKeys.MalletTS, 'assets/mallet_ts.png');
    this.load.image(TextureKeys.Puck, 'assets/puck.png');
  }

  create() {
    this.scene.start(SceneKeys.Main);
  }
}
