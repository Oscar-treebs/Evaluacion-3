function displayMenu() {
    var display;
    var menu = document.getElementById("nav")
    display = nav.style.display;

    if (display == "none") {
        nav.style.display = "block"
    }
    else {
        nav.style.display = "none";
    }
}