const tl = gsap.timeline({defaults: {duration: 0.75}})

tl.fromTo('.header-text', {scale: 0}, {scale: 1})
tl.fromTo('.name', {opacity: 0, x:-50, rotation:'-45deg'}, {opacity: 1, x: 0, rotation:'0deg'})
tl.fromTo('.header-title', {x:30, opacity:0}, {x:0, opacity:1})
tl.fromTo('.tagline', {x:30, opacity:0}, {x:0, opacity:1})



