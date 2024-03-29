// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

function lenis() {
  ("use strict"); // fix lenis in safari
  const lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 0.7,
    infinite: false,
    gestureOrientation: "vertical",
    normalizeWheel: false,
    smoothTouch: false,
    syncTouchLerp: 1,
    touchMultiplier: 0.1,
    autoResize: true,
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  function connectToScrollTrigger() {
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }
  // Uncomment this if using GSAP ScrollTrigger
  connectToScrollTrigger();
}

function pixel() {
  const pixel = document.querySelectorAll(".pixel__item");
  var t1 = gsap.timeline();
  t1.to(pixel, {
    visibility: "hidden",
    stagger: {
      each: 0.05,
      from: "random",
    },
  })
    .duration(10)
    .play(1);
}

async function animDepixelate($el) {
  const $parent = $el.parentNode;
  
  $parent.classList.add('-pixelated')

  const previousCanvas = $parent.querySelector('canvas')
  if(previousCanvas) previousCanvas.remove();

  // add canvas
  const canvas = document.createElement('canvas')
  canvas.style.zIndex = 10
  $parent.appendChild(canvas);
  console.log(canvas);
  const ctx = canvas.getContext('2d')
  console.log(ctx);

  // handle dimensions
  const maxWidth = 128;
  let w = $el.naturalWidth;
  let h = $el.naturalHeight;
  if(w > maxWidth) {
      h = maxWidth*(h/w)
      w = maxWidth
  }

  // do the thing
  // const pixelate = async (sample_amount) => {
  //     return new Promise(resolve => {
  //         if(!canvas.parentNode) {
  //             resolve()
  //             return
  //         }

  //         const sample_size = Math.round(w/sample_amount)

  //         ctx.canvas.width = w
  //         ctx.canvas.height = h
  //         ctx.drawImage($el, 0, 0, w, h);

  //         const pixelArr = ctx.getImageData(0, 0, w, h).data;

  //         for (let y = 0; y < h; y += sample_size) {
  //             for (let x = 0; x < w; x += sample_size) {
  //                 const p = (x + (y*w)) * 4;
  //                 ctx.fillStyle = "rgba(" + pixelArr[p] + "," + pixelArr[p + 1] + "," + pixelArr[p + 2] + "," + pixelArr[p + 3] + ")";
  //                 ctx.fillRect(x, y, sample_size, sample_size);
  //             }
  //         }

  //         resolve()
  //     })
  // }

  // // timeline
  // const ITERATION_DELAY = 100;
  // const delay = ms => new Promise(res => setTimeout(res, ms));
  // await pixelate(8);
  // await delay(ITERATION_DELAY);
  // await pixelate(16);
  // await delay(ITERATION_DELAY);
  // await pixelate(32);
  // await delay(ITERATION_DELAY);
  // await pixelate(48);
  // await delay(ITERATION_DELAY);
  // await pixelate(96);
  // await delay(ITERATION_DELAY);
  // await pixelate(128);
  // await delay(ITERATION_DELAY);
  // await pixelate(250);
  // await delay(ITERATION_DELAY);
  // await pixelate(512);
  // await delay(ITERATION_DELAY);

  setTimeout(() => {
    canvas.remove();
    $parent.classList.remove('-pixelated')
  }, 1000);
  // remove canvas
  // canvas.remove();
  // $parent.classList.remove('-pixelated')
}

function hero() {
  // const hero = document.querySelector(".hero");
  // const heroTitle = document.querySelector(".hero-title-animation");
  // const heroTitleWidth = heroTitle.scrollWidth * -2;
  // // console.log(heroTitle,heroTitleWidth);
  // gsap.fromTo(
  //   heroTitle,
  //   { x: heroTitleWidth },
  //   {
  //     x: 0,
  //     scrollTrigger: {
  //       trigger: hero,
  //       scrub: 0.5,
  //     },
  //   },
  // );
}

function intro() {
  let typeSplit = new SplitType(".splited-text", {
    types: "words, chars",
    tagName: "span",
  });
  let timeline_1 = gsap.timeline();
  timeline_1.to("#white-bevelled-box", {
    scrollTrigger: {
      trigger: "#white-bevelled-box",
      start: "top 10%",
      scrub: 0.3,
      //markers: true,
    },
    scale: 1.05,
  });
  timeline_1.from(".is--animated_text .char", {
    scrollTrigger: {
      trigger: "#white-bevelled-box",
      start: "top 10%",
      end: "+=2000",
      scrub: 1,
    },
    opacity: 0.01,
    scale: 1.35,
    ease: "back.out(2)",
    stagger: { amount: 10, from: "start" },
  });
}

function gallery() {
  const gallery = document.querySelector(".gallery__items");
  const galleryItems = document.querySelectorAll(".gallery__item");
  const galleryItemsInner = document.querySelectorAll(".gallery__item-inner");
  const gallery_x1 = [650, -350, -300, 300, 0];
  const gallery_y1 = [100, 300, 200, 300, 0];
  const gallery_z1 = [
    -1400.35064, -2159.08714, -2375.71775, -2915.29581, -3414.68899,
  ];
  // const gallery_x1 = [650, -350, -300, 300, 0];
  // const gallery_y1 = [100, 300, 200, 300, 0];
  // const gallery_z1 = [
  //   -100.35064, -359.08714, -575.71775, -715.29581, -1114.68899,
  // ];
  const gallery_rotationX1 = [
    -28.06434, -25.24322, -40.85629, -35.12773, -41.12393,
  ];

  gsap
    .timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: gallery,
        start: "top bottom+=5%",
        end: "bottom top-=5%",
        scrub: !0,
      },
    })
    .set(galleryItems, {
      transformOrigin: "50% 50%",
      z: (e) => gallery_z1[e],
      rotationX: (e) => gallery_rotationX1[e],
      filter: "brightness(20%)",
    })
    .to(
      galleryItems,
      {
        xPercent: (e) => gallery_x1[e],
        yPercent: (e) => gallery_y1[e],
        rotationX: 0,
        filter: "brightness(100%)",
      },
      0,
    )
    .to(
      gallery,
      {
        z: 4700,
      },
      0,
    )
    .fromTo(
      galleryItemsInner,
      {
        scale: 0.9,
      },
      {
        scale: 0.21,
      },
      0,
    );
}

function works() {
  
}

function brands() {
  const brands = document.querySelector(".brands");

  gsap.utils.toArray(".brands__items-col").forEach((column, index) => {
    const [y, yEnd] =
      index % 2
        // ? ["100%", (brands.scrollHeight - column.offsetHeight) * -1]
        ? ["100%", -300]
        : [column.scrollHeight * -1, 0];

    gsap.fromTo(
      column,
      { y },
      {
        y: yEnd,
        scrollTrigger: {
          trigger: brands,
          start: "top top",
          end: "+=1000",
          scrub: 0.5,
        },
      },
    );
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  lenis();
  const element = document.querySelector(".hero__images");
  // console.log(element);
  animDepixelate(element);
//   const time = setTimeout(() => {
//   }, 1000);
// clearInterval(time);
  // Hero title animation
  // pixel();
  hero();

  // Intro text animation
  intro();

  // Gallery 3d animation
  gallery();

  // Work animation
  works();

  // Brands animation
  brands();
});
