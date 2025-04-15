let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-list');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

document.getElementById('scrollDownBtn').addEventListener('click', () => {
    // Scroll down by the viewport height (smooth scrolling)
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  });