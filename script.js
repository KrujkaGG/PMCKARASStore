let classLink = '.main-link';

window.onscroll = function() {
  let h = document.documentElement.clientHeight;

  if (window.scrollY >= h * 4) {
    classLink = '.comments-link';
  } else if (window.scrollY >= h * 3) {
    classLink = '.works-link';
  } else if (window.scrollY >= h * 2) {
    classLink = '.skills-link';
  } else if (window.scrollY >= h) {
    classLink = '.about-link';
  } else {
    classLink = '.main-link';
  }

  let activeBtn = document.querySelector('.nav-link.active');
  let newActiveBtn = document.querySelector(classLink);

  if (newActiveBtn && activeBtn && !newActiveBtn.classList.contains('active')) {
    newActiveBtn.classList.add('active');
    activeBtn.classList.remove('active');
  }
};

const mobileButton = document.querySelector('.mobile-button');
const mobileMenu = document.querySelector('.mobile-menu');
const fixedMenu = document.querySelector('.fixed-menu') || document;

if (mobileButton && mobileMenu) {
  mobileButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hide');
  });
}

fixedMenu.addEventListener('click', function(event) {
  const target = event.target;
  const link = target.closest ? target.closest('.nav-link') : null;
  if (!link) return;

  const activeBtn = document.querySelector('.nav-link.active');
  if (activeBtn && activeBtn !== link) activeBtn.classList.remove('active');
  link.classList.add('active');

  if (mobileMenu && !mobileMenu.classList.contains('hide')) {
    mobileMenu.classList.add('hide');
  }
});