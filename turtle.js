
setSpeed(50);
width(1);
//color("black");

let base = 5,
    angle = 360 / base,
    dist = 10,
    counter = document.querySelector('span#count');

for (var i = 0; i < pi.length; i++) {
  let x = pi[i],
      newAngle = angle * x;
      
  forward(dist);
  right(newAngle);
}


/// <reference path="./lib/Intellisense/js-turtle_hy.ts" />
//DOCUMENTATION: https://hanumanum.github.io/js-turtle/
/*
showGrid(20);
forward(distance)
right(angle)
left(angle)
goto(x,y)
clear()
penup()
pendown()
reset()
angle(angle)
width(width)

color(r,g,b)
color([r,g,b])
color("red")
color("#ff0000")
*/
