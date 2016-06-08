$(document).ready(function(){
console.log("connected")
//everything in here will have access to DOM elements

  $('button').click(function(){
    $('img').removeClass().addClass('animated bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
      $(this).removeClass();

})

})
