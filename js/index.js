let lnb = true;
let ele = document.querySelectorAll(".sub");
let n = ele.length;
document.getElementById("menu").onclick = function (e) {
  e.preventDefault();
  document.getElementById("bg").classList.toggle("on");
  if (lnb) {
    for (let i = 0; i < n; i++) {
      ele[i].classList.replace("sub", "sub-A");
    }
    document.querySelectorAll("sub-A").classList.add("on");
    // }
  } else {
    for (let i = 0; i < n; i++) {
      ele[i].classList.replace("sub-A", "sub");
    }
  }
  lnb = !lnb;
};
