(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const GameObject = require("./gameObject");

class Box {
    static Make(origin, size) {
        let h = [origin.x, origin.y, origin.x+size.x, origin.y+size.y];
        let a = ['#44DDDD', h];
        let r = [0,1];

        return new GameObject(a,h,r);
    }
}

module.exports = Box;
},{"./gameObject":3}],2:[function(require,module,exports){
const Box = require("./4boxes");

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
            console.log('v1');
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
            gameObject.draw(ctx);
        });
    }
}

window.game = new Game();
game.draw();

module.exports = game;
},{"./4boxes":1}],3:[function(require,module,exports){
'use strict';

class GameObject {
    constructor(a,h,r, update, draw) {
        this.appearance = a;
        this.hitbox = h;
        this.relevantInputs = r;
        this.update = update;
        if(draw) {
            this.draw = draw;
        } else {
            this.draw = function(ctx) {
                ctx.fillStyle = this.appearance[0];
                ctx.fillRect(...this.appearance[1]);
            }
        }
    }

    click(clickEvent) {
        console.log(clickEvent.position);
    }
}

module.exports = GameObject;
},{}]},{},[2]);
