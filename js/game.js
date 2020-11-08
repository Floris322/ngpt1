console.log('game.js');
let container = document.getElementById('container');

class Game {
    constructor() {
        this.viewport = document.createElement('canvas');
        this.context = this.viewport.getContext('2d');

        this.viewport.width = 800;
        this.viewport.height = 600;

        container.insertBefore(this.viewport, container.firstChild);
        this.context.fillStyle = '#FF00FF';
        this.context.fillRect(20, 20, 150, 100);
    }
}

window.game = new Game();

module.exports = game;