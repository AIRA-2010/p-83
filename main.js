var mouseEvent ="empty";
var last_position_of_X,last_position_of_Y ; 
canvas =document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color ="black";
width_of_the_line=9;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
  width_of_the_line=document.getElementById("width_line").value;
  mouseEvent="mousedown";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.lineWidth= width_of_the_line;
        ctx.strokeStyle = color;
        console.log("last position of X and Y");
        console.log("X = " + last_position_of_X + ", Y = " + last_position_of_Y);

        ctx.moveTo(last_position_of_X,last_position_of_Y);
        
        console.log("current position of X and Y");
        console.log("X = " + current_position_of_mouse_x + ", Y = " + current_position_of_mouse_y);

        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_X = current_position_of_mouse_x;
    last_position_of_Y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}