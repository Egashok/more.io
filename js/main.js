$(function(){
    $('.header__slider').slick({
        dots:true,
        fade:true,
        prevArrow:'<img class="slider__arrow header__up" src="img/arrowup.svg">',
        nextArrow:'<img class="slider__arrow header__down" src="img/arrowdo.svg">',
    });
    $('.product__slider').slick({
      
        slidesToShow:6 ,
        slideToScroll:1,
        arrows:true,
        infinite:true,
        vertical:true,
        focusOnSelect: true,
        nextArrow:'<img class="pro__next" src="img/prd.png">',
        prevArrow:'<img class="pro__last" src="img/pru.png">',
        responsive: [
            {
              breakpoint: 860,
              settings: {
                vertical:false,
                slidesToShow: 3,
               arrows:false,
                dots:true,
            
              }
            
            },
            { 
            breakpoint: 540,
            settings: {
                arrows:false,
                dots:true,
                vertical:false,
              slidesToShow:2,
               }
            },
            { 
               
                }
            ]
     
    });
    $('.menu__btn').on('click',function(){
        $('.menu__list').toggleClass('active');
      
    })
        
 
  
  
});