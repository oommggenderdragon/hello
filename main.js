

song_1 ="";
song_2 = "";
leftWristX = "";
rightWristY="";
rightWristX= "";
rightWristY="";
function preload(){
song_1 = loadSound("dead.mp3");
song_2 = loadSound("music.mp3");
}

function setup() {
	canvas =  createCanvas(600, 400);
	canvas.center();
video = createCapture(VIDEO);
video.hide();

}
function setup() {
	canvas =  createCanvas(600, 400);
	canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
	console.log("poseNet is initialized");
	}
function draw(){

if(leftWristX,leftWristY == song_1){
		image(video,0,0,600,400);
		fill("#ff0000");
		stroke("#ff0000");
		circle(leftWristX,leftWristY,20);
}
	

}

function play(){
	song_1.play();
	song_2.play();

}

	function gotPoses(results){
		if( results.length > 0){
			console.log(results);
			leftWristX = results[0].pose.leftWrist.x;
			leftWristY = results[0].pose.leftWrist.y;
			console.log(leftWristX,leftWristY);
		
			rightWristX = results[0].pose.rightWrist.x;
			rightWristY = results[0].pose.rightWrist.y;
			console.log(rightWristX,rightWristY);
		
		} 
		
		}

