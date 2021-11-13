document.addEventListener('DOMContentLoaded', function() {
    var el = document.getElementById("clickMe");
    el.addEventListener("click", pickRandom, false);
}, false)

function pickRandom() {
    fetch("http://time.jsontest.com")
        .then(res => res.json())
        .then((out) => {
            console.log('Output: ', out);
        }).catch(err => console.error(err));
}