 gsap.to(".d2",{
        x:100,
        duration:2,
        ease:"power2.out"
    }); 
gsap.from('#sp',{
    y:200,
    duration:1.7,
    ease:"power1.in"
});    
// gsap.to(".d3",{
//         x:100,
//         duration:2,
//         ease:"power2.out"

        
//     }); 
// gsap.from('.d4',{
//     z:10,
//     duration:1.7,
//     ease:"power1.in"
// });    


gsap.fromTo("#d5",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    duration: 0.9,
    scrollTrigger: {
      trigger: "#d5",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    }
  }
);
gsap.to('.d4',{
    x:100,
    duration:3,
    ease:"power1.in"
}); 
gsap.from('.right',{
    x:100,
    duration:3,
    ease:"power1.in"
}); 
gsap.to('.left',{
    x:100,
    duration:3,
    ease:"power1.in"
}); 
gsap.fromTo("#ph",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    duration: 0.9,
    scrollTrigger: {
      trigger: "#ph",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    }
  }
);
gsap.to('#project1',{
    x:100,
    duration:3,
    ease:"power1.in",
    scrollTrigger: {
      trigger: "#project1",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    }
}); 
gsap.to('#contact',{
    x:100,
    duration:3,
    ease:"power.in",
    scrollTrigger: {
      trigger: "#contact",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    }
}); 
gsap.from('#infom',{
    y:100,
    duration:3,
    ease:"power1.in",
    scrollTrigger: {
      trigger: "#infom",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    }
}); 

 

