const platforms = document.getElementsByClassName('platforms');
const toggleYesNo = document.getElementsByClassName('toggleYesNo');
const reduceDays = document.getElementById('reduceDays');
const addDays = document.getElementById('addDays');
const days = document.getElementById('days');
const inputPhone = document.getElementById('inputPhone');
const contactFields = document.getElementsByClassName('contactFields');
const modal = document.getElementById('budgetModal')
const openModal = document.getElementById('generateBudgetBtn')
const closeModal = document.getElementById('closeModal')

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

reduceDays.addEventListener("click", reduceDay);
addDays.addEventListener("click", addDay);

function addDay() {
  let currentDays = days.textContent;
  let intDays = parseInt(currentDays);
  intDays++;
  days.textContent = intDays;
  disableReduceBtn();
}

function reduceDay() {
  let currentDays = days.textContent;
  let intDays = parseInt(currentDays);
  intDays--;
  days.textContent = intDays;
  disableReduceBtn();
}

disableReduceBtn();

function disableReduceBtn() {
  let currentDays = days.textContent;
  let intDays = parseInt(currentDays);
  if (intDays <= 3) {
    reduceDays.classList.remove('hover');
    reduceDays.classList.remove('active');
    reduceDays.style.setProperty('pointer-events', 'none');
    reduceDays.style.setProperty('filter', 'opacity(30%) grayscale(1)');
  } else {
    reduceDays.classList.add('hover');
    reduceDays.classList.add('active');
    reduceDays.style.setProperty('pointer-events', 'all');
    reduceDays.style.setProperty('filter', 'none');
  }
}

inputPhone.addEventListener('keypress', formatPhone);

function formatPhone() {
  const length = inputPhone.value.length;
  const currentValue = inputPhone.value;

  if (length == 1) {
    inputPhone.value = '(' + currentValue;
  }
  if (length == 3) {
    inputPhone.value = currentValue + ') ';
  }
  if (length == 6) {
    inputPhone.value = currentValue + ' ';
  }
  if (length == 11) {
    inputPhone.value = currentValue + '-';
  }
}

function submitVerification() {
  for (let i = 0; i < contactFields.length; i++) {
    contactFields[i].classList.add('invalid');
  }
}

openModal.onclick = () => {
  submitVerification()
  const nameField = contactFields[0].checkValidity();
  const emailField = contactFields[1].checkValidity();
  const phoneField = contactFields[2].checkValidity();
  const occupationField = contactFields[3].checkValidity();
  
  if (nameField && emailField && phoneField && occupationField) {
    modal.style.display = "flex";
  }
}

closeModal.onclick = () => {
  modal.style.display = "none";
}