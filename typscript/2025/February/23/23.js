"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hoopCount = hoopCount;
function hoopCount(n) {
    return n >= 10 ? 'Great, now move on to tricks' : 'Keep at it until you get it';
}
console.log(hoopCount(11));
