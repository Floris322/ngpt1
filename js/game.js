let container = document.getElementById('container');

class Game {
    constructor() {
        this.viewport = document.createElement('canvas');
        this.context = this.viewport.getContext('2d');

        this.viewport.width = 800;
        this.viewport.height = 600;

        container.insertBefore(this.viewport, container.firstChild);

        this.context.font = '32px Arial';
        this.context.fillText('Let\'s see what\'s up!');
    }
}

window.game = new Game();

module.exports = game;