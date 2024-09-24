var main = document.querySelector(".main");
var crsr = document.querySelector(".crsr");
var vk = document.querySelector(".heading #vk")
var vk2 = document.querySelector(".heading #vk2")
var vk3 = document.querySelector(".heading #vk3")
var box1 = document.querySelector("#virus1")
var box2 = document.querySelector("#virus2")
var box3 = document.querySelector("#virus3")



main.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x-20+"px"
    crsr.style.top = dets.y-20+"px"
})
virus1.addEventListener("mousemove",function(dets){
    vk.style.left = dets.x+"px"
    vk.style.top = dets.y+"px" 

})
box1.addEventListener("mouseenter",function(dets){
    vk.style.opacity = 1
    crsr.style.opacity = 0
    // vk.style.transition.delay = 5
    vk.style.height = '200px'
    vk.style.width = '200px'

})
box1.addEventListener("mouseleave",function(dets){
    vk.style.opacity = 0
    crsr.style.opacity = 1
    vk.style.height = '20px'
    vk.style.width = '20px'


})
// second image
virus2.addEventListener("mousemove",function(dets){
    vk2.style.left = dets.x+"px"
    vk2.style.top = dets.y+"px" 

})
box2.addEventListener("mouseenter",function(dets){
    vk2.style.opacity = 1
    crsr.style.opacity = 0
    vk2.style.height = '200px'
    vk2.style.width = '200px'

})
box2.addEventListener("mouseleave",function(dets){
    vk2.style.opacity = 0
    crsr.style.opacity =1
    vk2.style.height = '20px'
    vk2.style.width = '20px'


})
// third image
virus3.addEventListener("mousemove",function(dets){
    vk3.style.left = dets.x+"px"
    vk3.style.top = dets.y+"px" 

})
box3.addEventListener("mouseenter",function(dets){
    vk3.style.opacity = 1
    vk3.style.height = '200px'
    crsr.style.opacity = 0
    vk3.style.width = '200px'

})
box3.addEventListener("mouseleave",function(dets){
    vk3.style.opacity = 0
    crsr.style.opacity = 1
    vk3.style.height = '20px'
    vk3.style.width = '20px'


})


gsap.to(".fleft .elem",{ 
        duration:5,
        // rerpeat:1,
        transform:"translatey(-300%)",
        // ease: "elastic.out(1,0.3)",
        scrollTrigger:{
        trigger:".features",
        scroller:"body",
        // markers:true,
        start:"top -50%",
        scrub:2,
        end:"top -100%",
        pin:true
    }
})
// heading tag
gsap.from(".heading h1",{
    x:-100,
    opacity:0,
    duration:.5,
    delay:0.5,
    ease: "bounce.out",
    stagger:1,
        // scrollTrigger:{
        //     trigger:".heading h1",
        //     scroller:"body",
        //     start:"-140% top",
        //     markers:true,
        //     end:"bottom bottom",
        //     // markers:true,
        //     scrub:2
    // }
})
gsap.from(".head h1",{
    x:-100,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.5,
    ease: "bounce.out",
        scrollTrigger:{
            trigger:".head h1",
            scroller:"body",
            start:"top center",
            // markers:true,
            end:"bottom 50%",
            // markers:true,
            scrub:2
    }
})

gsap.from(".fright .images",{
    x:100,
    // y:-100,
    opacity:0,
    duration:1,
    delay:0.5,
        scrollTrigger:{
            trigger:".fright",
            scroller:"body",
            start:"top 30%",
            pin:true,
            end:"top 10%",
            scrub:2
    }
})


gsap.from(".slides .slide",{
    y:150,
    x:-100,
    opacity:0,
    delay:1,
    stagger:0.5,
    scrub:2,
    duration:1,
    scrollTrigger:{
        trigger:".slides",
        scroller:"body",
        start:"top 40%",
        end:"bottom 100%",
        // markers:true,
        scrub:2
}
    
})