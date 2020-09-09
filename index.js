//alert("Working fine");

document.querySelectorAll(".drum").forEach(item =>
    {item.addEventListener("click", handleClick)
});

function handleClick(){
    alert("paclick'ino");
}

