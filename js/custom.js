
function headerbg(){
  var scroll = $(window).scrollTop();  
   if (scroll >= 50) {
    $("header").addClass("header-bg");
   } 
   else {
     $("header").removeClass("header-bg");
    }
   }

 
$(window).scroll(function() {    
     headerbg();
});/* =========scroll End========= */ 


/* =========Ready Start========= */
$(document).ready(function(){
	  $("#menuShow").on('click', function(e){
		$('#menubox').toggleClass('menu-slide');
	  });
	  $("#menuClose").on('click', function(e){
		$('#menubox').toggleClass('menu-slide');
	  });
	  
$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},6000);
	});
	
});/* =========Ready End========= */ 

$('.companiesSlider').slick({
    slidesToShow:4,
    slidesToScroll: 1,
    autoplay:false,
    /* autoplaySpeed: 1000, */
    infinite:false,
    dots: false,
    arrows:true,
       responsive: [
        {
          breakpoint:1200,
          settings: {
            arrows: true,
            slidesToShow:3
          }
        },
        {
          breakpoint:991,
          settings: {
            arrows: true,
            slidesToShow:2
          }
        },
        {
          breakpoint:767,
          settings: {
            arrows: true,
            slidesToShow:1
          }
        }
      ]
    }); 

/* ============Scroll Effect END=============== */

 $(document).on("click",".head-user-img",function(){
      $(".head-drop-down").toggleClass("show"); 
     });

 /*********Filter*********/

         $(document).ready(function(){
             $(".filter").click(function(){
                 $(".filter_dropdown").toggleClass("show");
             });
        
         });
           

