window.onscroll = function() {scrollFunction()};

const activateNavbarThreshold = screen.height * 0.5
function scrollFunction() {
  if (document.body.scrollTop > activateNavbarThreshold || document.documentElement.scrollTop > activateNavbarThreshold) {
    document.getElementById("navigation-bar").style.top = "0";
  } else {
    document.getElementById("navigation-bar").style.top = "-100px";
  }
}