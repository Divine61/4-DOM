// const rotator = document.querySelectorAll(`.rotator__case`);
const rotator = Array.from(document.querySelectorAll(`.rotator__case`));

setInterval(changeAds.bind(rotator), 1000);

function changeAds() {
  let posAds = this.findIndex(ads => ads.className.includes(`rotator__case_active`));
  this[posAds].classList.remove(`rotator__case_active`);
  posAds++;
  if (posAds === this.length) {
    posAds = 0;
  }
  this[posAds].classList.add(`rotator__case_active`);
}