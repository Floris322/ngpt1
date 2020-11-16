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