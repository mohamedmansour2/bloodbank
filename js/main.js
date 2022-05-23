var typed = new Typed('#typed',{
    stringsElement: '#typed-strings',
    backSpeed: 50,
    typeSpeed: 50,
    loop:true
  });

$(document).ready(function(){
    $(".banner-info").fadeIn(3000);
});

$('.title').fadeIn(2000)
$('.edit-about i').fadeIn(2000)
$('.edit-about h3').fadeIn(2000)
$('.edit-about p').fadeIn(2000)

let demoOffset = $('.main-about').offset().top;
$(window).scroll(()=>{
    let wScroll = $(window).scrollTop();

    if(wScroll > demoOffset-150)
    {
        $('.navbar').css
        (
            {
                'position':'fixed' ,
                'width':'100%' , 
                'z-index':'99999',
                "color":"white"
            }
        )
        $('#btnUp').fadeIn(1000)
    }
    else
    {
        $('#btnUp').fadeOut(1000)
    }
})

$('#btnUp').click(()=>{
    $("body,html").animate( {scrollTop:0} , 2000 )
    $('#homeLink').removeClass('activee')
    $('#aboutLink').removeClass('activee')
    $('#collectioLink').removeClass('activee')
    $('#contactLink').removeClass('activee')
})

$('#homeLink').click(()=>{
    $("html,body").animate({scrollTop:0},1000)
    $('#homeLink').addClass('activee')
    $('#aboutLink').removeClass('activee')
    $('#collectioLink').removeClass('activee')
    $('#contactLink').removeClass('activee')
})

$('#aboutLink').click(()=>{
    let demoOffset = $('.main-about').offset().top;
    $('body,html').animate( {scrollTop:demoOffset-190} ,1000 )
    $('#aboutLink').addClass('activee')
    $('#collectioLink').removeClass('activee')
    $('#contactLink').removeClass('activee')
    $('#homeLink').removeClass('activee')
})

$('#collectioLink').click(()=>{
    let demoOffset2 = $('#collection').offset().top;
    $("html,body").animate({scrollTop:demoOffset2-100},1000)
    $('#collectioLink').addClass('activee')
    $('#aboutLink').removeClass('activee')
    $('#contactLink').removeClass('activee')
    $('#homeLink').removeClass('activee')
})

$('#contactLink').click(()=>{
    let demoOffset3 = $('#contact').offset().top;
    $('html,body').animate({scrollTop:demoOffset3-100},1000)
    $('#contactLink').addClass('activee')
    $('#collectioLink').removeClass('activee')
    $('#homeLink').removeClass('activee')
    $('#aboutLink').removeClass('activee')
})

$(document).ready(function () 
{
    $('.sk-chase').fadeOut(1000,(()=>{
        $('#loading').fadeOut(1000)
        $('body').css('overflowY','visible')
    }))
})


