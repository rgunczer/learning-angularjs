var backdrop = document.querySelector('.backdrop'); // only 1 element is returned
var modal = document.querySelector('.modal');
// var backdrops = document.querySelectorAll('.backdrop'); // retuns all matching elements
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var modalNoButton = document.querySelector('.modal__acton--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');

// console.dir(selectPlanButtons);

for (var i = 0; i < selectPlanButtons.length; ++i) {
    selectPlanButtons[i].addEventListener('click', () => {
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';
        // modal.className = 'open'; // this will overwrite
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

modalNoButton.addEventListener('click', closeModal);

function closeModal() {
    modal.classList.remove('open');
    backdrop.classList.remove('open');
}

backdrop.addEventListener('click', () => {
    // mobileNav.style.display = 'none';
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

toggleButton.addEventListener('click', () => {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})