const textContent = document.querySelector(`.book`);

(function() {
  buttonsFontSize = Array.from(textContent.querySelectorAll(`.font-size`));
  buttonsFontSize.forEach(button => {
    // button.addEventListener(`click`, choiceFontSize); - Почему этот вариант создания обработчика не работает, а теги все так же обновляют страницу?
    button.onclick = choiceFontSize;
  })
}())

function choiceFontSize() {
  let currentPos = searchPosition(buttonsFontSize, `font-size_active`);
  buttonsFontSize[currentPos].classList.remove(`font-size_active`);
  this.classList.add(`font-size_active`);
  currentPos = searchPosition(buttonsFontSize, `font-size_active`);
  changeText(currentPos);
  return false;
}

function searchPosition(nodeCollection, nameClass) {
  return nodeCollection.findIndex(item => item.className.includes(nameClass));
}

function changeText(position) {
  if (position === 0) {
    textContent.className = `book book_fs-small`;
  } else if (position === 2) {
    textContent.className = `book book_fs-big`;
  } else {
    textContent.className = `book`;
  }
}