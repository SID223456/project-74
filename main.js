canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 100;
car1_height = 90;
car1_X = 10;
car1_Y = 10;
bg_img = "download (6).jpg";
car1_img = "26625176-red-sports-car-top-view.jpg";

car2_width = 100;
car2_height = 90;
car2_X = 10;
car2_Y = 100;
bg_img = "download (6).jpg";
car2_img = "png-clipart-top-view-of-white-sedan-car-door-honda-vehicle-racing-stripe-top-view-car-glass-sedan.png";

function add(){
bg_imgTag = new Image();
bg_imgTag.onload = uploadBackgroundImage;
bg_imgTag.src = bg_img;

car1_imgTag = new Image();
car1_imgTag.onload = uploadCAR1Image;
car1_imgTag.src = car1_img;

car2_imgTag = new Image();
car2_imgTag.onload = uploadCAR2Image;
car2_imgTag.src = car2_img;
}

function uploadBackgroundImage(){
    ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCAR1Image(){
    ctx.drawImage(car1_imgTag, car1_X, car1_Y, car1_width, car1_height);
}

function uploadCAR2Image(){
    ctx.drawImage(car2_imgTag, car2_X, car2_Y, car2_width, car2_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
keyPressed = e.keyCode;
console.log(keyPressed);

if(keyPressed == '37'){
    left();
    console.log("Left Key is Pressed");
}

if(keyPressed == '38'){
    up();
    console.log("Up Key is Pressed");
}

if(keyPressed == '39'){
    right();
    console.log("Right Key is Pressed");
}

if(keyPressed == '40'){
    down();
    console.log("Down Key is Pressed");
}
}