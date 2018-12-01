
window.onscroll = function () {
    myFunction()
};

var navigationBar = document.getElementById("navigation-bar");
var navigationBarTop = navigationBar.offsetTop;

function myFunction() {
    if (window.pageYOffset > navigationBarTop) {
        navigationBar.classList.add("sticky");
    } else {
        navigationBar.classList.remove("sticky");
    }
}