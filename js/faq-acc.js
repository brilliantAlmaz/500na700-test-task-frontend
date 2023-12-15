const accItems = document.querySelectorAll('.faq-item');

// данные о высотах блоков с ответами
const accItemsAnswerHeight = [];
accItems.forEach((item) => {
   accItemsAnswerHeight.push(item.querySelector('.faq-answer').clientHeight + 30);
})

// обнуление высот ответов
accItems.forEach((item) => {
   item.querySelector('.faq-answer').style.height = 0;
})



accItems.forEach((item, index) => {
   item.addEventListener('click', () => {
      accItems.forEach((j) => {
         j.classList.remove('active')
         j.querySelector('.faq-answer').style.height = 0;
      })
      item.classList.add('active');
      item.querySelector('.faq-answer').style.height = accItemsAnswerHeight[index] + 'px';
   })
})