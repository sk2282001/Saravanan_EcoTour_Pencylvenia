let toggleButton = document.querySelector('.toggle_button');
let mobileNav = document.querySelector('.mobile__nav');
let closeBtn = document.querySelector('.btn');

toggleButton.addEventListener('click', function () {
    mobileNav.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
    mobileNav.style.display = 'none';
})

function openPopup(event) {
    const form = document.querySelector('.fill-up')
    form.style.display = "block";
    event.preventDefault();
}

function closePopup(event) {
    const cbtn = document.querySelector('.fill-up');
    cbtn.style.display = "none";
    event.preventDefault();
}
