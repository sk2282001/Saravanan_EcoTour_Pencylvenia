let toggleButton = document.querySelector('.toggle_button');
let mobileNav = document.querySelector('.mobile__nav');
let closeBtn = document.querySelector('.btn');

document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll("nav p");

    const grouping = document.querySelector(".grouping");
    const groupings = document.querySelector(".groupings");
    const gallery = document.querySelector(".gallery");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {

            grouping.style.display = "none";
            groupings.style.display = "none";
            gallery.style.display = "none";

            const targetClass = this.classList[0];

            switch (targetClass) {
                case "high":
                    grouping.style.display = "flex";
                    break;
                case "des":
                    groupings.style.display = "flex";
                    break;
                case "gal":
                    gallery.style.display = "flex";
                    break;
                default:
                    break;
            }
        });
    });
});

toggleButton.addEventListener('click', function () {
    mobileNav.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
    mobileNav.style.display = 'none';
})


const initslider = () => {
    const imagelist = document.querySelector(".courosal .img-list");
    const slideButtons = document.querySelectorAll(".courosal .s-btn");

    slideButtons.forEach(button => {
        button.addEventListener('click', () => {
            const direction = button.id === "prev" ? -1 : 1;
            const scrollAmount = imagelist.clientWidth * direction;
            
            if (direction === -1 && imagelist.scrollLeft === 0) {
                imagelist.scrollTo({ left: imagelist.scrollWidth, behavior: "smooth" });
            } else if (direction === 1 && imagelist.scrollLeft + imagelist.clientWidth >= imagelist.scrollWidth) {
                imagelist.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                imagelist.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        });
    });
};

window.addEventListener("load", initslider);

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.tracking-details nav p');
  
    navItems.forEach(function(navItem) {
      navItem.addEventListener('click', function() {
        navItems.forEach(function(item) {
          item.classList.remove('active-nav');
        });
  
        this.classList.add('active-nav');
      });
    });
  });
