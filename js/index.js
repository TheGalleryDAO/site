const sources = [
    "/assets/logos/1.svg",
    "/assets/logos/2.svg",
    "/assets/logos/3.svg",
    "/assets/logos/4.svg",
    "/assets/logos/5.svg",
    "/assets/logos/6.svg",
    "/assets/logos/7.svg",
    "/assets/logos/8.svg",
    "/assets/logos/9.svg",
    "/assets/logos/10.svg",
    "/assets/logos/11.svg",

]
let counter = 0
function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

async function imageAnimation(){
    let logo = $("#tgdLogo")
    counter = counter > 10 ? 0:counter + 1
        const size = {
            w:logo.width(),
            h:logo.height()
        }
        logo.attr("src", sources[counter])
        logo.attr('srcset',  sources[counter])
        logo.width(size.w).height(size.h)
    }
setInterval(() => {
    imageAnimation()
}, 500);

// Set the date we're counting down to
var countDownDate = new Date("Feb 23, 2023 15:37:25").getTime();

// Update the count down every 1 second
setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
  console.log("Hola Mundo")

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="counter"
  document.getElementById("counter").innerHTML =`
    <h1><b>${days}d ${hours}:${minutes}:${seconds}</b></h1>
  `
//   <div class="stack" style="--stacks: 3;">
//   <span style="--index: 0;">${days} ${hours}:${minutes}:${seconds}</span>
//   <span style="--index: 1;">${days} ${hours}:${minutes}:${seconds}</span>
//   <span style="--index: 2;">${days} ${hours}:${minutes}:${seconds}</span>
// </div>
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);

imageAnimation()