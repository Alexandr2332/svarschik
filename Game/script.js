const sss = document.getElementById("sss");
const trac = document.getElementById("trac");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (sss.classList != "jump") {
        sss.classList.add("jump")
    }
    setTimeout( function() {
        sss.classList.remove("jump")
    }, 300)
}
let isAlive = setInterval (function() {
    let sssTop = parseInt (window.getComputedStyle(sss).getPropertyValue("top"));
    let tracLeft = parseInt (window.getComputedStyle(trac).getPropertyValue("left"));
    if (tracLeft < 30 && tracLeft > 25 && sssTop >= 140) {
        alert("СВАРИЛ!!!")
    }
}, 10)