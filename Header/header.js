const header = document.getElementById('header');
const home = document.getElementById('home');
const bio = document.getElementById('bio');
const contact = document.getElementById('contact');
const main = document.getElementById('main');
const info = document.getElementById('info');
const text = document.getElementById('text');
const main2 = document.getElementById('main2');
const menu = document.getElementById('menu');
const modeButton = document.getElementById('modeButton');
const fas = document.getElementById('fas');
const light = document.getElementById('light');

let x = localStorage.getItem('mode');
let a = localStorage.getItem('page');

      home.onclick = () => {
        main.style.display = 'block';
        home.classList.add('active');
        bio.classList.remove('active');
        contact.classList.remove('active')
        text.style.display = 'none';
        info.style.display = 'none';
        a = 'home';
        localStorage.setItem('page', a)
      }

      bio.onclick = () => {
        text.style.display = 'block'
        bio.classList.add('active');
        home.classList.remove('active');
        contact.classList.remove('active');
        main.style.display = 'none';
        info.style.display = 'none';
        a = 'bio'
        localStorage.setItem('page', a)
      }

      contact.onclick = () => {
        text.style.display = 'none';
        contact.classList.add('active');
        bio.classList.remove('active');
        home.classList.remove('active')
        main.style.display = 'none';
        info.style.display = 'block';
        a = 'contact';
        localStorage.setItem('page', a)
      }
      
     const toggleMode = () => {
      if (main2.classList.contains('light')) {
           main2.classList.remove('light');
           main2.classList.add('dark');
           fas.classList.add('fa-moon');
           light.innerHTML = 'Dark';
           x = 'dark'
      } else {
          main2.classList.add('light');
          main2.classList.remove('dark');
          fas.classList.remove('fa-moon');
          light.innerHTML = 'Light';
          x = 'light'
      };

      if (header.classList.contains('light')) {
           header.classList.remove('light');
           header.classList.add('dark');      
      } else {
          header.classList.add('light');
          header.classList.remove('dark');
      };

      modeButton.classList.contains('margin') ? modeButton.classList.remove('margin') : modeButton.classList.add('margin');
      localStorage.setItem('mode', x);      
    };

  if(x === 'light') toggleMode()
  if(x === 'dark') toggleMode()

  if(a === 'home') home.onclick()
  if(a === 'bio') bio.onclick()
  if(a === 'contact') contact.onclick()