var time;
var wait = 2000;
var wait2= 500;
var font;
var font2;
var img_logo, img_4, img_6, img_balla, 
  img_cc, img_game, img_leg, img_spin;
var score= {0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '4', 6: '6', 7: '6'};
var shot = 1;

function setup()
{
  randomSeed(12);
  img_logo = loadImage("./tt.png");
  img_4= loadImage("./4.png");
  img_6= loadImage("./6.png");
  img_balla= loadImage("./balla.png");
  img_cc= loadImage("./cc.png");
  img_game= loadImage("./game.png");
  img_spin= loadImage("./spin.png");
  img_leg= loadImage("./leg.png");
  //fullScreen(P2D);
  // createCanvas(1000, 800);
  var cnv = createCanvas(windowWidth, windowHeight);
  noStroke();
  //font=loadFont("./AdobeGothicStd-Bold-48.vlw");
  font=loadFont("./DAGGERSQUARE.otf");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}



function draw()
{
  background(69, 191, 186);
  image(img_cc, width*1/6, height/4);
  textFont(font);
  textAlign(CENTER);
  fill(0);
  textSize(80);
  //text("SCORE", width*4/5, height/2-100);
  textSize(120);
  if (millis()-time>=wait)
  {
    textSize(100);
    fill(245,231,77);
    text("Ready ?", width/2, height/6);
  } else
  {  
    displayScore(score[shot]);
    textSize(100);
    fill(245,231,77);
    text("#IPL 2018", width/2, height/6);
  }


  fill(255);
  textSize(20);
  text("mkrv.in", 100, height-50);
}

function keyPressed() {
  if (millis()-time<=wait2)
  {
  } else
  {
    shot=int(random([0, 1, 2, 3, 4, 6, 7]));
    logEvent(shot);
    time=millis();
  }
}

function mousePressed() {
  keyPressed();
}

function displayScore(s) {
  s = s || '1'
  var textX = width*4/5;
  var textY =  height/2+50;

  switch(s) {
  case '0': 
    // println("0");  // Does not execute
    background(69, 191, 186);
    textFont(font);
    textSize(210);
    fill("#7E1B1B");
    textSize(200);
    fill(245,231,77);
    text(score[shot], textX, textY);
    
    image(img_balla, width*1/8, height/4);
    break;
  case '1': 
    // println("1");  // Does not execute
    background(69, 191, 186);
    textFont(font);
    textSize(210);
    fill("#7E1B1B");
    textSize(200);
    fill(245,231,77);
    text(score[shot], textX, textY);
    
    
    image(img_spin, width*1/8, height/4);
    break;
  case '2': 
    background(69, 191, 186);
    
    textFont(font);
    textSize(210);
    fill("#7E1B1B");
    textSize(200);
    fill(245,231,77);
    text(score[shot], textX, textY);
    
    image(img_game, width*1/8, height/4);
    break;
  case '3': 
    // println("3");  // Does not execute
    background(69, 191, 186);
    
    textFont(font);
    textSize(210);
    fill("#7E1B1B");
    textSize(200);
    fill(245,231,77);
    text(score[shot], textX, textY);
    
    image(img_leg, width*1/8, height/4);
    break;
  case '4': 
    background(69, 191, 186);
    textFont(font);
    textSize(210);
    fill("#7E1B1B");
    textSize(200);
    fill(245,231,77);
    // text(score[shot], textX, textY);
    image(img_4, width*1/4+80, height/4);
    break;
  case '6': 
    // println("6");  // Does not execute
    background(69, 191, 186);
    textFont(font);
    textSize(210);
    fill("#7E1B1B");
    textSize(200);
    fill(245,231,77);
    // text(score[shot], textX, textY);
    image(img_6, width*1/4+120, height/4);
    break;
  default:             // Default executes if the case labels
    background(69, 191, 186);
    textFont(font);
    // println("Ready ?");   // don't match the switch parameter
    image(img_balla, width*1/8, height/4);
    break;
  }
}

function logEvent(data) {
  $.ajax({
    type: "POST",
    url: 'https://ipl-logger.glitch.me/record',
    dataType: 'json',
    data: JSON.stringify({score: data}),
    contentType: "application/json; charset=utf-8",
    success: function(resp, status) {},
  });
}
