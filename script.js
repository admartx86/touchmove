//document.getElementById("mousePosition")

function mouseCoordinates(e) {
    document.getElementById("mousePosition").innerHTML = "X" + e.clientX + "Y" + e.clientY
}

document.addEventListener("mousemove", mouseCoordinates)

  