var example = document.getElementById("canvas");
var clearButton = document.getElementById("clear");
var saveButton = document.getElementById("save");
var animationButton = document.getElementById("animation");
var FPSButton = document.getElementById("FPS");
var ShapeButton = document.getElementById("shape");
var colorPull = document.getElementById("color");



ctx = example.getContext('2d');
example.height = 500;
example.width = 500;
let yourFrame = "";
ctx.strokeStyle = '#B70A02'; // меняем цвет рамки
ctx.strokeRect(0, 0, 500, 500);
let frames = [];
let frame = 0;
let PlayerSpeed=100;
ctx.fillStyle = '#AF5200'; // меняем цвет клеток
for (let i = 0; i < 8; i += 2)
    for (let j = 0; j < 8; j += 2) {
        //  ctx.clearRect(20 + i * 32, 20 + j * 32, 32, 32);
        // ctx.clearRect(20 + (i + 1) * 32, 20 + (j + 1) * 32, 32, 32);
    }


example.onmousedown = function (e) {
    if (e.button === 0) {
        ctx.fillStyle =   colorPull.value;
        ctx.fillRect(e.offsetX, e.offsetY, 25, 25);
    } else if (e.button === 1) {
        ctx.clearRect(e.offsetX, e.offsetY, 25, 25);
    }
};

clearButton.onmousedown = function clearArea() {

    ctx.clearRect(1, 1, 498, 498);

};

saveButton.onmousedown = function save() {
    frames[frame] = ctx.getImageData(0, 0, 500, 500);
    console.log(frames);


    frame++;
};


animationButton.onmousedown = function animate() {
    for (let j = 0; j < frame; j++) {
        setTimeout(function () {
            ctx.putImageData(frames[j], 0, 0);
            console.log(j);
        }, j * PlayerSpeed)
    }
};

FPSButton.onmousedown = function speed() {

    PlayerSpeed+=100;
    if(PlayerSpeed>1000){
        PlayerSpeed=100;
    }

};

