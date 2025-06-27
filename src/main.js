import IMask from "imask"
const cityDialog = document.getElementById('cityDialog')
const showDialog = document.getElementById('showDialog')
const changeRegion = document.getElementById('changeRegion')
const closeDialog = document.getElementById('closeDialog')
const chooseRegion = document.getElementById('chooseRegion')
const scrollButton = document.getElementById('scrollButton')
const changedRegionButton = document.querySelectorAll('.changedRegionButtonClass')
const CurrentCity = document.getElementById('CurrentCity')
const CurrentCity2 = document.getElementById('CurrentCity2')
const dialogFormButton = document.getElementById('dialogFormButton')
const dialogForm = document.getElementById('dialogForm')
const SendPromo = document.querySelectorAll('#sendPromo')
const personalDataCheckBox = document.querySelectorAll('#personalData')
const dialogFormClose = document.querySelector('.dialogFormClose')

const codeSendedMess = document.querySelector('.CodeSendedLabel')
const codeNotSendedMess = document.querySelector('.CodeNotSendedLabel')
const formInvalid = document.querySelector('.FormInvalid')
const CheckBoxFormInvalid = document.querySelector('.CheckBoxInvalid')

const codeSendedMessBottom = document.querySelector('.CodeSendedLabelBottom')
const codeNotSendedMessBottom = document.querySelector('.CodeNotSendedLabelBottom')
const formInvalidBottom = document.querySelector('.FormInvalidBottom')
const CheckBoxFormInvalidBottom= document.querySelector('.CheckBoxInvalidBottom')

const phoneNumberInputs = document.querySelectorAll('#phoneNumber')
// SendPromo.addEventListener('click', ()=> {
//   const currentValueOfPhone = phoneNumber.getAttribute('value')
//   console.log(currentValueOfPhone)
// })

// var maskOption = {
//     mask: '+{7}(000)000-00-00',
//     lazy: false
// }

// var mask = new IMask(phoneNumberInputs, maskOption) 

phoneNumberInputs.forEach(input => {
  new IMask(input, {
    mask: '+{7}(000)000-00-00',
    lazy: true
  });
});

let valueOfInput = 0;

phoneNumberInputs[0].addEventListener('change', (e) => {
  // console.log(e.target.value)
  valueOfInput = e.target.value;
  // phoneNumberRegEx(String(valueOfInput))
  // numberLengthValidaton(String(valueOfInput))
})

let valueOfInput1 = 0;
phoneNumberInputs[1].addEventListener('change', (e) => {
  // console.log(e.target.value)
  valueOfInput1 = e.target.value;
  // numberLengthValidaton(String(valueOfInput))
  // phoneNumberRegEx(String(valueOfInput))
})

// personalDataCheckBox[0].addEventListener('change', () => {
//   if(personalDataCheckBox.checked == true) {
//     console.log('Чекбокс: ' + true)
//   } else {
//     console.log('Чекбокс: ' + false)
//   }
// })

// personalDataCheckBox.forEach(checkbox => {
//   checkbox.addEventListener('change', () => {
//     console.log('Чекбокс:', checkbox.checked);
//   });
// });
let checkBoxValid = false;
personalDataCheckBox[0].addEventListener('change', () => {
  checkBoxValid = personalDataCheckBox[0].checked
})

let checkBoxValid1 = false;
personalDataCheckBox[1].addEventListener('change', () => {
  checkBoxValid1 = personalDataCheckBox[1].checked
})

function phoneNumberRegEx(value) {
  return value.replace(/\D/g, '')
}

function lengthOfRegEx(value) {
  return value = value.length === 11;
}


function finishValidation(value) {
  const regExNumber = phoneNumberRegEx(value)
  const validRegEx = lengthOfRegEx(regExNumber);
  return validRegEx
}

SendPromo[0].addEventListener('click', () => {
  if(finishValidation(valueOfInput)){
    if(checkBoxValid) {
      if(localStorage.getItem(`succesNumbers`) === null){
        localStorage.setItem('succesNumbers', valueOfInput)

        console.log('номер удачно сохранен')

        codeSendedMess.style.display = 'block'
        codeNotSendedMess.style.display = 'none'
        CheckBoxFormInvalid.style.display = 'none'
        formInvalid.style.display = 'none'
      } else {
        console.log('Номер уже зареган')

        codeNotSendedMess.style.display = 'block'
        codeSendedMess.style.display = 'none'
        CheckBoxFormInvalid.style.display = 'none'
        formInvalid.style.display = 'none'
      }
    } else {
      console.log('Поставьте галочку')

      CheckBoxFormInvalid.style.display = 'block'
      codeSendedMess.style.display = 'none'
      formInvalid.style.display = 'none'
      codeNotSendedMess.style.display = 'none'
    }
  } else {
    console.log('Инвалидный номер')

    formInvalid.style.display = 'block'
    CheckBoxFormInvalid.style.display = 'none'
    codeNotSendedMess.style.display = 'none'
    codeSendedMess.style.display = 'none'
  }
})

