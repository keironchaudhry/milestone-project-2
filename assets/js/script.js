let buttons = document.getElementsByTagName("button");

function output() {
    buttons.addEventListener("click", output, true);
    alert("You have clicked a button!");
}

