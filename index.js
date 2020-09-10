//alert("Working fine");

document.querySelectorAll(".drum").forEach(item =>
    {item.addEventListener("click", handleClick)
});

function handleClick(){
    //alert("paclick'ino");
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}

