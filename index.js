window.addEventListener('DOMContentLoaded', (event) => {   
            $(window).on("resize",function(){
                  
                  if(window.matchMedia("(max-width: 1000px)").matches){
                        $(".fa-times").css("display","none")
                  }
      })
     
      $(function(){

            $(".menu_hamburger").on("click",function(e){
                  $(".menu").css("visibility","visible")
                  $(".fa-bars").toggleClass("hidden_class")
                  if($(".fa-bars").hasClass("hidden_class")) {
                        $(".fa-bars").css("display","none")
                        $(".fa-times").css("display","block")
                  }else {
                        $(".menu").css("visibility","hidden")
                        $(".fa-bars").css("display","block")
                        $(".fa-times").css("display","none")
                  }             
                  
            }) 
      })
});
      const trigger_close = $(".menu_hamburger")[1]

      $('#about').on('click', function(e){
            e.preventDefault();
              section_offset = $(".container_info").offset().top;
            $('body,html').animate({
              scrollTop: section_offset -30
            }, 1000);
      });

      $('#benefits').on('click', function(e){
            e.preventDefault();
              section_offset = $(".content_boxes").offset().top;
            $('body,html').animate({
              scrollTop: section_offset -30
            }, 1000);
      });

      $('#prices').on('click', function(e){
            e.preventDefault();
              section_offset = $(".pricing_box").offset().top;
            $('body,html').animate({
              scrollTop: section_offset -30
            }, 1000);
      });

      $('#contact').on('click', function(e){
            e.preventDefault();
              section_offset = $(".form_section_question").offset().top;
            $('body,html').animate({
              scrollTop: section_offset -30
            }, 1000);
      });
