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
    console.log("Hello")
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


imageAnimation()