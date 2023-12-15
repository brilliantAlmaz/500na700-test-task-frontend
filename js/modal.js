const modalBox = document.querySelector('.modal');
const modalBtn = document.querySelectorAll('.header-btn');
const modalExit = modalBox.querySelector('.exit');

modalBtn.forEach((item) => {
   item.addEventListener('click', (e) => {
      e.preventDefault();
      modalBox.classList.add('active');
      document.querySelector('.mask').classList.add('active');
      document.querySelector('html').classList.add('lock')
      document.querySelector('body').classList.add('lock')
   })
})


modalExit.addEventListener('click', () => {
   modalBox.classList.remove('active');
   document.querySelector('.mask').classList.remove('active');
   document.querySelector('html').classList.remove('lock')
   document.querySelector('body').classList.remove('lock')
})

document.querySelector('.mask').addEventListener('click', () => {
   modalBox.classList.remove('active');
   document.querySelector('.mask').classList.remove('active');
   document.querySelector('html').classList.remove('lock')
   document.querySelector('body').classList.remove('lock')
})
