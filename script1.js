function toggleNav() {
    var element = document.getElementById("sidenav");
    if (element.style.width == "235px") {
        element.style.width = "0px";
    } else {
        element.style.width = "235px";
    }
}