SendPromo[1].addEventListener('click', () => {
  if(finishValidation(valueOfInput1)){
    if(checkBoxValid1){
      if(localStorage.getItem('succesNumbers') === null){
        localStorage.setItem('succesNumbers', valueOfInput1)
        
         console.log('номер удачно сохранен')

        codeSendedMessBottom.style.display = 'block'
        codeNotSendedMessBottom.style.display = 'none'
        CheckBoxFormInvalidBottom.style.display = 'none'
        formInvalidBottom.style.display = 'none'


      } else {
        console.log('Номер уже зареган')

        codeNotSendedMessBottom.style.display = 'block'
        codeSendedMessBottom.style.display = 'none'
        CheckBoxFormInvalidBottom.style.display = 'none'
        formInvalidBottom.style.display = 'none'
      } 
    } else {
      console.log('Поставьте галочку')

      CheckBoxFormInvalidBottom.style.display = 'block'
      codeSendedMessBottom.style.display = 'none'
      formInvalidBottom.style.display = 'none'
      codeNotSendedMessBottom.style.display = 'none' 
    }
  } else {
    console.log('Инвалидный номер')

    formInvalidBottom.style.display = 'block'
    CheckBoxFormInvalidBottom.style.display = 'none'
    codeNotSendedMessBottom.style.display = 'none'
    codeSendedMessBottom.style.display = 'none'
  }
})


dialogFormClose.addEventListener('click', () => {
  dialogForm.close()
  document.getElementsByTagName("body")[0].style.overflow = 'scroll';
  
})

// SendPromo.forEach(button => {
//   button.addEventListener('click', (e) => {
//     e.preventDefault()
//     dialogForm.close()
//   })
// })


showDialog.addEventListener('click', () => {
  cityDialog.showModal()

})

closeDialog.addEventListener('click', () => {
  cityDialog.close()
})


changeRegion.addEventListener('click', () => {
  cityDialog.close()
  chooseRegion.showModal()
  document.getElementsByTagName("body")[0].style.overflow = 'hidden';
})


// changedRegionButton.forEach( button => {
//   button.addEventListener('click', () => {
//     const valueOfButton = changedRegionButton.getAttribute('data-value')
//     console.log(valueOfButton)
//     localStorage.setItem('newValueOfButtons', valueOfButton)
//     const savedValue = localStorage.getItem('newValueOfButton')
//     console.log(savedValue)
//   })
// })

document.addEventListener('DOMContentLoaded', () => {
  const savedValue = localStorage.getItem('selectedButtonValue');
  if (savedValue) {
    CurrentCity.textContent = savedValue;
    CurrentCity2.textContent = `Ваш город ${savedValue}?`  // Хрен пойми что, проверка подгружаются ли данные с дома 
  } else {
    CurrentCity.textContent = "Ростов-на-Дону";
    CurrentCity2.textContent = "Ваш город Ростов-на-Дону?";
  }

  
});



changedRegionButton.forEach(button => {
  button.addEventListener('click', () => {
    
    const valueOfButton = button.getAttribute('data-value');
    console.log(valueOfButton);
    localStorage.setItem('selectedButtonValue', valueOfButton);
    const savedValue = localStorage.getItem('selectedButtonValue');
    console.log(savedValue);
    chooseRegion.close()
   
    setTimeout(()=> {location.reload()}, 0)
  });
});



// changedRegionButton.addEventListener('click', (e) => {
//   chooseRegion.close()
//   e.preventDefault()
//   document.getElementsByTagName("body")[0].style.overflow = 'scroll';
//   const valueOfButton = changedRegionButton.getAttribute('data-value');
//   console.log('wewewq')
//   localStorage.setItem('newValueOfButton', valueOfButton)
//   const savedRegion = localStorage.getItem('newValueOfButton')
//   console.log(savedRegion)
// });


scrollButton.addEventListener('click', () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
})

dialogFormButton.addEventListener('click', () => {
  dialogForm.showModal()
  document.getElementsByTagName("body")[0].style.overflow = 'hidden';
})

// async function renderCard() {
//   const resp = await fetch('https://dummyjson.com/users', {
//   method: 'GET'
// })
//   .then(resp => resp.json())
//   console.log(resp.id)
// }
// renderCard()
// document.getElementById('FetchUsersContainer').innerHTMLl = resp.map(cards => `
//   <section class="FetchUsersItem">
//      <section>
//         <h2>${cards.login}</h2>
//      </section>       
//   </section>
//   `).join(' ')
// // const cardItems = document.getElementById('FetchUsersItem')

// }
// renderCard()
