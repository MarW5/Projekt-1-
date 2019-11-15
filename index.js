window.addEventListener('DOMContentLoaded', (event) => {
      
      const hamburger= document.querySelector(".menu_hamburger")
      const menu = document.querySelector(".menu")
      const calculator = document.querySelector('.calculator')
      console.log(hamburger)

      window.addEventListener("resize",function(e){
            if(window.innerWidth < 1000){
            hamburger.style.display= "block";
            calculator.style.display = "none";
            console.log("działa")

      }else{
            hamburger.style.display = "none";
            calculator.style.display = "flex";
            
      }

      })
      // $(function(){
      //                   window.addEventListener("resize",function(e){

      //                   if(window.innerWidth<1000){

      //                   $(".menu_hamburger").on("click",function(e){
      //                         menu.style.visibility= "visible";
      //                         $(".menu").toggleClass("hidden_class");

                              
                         
      //                    })   
      //              }else{
      //                   menu.style.visibility= "hidden";
      //              }
      //       })
      // })


$(function(){

      $(".menu_hamburger").on("click",function(e){
            menu.style.visibility= "visible";
            $(".menu").toggle("slide-up");
            $(".fa-bars").toggleClass("hidden_class")

            if($(".fa-bars").hasClass("hidden_class")){ 
                  $(".fa-times").css("display","block")

      }else if 
            ($(".fa-times").hasClass("show_class")){

            $(".fa-times").css("display","none")
      }
            
            
            
      }) 
})
 

});
