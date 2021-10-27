Nose_X = 0;
Nose_Y = 0;

function preload(){
clown_image = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotResults);
}
function modelLoaded(){
console.log("Model is Loaded");
}

function gotResults(results){
    if(results.length>0){
        console.log(results);
       Nose_X = results[0].pose.nose.x - 20;
       Nose_Y = results[0].pose.nose.y - 20;
    }
}

function draw(){
image(video,0,0,300,300);
image(clown_image,Nose_X, Nose_Y,40,40);
}

function take_snap(){
    save("myClownNose.png");
}