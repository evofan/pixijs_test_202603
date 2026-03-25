// https://pixijs.com/8.x/tutorials/getting-started#4

import { Application, Assets, Sprite } from 'pixi.js';
import { VERSION } from 'pixi.js';

import { Text } from 'pixi.js';


// Asynchronous IIFE
(async () => {
  // Create a PixiJS application.
  const app = new Application();

  // Intialize the application.
  await app.init({ background: '#1099bb', resizeTo: window });

  // Then adding the application's canvas to the DOM body.
  document.body.appendChild(app.canvas);

  // Load the bunny texture.
  const texture = await Assets.load('https://pixijs.com/assets/bunny.png');

  // Create a new Sprite from an image path.
  const bunny = new Sprite(texture);

  // Add to stage.
  app.stage.addChild(bunny);

  // Center the sprite's anchor point.
  bunny.anchor.set(0.5);

  // Move the sprite to the center of the screen.
  bunny.x = app.screen.width / 2;
  bunny.y = app.screen.height / 2;

  // Add an animation loop callback to the application's ticker.
  app.ticker.add((time) => {
    /**
     * Just for fun, let's rotate mr rabbit a little.
     * Time is a Ticker object which holds time related data.
     * Here we use deltaTime, which is the time elapsed between the frame callbacks
     * to create frame-independent transformation. Keeping the speed consistent.
     */
    bunny.rotation += 0.1 * time.deltaTime;
  });

console.log(VERSION);


// Basic text creation
const basicText = new Text({
    text: 'Hello Pixi! Ver. ' + VERSION,
    style: {
        fontFamily: 'Arial',
        fontSize: 24,
        fill: 0xffffff,
        align: 'center',
    }
});
  app.stage.addChild(basicText);


})();
