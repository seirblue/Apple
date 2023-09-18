let subMenu = document.querySelectorAll(".sub-menu");
let gnb = document.querySelectorAll(".menu ul li a");
let Lnb = document.querySelectorAll(".lnb");
let fl = document.querySelector("#wrap");
let hd = document.querySelectorAll("header");
let ht = Lnb[3].offsetHeight;
console.log("ht :" + ht);
for (let i = 0; i <= 9; i++) {
  subMenu[i].style.opacity = "0";
}
gnb.forEach(function (item, keys) {
  console.log(keys);
  item.addEventListener("mouseenter", function (e) {
    let j = Array.from(gnb).indexOf(e.target);
    function others(item) {
      return item !== j;
    }
    let othersItem = Array.from(subMenu).filter(others);
    othersItem.forEach(function (item) {
      item.style.height = "0px";
      item.style.opacity = "0";
    });
    Lnb.forEach(function () {
      let subht = Lnb[j].offsetHeight;
      console.log("j + " + j);
      //   subMenu[j].style.height = "auto"; 이렇게 하면 transition이 안됨
      subMenu[j].style.height = subht + "px";
      subMenu[j].style.opacity = "1";
    });
  });
});
hd.forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    document.querySelector(".top-menu").style.backgroundColor = "#fff";
    document.querySelector(".top-menu").style.transitionDelay = "0";
    /* for (let i = 0; i <= 2; i++) {
    fl[i].classList.add("on");
  } */
    fl.classList.add("on");
  });
  item.addEventListener("mouseleave", function () {
    document.querySelector(".top-menu").style.backgroundColor = "#fff";
    document.querySelector(".top-menu").style.transitionDelay = "0.1s";

    /* for (let i = 0; i <= 2; i++) {
    fl[i].classList.remove("on");
  } */
    fl.classList.remove("on");
  });
});
subMenu.forEach(function (item, keys) {
  // let x = gnb[keys].querySelector("a");
  item.addEventListener("mouseenter", function () {
    //   subMenu.style.height = ht + "px";
    // gnb[keys].classList.add("active");
  });
  item.addEventListener("mouseleave", function (e) {
    let j = Array.from(subMenu).indexOf(e.target);
    subMenu[j].style.height = 0 + "px";
    /* for (let i = 0; i <= 4; i++) {
            subMenu[i].style.height = 0 + "px";
          } */
    // gnb[keys].classList.remove("active");
  });
});

$(function () {
  /* var swiper = new Swiper(".mySwiper6", {
    speed: 14000,
    loop: true,
    spaceBetween: 50,
    slidesPerView: 3,
    // centeredSlides: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    allowTouchMove: false,
    oneWayMovement: true,
  });
  var swiper = new Swiper(".mySwiper7", {
    speed: 11500,
    loop: true,
    spaceBetween: 50,
    slidesPerView: 3,
    // centeredSlides: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    allowTouchMove: false,
    oneWayMovement: true,
  }); */

  let animationSpeed1 = 60; // 기본 슬라이더 속도 (초당 이동 거리)
  let animationSpeed2 = 80; // 기본 슬라이더 속도 (초당 이동 거리)
  let sliderWidth = $(".slider").width() * $(".slider").length; //이미지 가로 값
  $(".slider-container1").append($("#slider1").eq(0).clone());
  $(".slider-container2").append($("#slider2").eq(0).clone());

  const tl1 = gsap.timeline({ repeat: -1 });
  tl1.to(".slider-container1", {
    x: -sliderWidth,
    duration: animationSpeed2,
    ease: "linear",
  });
  tl1.play();
  $(".slider-container1").hover(
    function () {
      //tl.pause();
      animationSpeed2 = 200; // 원하는 속도로 조절합니다.
      tl1.duration(animationSpeed2);
    },
    function () {
      animationSpeed2 = 80; // 마우스를 떠난 후 기존 속도로 복구합니다.
      tl1.duration(animationSpeed2);
      tl1.play();
    }
  );
  const tl2 = gsap.timeline({ repeat: -1 });
  tl2.to(".slider-container2", {
    x: -sliderWidth,
    duration: animationSpeed1,
    ease: "linear",
  });
  tl2.play();
  $(".slider-container2").hover(
    function () {
      //tl.pause();
      animationSpeed1 = 200; // 원하는 속도로 조절합니다.
      tl2.duration(animationSpeed1);
    },
    function () {
      animationSpeed1 = 60; // 마우스를 떠난 후 기존 속도로 복구합니다.
      tl2.duration(animationSpeed1);
      tl2.play();
    }
  );
});
