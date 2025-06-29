const menuEventOpenBtn=document.querySelector("#open_btn");
const menuEventCloseBtn=document.querySelector("#close_btn");
menuEventOpenBtn.addEventListener("click",()=>{
    document.body.classList.toggle("Show_menu");
});
menuEventCloseBtn.addEventListener("click",()=>menuEventOpenBtn.click()
    
)

const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
