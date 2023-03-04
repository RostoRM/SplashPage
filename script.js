const title = document.querySelector('h1');
const text = document.querySelector('p');

const backgrounds = [
  { name: 'background-0' },
  { name: 'background-1' },
  { name: 'background-2' },
  { name: 'background-3' },
];

const { body } = document;

const stylingBackground2 = () => {
  body.classList.add('background-2');
  title.style.color = '#fff';
  text.style.color = '#fff';
};

const stylingBackground3 = () => {
  body.classList.add('background-3');
  title.style.color = '#2d2b2b';
  text.style.color = '#000';
};

const setLocalStorage = (index) => {
  localStorage.setItem('saveBackgrounds', backgrounds[`${index}`].name);
};

const changeBackground = (number) => {
  // Check if Background Already Showing
  let currentBackground = false;
  let previousBackground;

  if (body.className) {
    previousBackground = body.className;
  }
  // Reset CSS Class for Body
  body.className = '';
  title.style.color = '';
  text.style.color = '';

  switch (number) {
    case '1':
      if (previousBackground === 'background-1') {
        currentBackground;
        setLocalStorage(0);
      } else {
        body.classList.add('background-1');
        setLocalStorage(1);
      }
      break;
    case '2':
      if (previousBackground === 'background-2') {
        currentBackground;
        setLocalStorage(0);
      } else {
        stylingBackground2();
        setLocalStorage(2);
      }
      break;
    case '3':
      if (previousBackground === 'background-3') {
        currentBackground;
        setLocalStorage(0);
      } else {
        stylingBackground3();
        setLocalStorage(3);
      }
      break;

    default:
      break;
  }
};

const getBackground = () => {
  const localBackground = localStorage.getItem('saveBackgrounds');
  localBackground ? body.classList.add(localBackground) : localStorage.setItem('saveBackgrounds', backgrounds[0].name);
  localBackground === 'background-2' ? stylingBackground2() : null;
  localBackground === 'background-3' ? stylingBackground3() : null;
};

// On Load
getBackground();
