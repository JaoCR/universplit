document.addEventListener('DOMContentLoaded', function() {
    var el = document.getElementById("clickMe");
    el.addEventListener("click", pickRandom, false);
}, false)

function pickRandom() {
    alert("works");
}