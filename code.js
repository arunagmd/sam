var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3e250098-13db-4409-bbd1-f7f2768ffb26","72c83984-07f4-47c9-844b-10167773901e"],"propsByKey":{"3e250098-13db-4409-bbd1-f7f2768ffb26":{"name":"car1","sourceUrl":"assets/v3/animations/POxFGr68tvgvHkv-bOtzfIHTnTDjzSC5RtbS6MyoZME/3e250098-13db-4409-bbd1-f7f2768ffb26.png","frameSize":{"x":337,"y":355},"frameCount":1,"looping":true,"frameDelay":4,"version":"mPzpNB9qh2JWXj7gR9HfNz3dZCg4vlZG","loadedFromSource":true,"saved":true,"sourceSize":{"x":337,"y":355},"rootRelativePath":"assets/v3/animations/POxFGr68tvgvHkv-bOtzfIHTnTDjzSC5RtbS6MyoZME/3e250098-13db-4409-bbd1-f7f2768ffb26.png"},"72c83984-07f4-47c9-844b-10167773901e":{"name":"sam","sourceUrl":"assets/api/v1/animation-library/gamelab/puN9TbQEHqDwpZBcS0MitP6v7xlK7PhV/category_faces/kidportrait_02.png","frameSize":{"x":264,"y":362},"frameCount":1,"looping":true,"frameDelay":2,"version":"puN9TbQEHqDwpZBcS0MitP6v7xlK7PhV","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":362},"rootRelativePath":"assets/api/v1/animation-library/gamelab/puN9TbQEHqDwpZBcS0MitP6v7xlK7PhV/category_faces/kidportrait_02.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation("sam")
  sam.scale=0.05
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car1.setAnimation("car1");
  car1.scale=0.05
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car2.setAnimation("car1");
  car2.scale=0.05
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car3.setAnimation("car1");
  car3.scale=0.05
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
car4.setAnimation("car1");
  car4.scale=0.05  
  
 
//add the velocity to make the car move
car1.velocityY=6;
car2.velocityY=6;
car3.velocityY=-6;
car4.velocityY=-6;

function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
//Add the condition to make the sam move left and right
if(keyDown("right")){
    sam.x = sam.x +5;
  }
  if(keyDown("left")){
    sam.x = sam.x -5;
  }
  
//Add the condition to reduce the life of sam if it touches the car.
if(
     sam.isTouching(car1)||
     sam.isTouching(car2)||
     sam.isTouching(car3)||
     sam.isTouching(car4)){
       sam.x=20;
       sam.y=190;
       life=life+1;
     }
       
       
     
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
