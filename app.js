var clock = document.querySelector(".clock");

window.onload = () => {
  setInterval(() => {
    var date = new Date();

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ap = "AM";

    if (h > 12) {
      h = h - 12;
      ap = "PM";
    }
    if (h == 0) {
      h = 12;
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    clock.innerHTML = h + ":" + m + ":" + s + ap;
  }, 1000);
};
