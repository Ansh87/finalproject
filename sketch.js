var character, characterImg;
var background, backgroundImg;
var badguy, badguyImg;
var keySprite, keyImg;
var x;
var keyTime = false;
var game = "notfinished";
var ghostImg; 

function preload(){
backgroundImg = loadImage("assets/grass.png");
characterImg = loadImage("assets/character2-removebg-preview.png");
badguyImg = loadImage("assets/image.png");
keyImg = loadImage("assets/redkey.png");
ghostImg = loadImage("assets/ghost-removebg-preview.png");

}

function setup(){
    createCanvas(windowWidth-10,windowHeight-10);
    character = createSprite(width/2-400,height/2-250,10,10);
    character.addImage(characterImg);
    badguy = createSprite(width/2+300,height/2+150,10,10);
    badguy.addImage(badguyImg);
    keySprite = createSprite(width/2+400,height/2+250,1,1);
    keySprite.addImage(keyImg);
    keySprite.scale = 0.1;
}

function draw(){
background(backgroundImg, 50,50);
image(backgroundImg, -width*8, -height*8, width*8, height*8);
drawSprites();
if(game=="finished"){
    setTimeout(function(){character.addImage(ghostImg);character.scale = 0.25;character.y = character.y-3;},250);  

}
if(game=="win"){
    setTimeout(function(){badguy.addImage(ghostImg);badguy.scale = 0.25;badguy.y = badguy.y-3;},250);

    }
if(keyTime != true&&game!="finished"&&game!="win") {
if(keyIsDown(LEFT_ARROW)){
character.x = character.x-50;
badguyMove();
if(character.isTouching(badguy)&&keyTime!=true){
    keyTime = true;
    setTimeout(function(){window.alert("Game Over!")},250);   
    game = "finished";
    }
    if(character.isTouching(keySprite)&&keyTime!=true){
    keyTime= true;
    setTimeout(function(){window.alert("You Win!")},200);    
    game = "win";  
        }
keyTime = true;
setTimeout(function(){keyTime = false},250);  

}
if(keyIsDown(RIGHT_ARROW)){
    character.x = character.x+50;    
    badguyMove();
    if(character.isTouching(badguy)&&keyTime!=true){
        keyTime = true;
        setTimeout(function(){window.alert("Game Over!")},250);   
        game = "finished";
        }
        if(character.isTouching(keySprite)&&keyTime!=true){
        keyTime= true;
        setTimeout(function(){window.alert("You Win!")},200);    
        game = "win";    
            }
    keyTime = true;
setTimeout(function(){keyTime = false},250);  

}
if(keyIsDown(UP_ARROW)){
    character.y = character.y-50;
    badguyMove();
    if(character.isTouching(badguy)&&keyTime!=true){
        keyTime = true;
        setTimeout(function(){window.alert("Game Over!")},250);  
        game = "finished"; 
        }
        if(character.isTouching(keySprite)&&keyTime!=true){
        keyTime= true;
        setTimeout(function(){window.alert("You Win!")},200);    
        game = "win";
            }
    keyTime = true;
    setTimeout(function(){keyTime = false},250);  

}
if(keyIsDown(DOWN_ARROW)){
    character.y = character.y+50;
    badguyMove();
    if(character.isTouching(badguy)&&keyTime!=true){
        keyTime = true;
        setTimeout(function(){window.alert("Game Over!")},250);   
        game = "finished";
        }
        if(character.isTouching(keySprite)&&keyTime!=true){
        keyTime= true;
        setTimeout(function(){window.alert("You Win!")},200);    
        game = "win";
            }
    keyTime = true;
    setTimeout(function(){keyTime = false},250);  

}
}


}
function badguyMove(){
x = random(1,2);
console.log(x);
if(x>1.5){
if(character.x>badguy.x){
    badguy.x = badguy.x+100;
}
if(character.x<badguy.x){
    badguy.x = badguy.x-100;
}
}
if(x<1.5){
    if(character.y>badguy.y){
        badguy.y = badguy.y+100;
    }
    if(character.y<badguy.y){
        badguy.y = badguy.y-100;
    }
}

}