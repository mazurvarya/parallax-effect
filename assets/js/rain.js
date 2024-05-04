let canvas = document.getElementById("canvas");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let c = canvas.getContext("2d");

function RainDrop(x_param, y_param, endY_param, speed_param, opacity_param){
    this.x = x_param;
    this.y = y_param;
    this.endY = endY_param;
    this.speed = speed_param;
    this.opacity = opacity_param;

        this.draw = function(){
            //начать путь рисования
            c.beginPath();
            //двигать перо в точки х, у
            c.moveTo(this.x, this.y);
            //нарисовать линию от текущей точки до х, у-
            c.lineTo(this.x, this.y - this.endY);
            //толщина линии 1пиксель
            c.lineWidth = 1;
            //цвет линии и добавление непрозрачности в конце
            c.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
            c.stroke();
        }
}

function random(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let rainDropMass = [];

for (let i = 0; i < 10; i++) {
    let randomX = random(0, window.innerWidth);
    let randomY = random(0, window.innerHeight);
    rainDropMass.push(new RainDrop(randomX, randomY, 880, 10, 1));
}         

rainDropMass.forEach((element) => {
    element.draw();
});

// rainDrop1.draw();
console.log(rainDropMass);