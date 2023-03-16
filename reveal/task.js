window.onscroll = showSection;

function showSection() {
  const revealSections = document.querySelectorAll(`.reveal`);
  const viewport = window.innerHeight;
  revealSections.forEach(section => {
    let topBorder = section.getBoundingClientRect().top;
    topBorder < viewport ? section.classList.add(`reveal_active`) :
    section.classList.remove(`reveal_active`);
  })
}