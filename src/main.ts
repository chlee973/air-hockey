import Phaser from 'phaser';
import { PreloadScene } from './scenes/PreloadScene';
import { MainMenuScene } from './scenes/MainMenuScene';
import { MainScene } from './scenes/MainScene';
import SceneKeys from './consts/SceneKeys';

const config: Phaser.Types.Core.GameConfig = {
  width: window.innerWidth,
  height: window.innerHeight,
  type: Phaser.AUTO,
  // scale: {
  //   mode: Phaser.Scale.FIT,
  //   autoCenter: Phaser.Scale.CENTER_BOTH,
  // },
  parent: 'game',
  backgroundColor: 'ededed',
  pixelArt: false,
  zoom: 1,
  physics: {
    default: 'arcade',
    arcade: {
      // gravity: { y: 300 },
    },
  },
};

export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);

    this.scene.add(SceneKeys.Preload, PreloadScene, false);
    this.scene.add(SceneKeys.MainMenu, MainMenuScene, false);
    this.scene.add(SceneKeys.Main, MainScene, false);

    this.scene.start(SceneKeys.Preload);
  }
}

let game: Phaser.Game;
window.addEventListener('load', () => {
  game = new Game(config);
});
