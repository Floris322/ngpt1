(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}]},{},[1]);
