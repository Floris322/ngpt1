console.log('game.js');
let container = document.getElementById('container');

class Game {
    constructor() {
        this.viewport = document.createElement('canvas');
        this.context = this.viewport.getContext('2d');

        this.viewport.width = this.constants.width;
        this.viewport.height = this.constants.height;

        container.insertBefore(this.viewport, container.firstChild);
        
        //~~
        this.context.fillStyle = '#DDDDDD';
        this.context.fillRect(0, 0, this.constants.width, this.constants.height);
        this.context.fillStyle = '#FF00FF';
        this.context.fillRect(20, 20, 150, 100);
    }
    constants = {
        width: 800,
        height: 600
    };

    state = {};
}

window.game = new Game();

module.exports = game;