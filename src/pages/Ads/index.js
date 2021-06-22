const platforms = document.getElementsByClassName('platforms');
const toggleYesNo = document.getElementsByClassName('toggleYesNo');

for (let i = 0; i < platforms.length; i++) {
  platforms[i].addEventListener("click", () => {
    if (platforms[i].firstElementChild.checked == true) {
      platforms[i].style.setProperty('border', '2px solid #2A28B7');
      platforms[i].style.setProperty('background', 'rgba(42, 40, 183, 0.1)');
    } else {
      platforms[i].style.setProperty('border', '2px solid rgba(42, 40, 183, 0.1)');
      platforms[i].style.setProperty('background', '#FFFFFF');
    }
  })
  platforms[i].addEventListener("mouseover", () => {
    platforms[i].style.setProperty('border', '2px solid rgba(42, 40, 183, 0.5)');
  })
  platforms[i].addEventListener("mouseout", () => {
    if (platforms[i].firstElementChild.checked == true) {
      platforms[i].style.setProperty('border', '2px solid #2A28B7');
    } else {
      platforms[i].style.setProperty('border', '2px solid rgba(42, 40, 183, 0.1)');
    }
  })
}

for (let i = 0; i < toggleYesNo.length; i++) {
  toggleYesNo[i].addEventListener("click", () => {
    toggleYesNo[i].classList.add('active');
    if (i == 0) {
      toggleYesNo[1].classList.remove('active')
    } else {
      toggleYesNo[0].classList.remove('active')
    }
  });
}