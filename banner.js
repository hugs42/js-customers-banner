const logos = document.querySelector("#client-logos");
const images = Array.from(logos.querySelectorAll("img"));
let pos = 0;
let intervalId = null;

function setImagePosition() {
  images.forEach((image, index) => {
    image.style.left = (index * (image.offsetWidth + 50) + pos) + 'px';
  });
}

function startScrolling() {
  intervalId = setInterval(() => {
    pos -= 1;
    setImagePosition();
    const logoWidth = images[0].offsetWidth + 50;
    if (parseInt(images[0].style.left) + logoWidth <= 0) {
      const removedLogo = images.shift();
      pos += logoWidth;
      removedLogo.style.left = (images.length * (removedLogo.offsetWidth + 50) + pos) + 'px';
      images.push(removedLogo);
    }
  }, 20);
}

function stopScrolling() {
  clearInterval(intervalId);
}

images.forEach((image) => {
  image.addEventListener("mouseenter", stopScrolling);
  image.addEventListener("mouseleave", startScrolling);
});

setImagePosition();
startScrolling();
