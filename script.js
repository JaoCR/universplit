document.addEventListener('DOMContentLoaded', function() {
    var el = document.getElementById("btnGenerate");
    el.addEventListener("click", pickRandom, false);
}, false)

function pickRandom() {
    fetch("https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8&size=6")
        .then(res => res.json())
        .then((out) => {
            console.log('Output: ', out);
            var label = document.getElementById("number");
            label.innerHTML = out.data[0];
        }).catch(err => console.error(err));
}