nosex = 0 ;
nosey = 0 ;

function preload(){
clone_nose = loadImage('https://i.postimg.cc/fRsqJXz6/clone-nose-image.png');
}

function setup(){
    
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();


    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

classifier = ml5.imageClassifier('mobileNet',modelLoaded);


function modelLoaded(){
console.log('poseNet is initialized');
}

function gotPoses(results){
  if(results.length > 0 ){
      console.log(results);

      nosex = results[0].pose.nose.x - 10;
      nosey = results[0].pose.nose.y - 10;

      console.log("nose x = " + nosex);
      console.log("nose y = " + nosey);
  }
}




function draw(){
   image(video,0,0,300,300);

   image(clone_nose,nosex,nosey,30,30);
}

function take_Snapshot(){
    save('naren.png');
}