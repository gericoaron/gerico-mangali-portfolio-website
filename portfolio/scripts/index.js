//toggel dm/lm
let button = document.querySelector('.btn')

button.addEventListener('click', ()=>{
  document.documentElement.classList.toggle('dark-mode')
})
$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);
