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

$(document).ready(function(){
  var show_btn=$('.show-modal');
  var show_btn=$('.show-modal');
  //$("#testmodal").modal('show');
  
    show_btn.click(function(){
      $("#testmodal").modal('show');
  })
});


