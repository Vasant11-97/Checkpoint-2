var headerBox = document.querySelector(".header-box");
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        headerBox.classList.add('header-box-0');
        console.log("Vasant")
    } 
    if (window.scrollY < 200) {
        headerBox.classList.remove('header-box-0');
        console.log("Vasant")
    } 
  });


