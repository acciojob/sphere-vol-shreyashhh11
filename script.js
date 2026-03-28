function volume_sphere(event) {
    event.preventDefault(); // stop page reload

    let radius = document.getElementById("radius").value;
    radius = parseFloat(radius);

    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = "NaN";
        return;
    }

    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById("volume").value = volume.toFixed(4);
}

window.onload = function () {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};