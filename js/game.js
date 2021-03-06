const Box = require("./4boxes");
const Position = require("./position");

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
            console.log('v2');
        //~~
        this.addObject(Box.Make(new Position(20, 20), new Position(40, 40)));

        //this.context.fillStyle = '#DDDDDD';
        //this.context.fillRect(0, 0, this.constants.width, this.constants.height);
        //this.context.fillStyle = '#FF00FF';
        //this.context.fillRect(20, 20, 150, 100);
    }
    constants = {
        width: 800,
        height: 600
    };

    state = {
        objects: [],
        relevantInputs: []
    };

    addObject(gameObject) {
        this.state.objects.push(gameObject);
        for (let i = 0; i < gameObject.relevantInputs.length; i++) {
            this.state.relevantInputs[gameObject.relevantInputs[i]] = true;
        }
    }

    update() {
        this.state.objects.forEach(gameObject => {
            gameObject.update();
        });
    }

    draw() {
        this.state.objects.forEach(gameObject => {
            gameObject.draw(this.context);
        });
    }
}

window.game = new Game();
game.draw();

module.exports = game;