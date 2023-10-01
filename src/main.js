 import Phaser from "phaser";

  
 import Preload from "./scenes/Preload";
 import MainMenu from "./scenes/MainMenu";
 import City from "./scenes/City";
 import UI from "./scenes/UI";
 import GameEnd from "./scenes/GameEnd";



 const config = {
   type: Phaser.AUTO,
   width: 1920,
   height: 1080,
   scale: {
     mode: Phaser.Scale.FIT,
     autoCenter: Phaser.Scale.CENTER_BOTH,
     min: {
       width: 1920,
       height: 1080,
     },
     max: {
       width: 1600,
       height: 1200,
     },
   },
   physics: {
     default: "arcade",
     arcade: {
       gravity: { y: 0 },
       debug: true,
     },
   },
   scene: [Preload, MainMenu, City,GameEnd,UI]
 };

 export default new Phaser.Game(config);
