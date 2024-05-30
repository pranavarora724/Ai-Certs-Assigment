
   // SIDEBAR ANIMATION
   var sidebar_open = false;
   console.log("Sidebar_open = " , sidebar_open);
   let hamburger = document.querySelector("#hamburger_icon_span");
   console.log("Hamburger = " , hamburger);
   
   hamburger.addEventListener("click" , function(){
   
     
     console.log("Hamburger clcked");
     if(sidebar_open == false)
       {
         gsap.to('.sidebar',{
           // y:0,
           duration:1,
           opacity: 1,
           height: 350,
           display:'block'
         })
   
         gsap.to('.sidebar_link_container',{
           // y:0,
           duration:1,
           opacity: 1,
           height: 350
         })
         sidebar_open=true;
         
       }
   
       else{
         gsap.to('.sidebar',{
           // y:-450,
           duration:0.5,
           opacity:0,
           height:0,
           display:'none'
   
           // {height: 0}
         })
   
         gsap.to('.sidebar_link_container',{
           // y:-450,
           duration:0.5,
           opacity:0,
           height:0,
   
           // {height: 0}
         })
   sidebar_open=false;
       }
   })