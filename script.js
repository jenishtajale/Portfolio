$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(`.navbar`).addClass("sticky");
        }else{
            $(`.navbar`).removeClass("sticky");
        }
    });
    $( '.menu-btn').click(function(){
        $('.navbar .nav-links').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });
});

var typed= new Typed(".typing",{
    strings:["Web Developer", "Designer", "Speaker", "Student"],
    typeSpeed: 100,
    backSpeed:60,
    loop: true
});
var typed= new Typed(".typing-2",{
    strings:["Web Developer", "Designer", "Speaker", "Student"],
    typeSpeed: 100,
    backSpeed:60,
    loop: true
});