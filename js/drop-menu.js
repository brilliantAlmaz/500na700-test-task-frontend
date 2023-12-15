const headerDropLinks = document.querySelectorAll('.has-drop .header-link');

// смотрим по экрану. на мобилках клик, на десктопах наводка
headerDropLinks.forEach((item) => {
   if (window.innerWidth > 960) {
      item.addEventListener('mouseenter', eventEnter)

   }
   else {
      item.removeEventListener('mouseenter', eventEnter)
      item.addEventListener('click', eventClick)

   }
})


// если меняется экран, меняем тип ивента открывания меню
window.addEventListener('resize', () => {
   headerDropLinks.forEach((item) => {
      if (window.innerWidth > 960) {
         item.removeEventListener('mouseenter', eventClick)

         item.addEventListener('mouseenter', eventEnter)
      }
      else {
         item.removeEventListener('mouseenter', eventEnter)
         item.addEventListener('click', eventClick)
      }
   })
})

// если курсор ушел за края меню, скрывать меню
window.addEventListener('mouseover', (e) => {
   if (window.innerWidth > 960) { // только для устройств с шириной дисплея > 960
      let element = e.target.parentNode;
      if (!(element.classList.contains('drop-body') || element.classList.contains('header-drop-menu') || element.classList.contains('has-drop'))) {
         headerDropLinks.forEach((item) => {
            item.parentNode.querySelector('.header-drop-menu').classList.remove('active');
         })
      }
   }

})



function eventEnter() {
   this.parentNode.querySelector('.header-drop-menu').classList.add('active')
}
function eventClick() {
   this.parentNode.querySelector('.header-drop-menu').classList.toggle('active')

}