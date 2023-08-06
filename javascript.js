const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(300, 300); //start form the center
var ix = 0; //the history (counter) of x and how far it goes
var iy = 0;
var xx = 0; // the sum of the coming value of x and the current (counter) x
var yy = 0;

function ff(x, y) {
    yy = y + iy;
    xx = x + ix;
    ctx.lineTo(xx, yy);
    ctx.stroke();
    iy -= 10;
}
function lf(x, y) {
    yy = y + iy;
    xx = x + ix;
    ctx.lineTo(xx, yy);
    ctx.stroke();
    ix -= 10;
}
function rf(x, y) {
    yy = y + iy;
    xx = x + ix;
    ctx.lineTo(xx, yy);
    ctx.stroke();
    ix += 10;
}
function bf(x, y) {
    yy = y + iy;
    xx = x + ix;
    ctx.lineTo(xx, yy);
    ctx.stroke();
    iy += 10;
}