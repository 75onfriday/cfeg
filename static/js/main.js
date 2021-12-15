var swiperClassic = new Swiper(".swiper-classic", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: { delay: 2500 },
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  pagination: {
    el: ".swiperClassic-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiperClassic-button-next",
    prevEl: ".swiperClassic-button-prev",
  },
})

var slider = new MasterSlider()
slider.setup("masterslider", {
  width: 1550,
  height: 768,
  minHeight: 380,
  space: 0,
  start: 1,
  grabCursor: false,
  layout: "fullwidth",
  wheel: false,
  autoplay: true,
  instantStartLayers: true,
  loop: true,
  view: "basic",
  instantStartLayers: true,
})
slider.control("arrows")
s
