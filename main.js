
var canvas = new fabric.Canvas("myCanvas");

//var
var player_Y = 10;
var player_X = 10;
var hero_width = 30;
var hero_height = 30;

//objects
var playerObj
var heroObj

//functions
function playerUpdate() {
    fabric.Image.fromURL("player.png", function (Img) {

        playerObj = Img;
        playerObj.scaleToWidth(150);
        playerObj.scaleToHeight(140);
        playerObj.set({

            top: player_Y, left: player_X

        });
        canvas.add(playerObj);

    });
}
function newImg(getImg) {
    fabric.Image.fromURL(getImg, function (Img) {

        heroObj = Img;
        heroObj.scaleToWidth(hero_width);
        heroObj.scaleToHeight(hero_height);
        heroObj.set({

            top: player_Y, left: player_X

        });
        canvas.add(heroObj);

    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
	keypress = e.keyCode;
	
	if(e.shiftKey == true && keypress == '80'){
		
		hero_height += 10;
		hero_width  += 10;
		
		document.getElementById("show_width").innerHTML = hero_width;
		document.getElementById("show_height").innerHTML= hero_height
		
		console.log("the height is " + hero_height + " width is " + hero_width);
	}
	
	if(e.shiftKey == true && keypress == '77'){
		
		hero_height -= 10;
		hero_width  -= 10;
		
		document.getElementById("show_width").innerHTML = hero_width;
		document.getElementById("show_height").innerHTML= hero_height
		
		console.log("the height is " + hero_height + " width is " + hero_width);
	}
	
	if(keypress == '40'){
		down();
		console.log("down");
	}
	
	if(keypress == '39'){
		right();
		console.log("right");
	}
	
	if(keypress == '38'){
		up();
		console.log("up");
	}
	
	if(keypress == '37'){
		left();
		console.log("left");
	}
	
	if(keypress == '70'){
		newImg('ironman_face.png');
		console.log("f")
	}
	
	
	if(keypress == '66'){
		newImg('spiderman_body.png');
		console.log("b");
	}
	
	
	if(keypress == '76'){
		newImg('hulk_legs.png');
		console.log("l");
	}
	
	
	if(keypress == '82'){
		newImg('thor_right_hand.png');
		console.log("r");
	}
	
	if(keypress == '72'){
		newImg('captain_america_left_hand.png');
		console.log("h");
	}
	
	
}

function up(){
	if(player_Y > 0 ){
		
		player_Y = player_Y - hero_height;
		console.log("X = " + player_X + " Y = " + player_Y);
		canvas.remove(playerObj);
		playerUpdate();
	}
	
}
function down(){
	if(player_Y <= 520 ){
		
		player_Y = player_Y + hero_height;
		console.log("X = " + player_X + " Y = " + player_Y);
		canvas.remove(playerObj);
		playerUpdate();
	}
	
}
function left(){
	if(player_X > 10 ){
		
		player_X = player_X - hero_width;
		console.log("X = " + player_X + " Y = " + player_Y);
		canvas.remove(playerObj);
		playerUpdate();
	}
	
}
function right(){
	if(player_X <= 820 ){
		
		player_X = player_X + hero_width;
		console.log("X = " + player_X + " Y = " + player_Y);
		canvas.remove(playerObj);
		playerUpdate();
	}
	
}
