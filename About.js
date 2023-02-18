document.addEventListener('DOMContentLoaded', () => {
  const ham = document.querySelector('.hambuger');
  const menu = document.querySelector('.nav-menu');
  const close = document.querySelector('.fa-solid.fa-xmark');
  const bars = document.querySelector('.fa-solid.fa-bars');
  ham.addEventListener('click', () => {
    menu.classList.toggle('show');
    if (menu.classList.contains('show')) {
      bars.style.display = 'none';
      close.style.display = 'block';
    } else {
      bars.style.display = 'block';
      close.style.display = 'none';
    }
  });
  close.addEventListener('click', () => {
    menu.classList.remove('show');
    bars.style.display = 'block';
    close.style.display = 'none';
  });
  const links = menu.querySelectorAll('ul li a');
  for (let i = 0; i < links.length; i += 1) {
    links[i].addEventListener('click', () => {
      if (window.matchMedia('(max-width:768px)').matches) {
        const sectionclass = links[i].getAttribute('href');
        const section = document.querySelector(sectionclass);
        section.scrollIntoView({ behavior: 'smooth' });
        menu.classList.remove('show');
        bars.style.display = 'block';
        close.style.display = 'none';
      }
    });
  }
});