enabled = true

document.getElementById("div").addEventListener("click", e => {
    if (enabled)
        alert("Hola! Soy el div");
});

function boto() {
    enabled = false
    window.setTimeout(() => {
        enabled = true
    }, 1);
    alert('Hola!');
}