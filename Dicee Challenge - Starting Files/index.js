var randomNumber1 = Math.floor(Math.random()* 6)+1;
var randomImag = "dice" + randomNumber1+ ".png";
var randomImagSource = "Images/" + randomImag ;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagSource);

var randomNumber2 = Math.floor(Math.random()* 6)+1;
var randomImagSource2 = "Images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImagSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player1 Win";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 Win";
}
else{
    document.querySelector("h1").innerHTML = "Match Draw!!";
}