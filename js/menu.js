const menuBtn = document.querySelector('.sp_menu_btn');
const navMenu = document.querySelector('.nav_menu');
const menuLinks = navMenu.querySelectorAll('a');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!menuBtn.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove('active');
  }
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});