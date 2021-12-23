function message(){
    alert("Ninja was liked!")
    
}

function hide(element) {
    element.remove();
}

function log(element) {
    if(element.innerText == "Login") {
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }
}