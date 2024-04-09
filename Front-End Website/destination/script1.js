let toggleButton = document.querySelector('.toggle_button');
let mobileNav = document.querySelector('.mobile__nav');
let closeBtn = document.querySelector('.btn');

toggleButton.addEventListener('click', function () {
    mobileNav.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
    mobileNav.style.display = 'none';
})





