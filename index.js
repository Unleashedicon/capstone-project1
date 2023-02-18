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

const musicians = [
  {
    name: 'Drake',
    image: './Images/drake.jpg',
    alt: 'Drake image',
    title: 'Rapper, Singer, Songwriter',
    description: 'Drake is a Grammy-award winning rapper, singer, and songwriter from Canada, known for his smooth flow and introspective lyrics.',
    class: 'musician-card',
  },
  {
    name: 'Rema',
    image: './Images/rema.jpg',
    alt: 'Rema image',
    title: 'Afrobeat Singer, Songwriter',
    description: 'Rema is a Nigerian Afrobeat singer and songwriter, known for his unique blend of afrobeats, hip-hop, and R&B.',
    class: 'musician-card',
  },
  {
    name: 'Billie Eilish',
    image: './Images/billieeliish.jpg',
    alt: 'Billie Eilish image',
    title: 'Singer, Songwriter',
    description: 'Billie Eilish is an American singer and songwriter, known for her unique style of pop and alternative music, and her powerful voice.',
    class: 'musician-card hidden',
  },
  {
    name: 'Bad Bunny',
    image: './Images/badbunny.jpg',
    alt: 'Bad Bunny image',
    title: 'Reggaeton Singer, Songwriter',
    description: 'Bad Bunny is a Puerto Rican reggaeton singer and songwriter, known for his unique blend of reggaeton, Latin trap, and hip-hop.',
    class: 'musician-card hidden',
  },
  {
    name: 'Hozier',
    image: './Images/Hozier.jpg',
    alt: 'Hozier image',
    title: 'Singer, Songwriter',
    description: 'Irish singer-songwriter known for his soulful blues-inspired by rock sound and socially conscious lyrics.',
    class: 'musician-card hidden',
  },
  {
    name: 'BTS',
    image: './Images/BTS.jpg',
    alt: ' BTS image',
    title: 'South Korean boy band',
    description: 'South Korean boy band known for their energetic pop-rap tracks and visually stunning music videos.',
    class: 'musician-card hidden',
  }];

const musiciansblock = document.querySelector('.musiciansblock');

for (let i = 0; i < musicians.length; i += 1) {
  const musiccontainer = document.createElement('div');
  musiccontainer.className = musicians[i].class;
  musiciansblock.appendChild(musiccontainer);

  const musicianimage = document.createElement('img');
  musicianimage.src = musicians[i].image;
  musicianimage.alt = musicians[i].alt;
  musiccontainer.appendChild(musicianimage);

  const concertblock = document.createElement('div');
  concertblock.className = 'concert-block';
  musiccontainer.appendChild(concertblock);

  const musicianname = document.createElement('h3');
  musicianname.textContent = musicians[i].name;
  concertblock.appendChild(musicianname);

  const title = document.createElement('h4');
  title.textContent = musicians[i].title;
  concertblock.appendChild(title);

  const line = document.createElement('hr');
  concertblock.appendChild(line);

  const description = document.createElement('p');
  description.textContent = musicians[i].description;
  concertblock.appendChild(description);
}

const showmorebutton = document.getElementById('showmore');
const showlessbutton = document.getElementById('showless');
const cards = Array.from(document.querySelectorAll('.musician-card')).filter((card) => card.classList.contains('hidden'));

showmorebutton.addEventListener('click', () => {
  cards.forEach((card) => {
    card.classList.remove('hidden');
  });

  showmorebutton.style.display = 'none';
  showlessbutton.style.display = 'block';
});

showlessbutton.addEventListener('click', () => {
  for (let i = 0; i < cards.length; i += 1) {
    cards[i].classList.add('hidden');
  }

  showmorebutton.style.display = 'block';
  showlessbutton.style.display = 'none';
});
