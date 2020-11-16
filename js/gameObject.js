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