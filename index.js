//alert("Working fine");

document.querySelectorAll(".drum").forEach(item =>
    {item.addEventListener("click", handleClick)
});

function handleClick(){
    //alert("paclick'ino");
    var buttonInnerHtml=this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
}

document.addEventListener("keydown", function (KeyboardEvent){
    //var knopke = KeyboardEvent.key;
    makeSound(KeyboardEvent.key);
    buttonAnimation(KeyboardEvent.key);
});

function makeSound(knopke){
    switch (knopke) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}
