import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { useRef, useEffect } from "react";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import "./Home.css"
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Home = () => {
     let panels = gsap.utils.toArray(".panel"),
     observer = ScrollTrigger.normalizeScroll(true),
     scrollTween;

     
function goToSection(i) {
     scrollTween = gsap.to(window, {
       scrollTo: {y: i * 800, autoKill: true},
       onStart: () => {
         observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
         observer.enable();
       },
       duration: 1,
       onComplete: () => scrollTween = null,
       overwrite: true
     });
   }
   ScrollTrigger.create({
     start: 0, 
     end: "max",
     snap: 1 / (panels.length - 1)
   })
   
   

  useEffect(() => {
     let panels = gsap.utils.toArray(".panel")
     
panels.forEach((panel, i) => {
     ScrollTrigger.create({
       trigger: panel,
       start: "top bottom",
       end: "+=199%",
       onToggle: self => self.isActive && !scrollTween && goToSection(i)
     });
   });
  
      }, []);

  return (
   <>
  <section class="description panel blue">
  <div>
    <h1>Layered pinning</h1>
    <p>Use pinning to layer panels on top of each other as you scroll.</p>
    <div class="scroll-down">Scroll down<div class="arrow"></div></div>
  </div>
</section>


<section style={{backgroundColor:"red"}} class="panel red">
	ONE
</section>
<section style={{backgroundColor:"green"}}  class="panel orange">
	TWO
</section>
<section style={{backgroundColor:"orange"}}  class="panel purple">
	THREE
</section>
<section  style={{backgroundColor:"blue"}}  class="panel green">
	FOUR
</section>

<header>
   <a href="https://greensock.com/scrolltrigger">
     <img class="greensock-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg" width="200" height="64" />
  </a> 
</header></>
  );
};

export default Home;
