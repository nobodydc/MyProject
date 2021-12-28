song = "";
leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0; 

function setup(){
    canvas = createCanvas(500,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('modelisloaded');
}

function draw(){
    image(video,0,0,500,600);
}

function preload(){
    song = loadSound("music.mp3");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        console.log("leftwristx = "+ leftwristx + "leftwristy = " + leftwristy);
         
        rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
        console.log("rightwristx = "+ rightwristx + "rightwristy = " + rightwristy);

    }
}

function playthis(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}