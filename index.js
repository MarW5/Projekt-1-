window.addEventListener('DOMContentLoaded', (event) => {   
            $(window).on("resize",function(){
                  
                  if(window.matchMedia("(max-width: 1000px)").matches){
                        $(".calculator").css("display","none")
                        $(".fa-bars").css("display","block")
                        $(".fa-times").css("display","none")
                        
                        
                  }else{
                        $(".calculator").css("display","flex")
                        $(".fa-bars").css("display","none")
                        $(".fa-times").css("display","none")  
                  }
      })
     
$(function(){

      $(".menu_hamburger").on("click",function(e){
            $(".menu").css("visibility","visible")
            $(".fa-bars").toggleClass("hidden_class")
              if($(".fa-bars").hasClass("hidden_class")){
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
