document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById("scrollButton");
  
    window.onscroll = function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    };
  
    scrollButton.onclick = function() {
      scrollToTop();
    };
  
    function scrollToTop() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  
      if (currentScroll > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    }
  });