canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_x=10;
car1_y=10;
background_image="racing background.jpg";
car1_image="car1.png";
car2_width=120;
car2_height=70;
car2_x=10;
car2_y=10;
background_image="racing background.jpg";
car2_image="car2.png";
function add(){
    background_imgTag=new Image();//defining a variable ith a new image
    background_imgTag.onload=uploadBackground;//setting a function, onloading this variable   
    background_imgTag.src=background_image;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        up();
        console.log("up");

    }
    if(keyPressed=='40'){
        down();
        console.log("down");
        
    }
    if(keyPressed=='37'){
        left();
        console.log("left");
        
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
        
    }
}
function car1_up(){
    if car1_y>0{
        car1_y=car1_y-10
        console.log("When up arrow is pressed, x=" + car1_x + "l y=" + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_down(){
    if car1_y>500{
        car1_y=car1_y+10
        console.log("When up arrow is pressed, x=" + car1_x + "l y=" + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_left(){
    if car1_y>0{
        car1_y=car1_x-10;
        console.log("When up arrow is pressed, x=" + car1_x + "l y=" + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_right(){
    if car1_x<500{
        car1_y=car1_y+10
        console.log("When up arrow is pressed, x=" + car1_x + "l y=" + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}