canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

//var related to rover//
car_x=10;
car_y=10;
car_width=201;
car_height=101;
car_image="car1.png";

background_image="racing.jpg";


function add(){
    background_imgTAG= new Image(); 
    background_imgTAG.onload= uploadBackground;
    background_imgTAG.src= background_image;

    rover_imgTAG= new Image ();
    rover_imgTAG.onload= uploadcar;
    rover_imgTAG.src= car_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTAG,0,0, canvas.width, canvas.height);

}

function uploadcar(){
    ctx.drawImage(rover_imgTAG,car_x,car_y, car_width,car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
}


function up()
{
    if(car_y>=0)
    {
        car_y-= 10 ;
        console.log("When up arrow is pressed , x=" + car_x+ ", y = " + car_y);
        uploadBackground();
        uploadcar();
    }
    
}



function down()
{
    if(car_y <= 500)
    {
        car_y <= 10;
        console.log("when down arrow is pressed, x =" + car_x + ",y =" + car_y);

    }
}


function right()
{
    if(car_x <= 699 )
    {
        car_x +=10;
        console.log("when rigth arrow is pressed , x =" + car_x + " y =" + car_y);
        uploadBackground();
        uploadcar();

    }
}

 
function left()
{
    if(car_x >= 00)
    {
        car_x -= 10 ;
        console.log("when left arrow is pressed , x =" + car_x + " , y =" + car_y);
    }
}