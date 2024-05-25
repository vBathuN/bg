// Theme
function setTheme(H, inputType) {
  let r = 0,
    g = 0,
    b = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }

  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  document.documentElement.style.setProperty(`--${inputType}-color-h`, h);
  document.documentElement.style.setProperty(`--${inputType}-color-s`, s + "%");
  inputType == "primary" &&
    document.documentElement.style.setProperty(
      `--${inputType}-color-l`,
      l + "%"
    );
}

const inputs = ["primary", "secondary"];

inputs.forEach((inputType) => {
  document
    .querySelector(`#${inputType}-color-input`)
    .addEventListener("change", (e) => {
      setTheme(e.target.value, inputType);
    });
});
// End

// Clock
const deg = 6;
const hourHand = document.querySelector('#hourHand');
const minuteHand = document.querySelector('#minuteHand');
const secondHand = document.querySelector('#secondHand');


function twoDigits(v) {
  return v < 10 ? '0' + v : v;
}

function formatDate(h, m, s) {
  h = h > 12 ? h - 12: h;
  h = twoDigits(h);
  m = twoDigits(m);
  s = twoDigits(s);
  return `${h} : ${m} : ${s}`;
}

setInterval(() => {
  let date = new Date();
  let hours = date.getHours() * 30;
  let minutes = date.getMinutes() * deg;
  let seconds = date.getSeconds() * deg;
  
  hourHand.style.transform = `rotateZ(${(hours)+(minutes/12)}deg)`;
  minuteHand.style.transform = `rotateZ(${minutes}deg)`;
  secondHand.style.transform = `rotateZ(${seconds}deg)`;
  document.getElementById("clockTimeId").innerHTML = formatDate(hours/30, minutes/6, seconds/6);
})
// End

// Play button
const play = document.querySelector('.icon-play');
const pause = document.querySelector('.icon-pause');
const playBtn = document.querySelector('.play-btn');
const wave1 = document.querySelector('.wave-1');
const wave2 = document.querySelector('.wave-2');

playBtn.addEventListener('click', function(e) {
  e.preventDefault();
  pause.classList.toggle('visibility');
  play.classList.toggle('visibility');
  playBtn.classList.toggle('shadow');
  wave1.classList.toggle('paused');
  wave2.classList.toggle('paused');
});
// End
