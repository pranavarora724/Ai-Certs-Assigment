
// SLIDES ANIMATION
let slideIndex = 0;
let dots = document.getElementsByClassName("dot");

showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

// FAQs Animation
const btns = document.querySelectorAll(".acc-btn");

// fn
function accordion() {
  // this = the btn | icon & bg changed
  this.classList.toggle("is-open");

  // the acc-content
  const content = this.nextElementSibling;

  // IF open, close | else open
  if (content.style.maxHeight) content.style.maxHeight = null;
  else content.style.maxHeight = content.scrollHeight + "px";
}

// event
btns.forEach((el) => el.addEventListener("click", accordion));


// Countdown TIMER

(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "06/09/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());

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

gsap.to('.nav_container' , {
  backgroundColor: 'black',
    scrollTrigger:{
    trigger:'.countdown_container',
    start:'top 70%',
    toggleActions: 'play none none reverse',
    // markers:true
  }
})

gsap.from('.countdown_container',{
  opacity:0,
  y:50,
  duration:0.7,

  scrollTrigger:{
    trigger:'.countdown_container',
    toggleActions: 'play none none reverse',
    start:'top 70%',
// markers:true

  }
})

gsap.from('.left_div',{
  opacity:0,
  y:50,
  duration:0.7,

  scrollTrigger:{
    trigger:'.left_div',
    toggleActions: 'play none none reverse',
    start:'top 70%',
// markers:true

  }
})


gsap.from('.right_div',{
  opacity:0,
  y:-50,
  duration:0.7,

  scrollTrigger:{
    trigger:'.right_div',
    toggleActions: 'play none none reverse',
    start:'top 70%',
// markers:true

  }
})

gsap.from('.footer_left_div',{
  opacity:0,
  y:90,
  duration:1,

  scrollTrigger:{
    trigger:'.footer_left_div',
    toggleActions: 'play none none reverse',
    start:'top 90%',
// markers:true

  }
})

gsap.from('.footer_right_div',{
  opacity:0,
  y:-90,
  duration:1,

  scrollTrigger:{
    trigger:'.footer_right_div',
    toggleActions: 'play none none reverse',
    start:'top 70%',
// markers:true

  }
})