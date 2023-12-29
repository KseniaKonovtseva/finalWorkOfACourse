const forms = (formId) => {
  const form = document.querySelector(formId);
  const statusBlock = document.createElement('div')
  const loadText = 'Загрузка...'
  const errorText = 'Ошибка'
  const successText = 'Спасибо! Наш менеджер с вами свяжется'
  // Validation
  form.addEventListener('input', (e) => {
    e.preventDefault()
    const formName = form.querySelector('[name="fio"]');
    const formPhone = form.querySelector('[name="phone"]');
    if (e.target == formName) {
      e.target.value = e.target.value.replace(/[^а-яА-ЯёЁa-zA-Z]/, "");
    }
    if (e.target == formPhone) {
      e.target.value = e.target.value.replace(/[^\d\+]/, "");
    }
  })

  const validate = () => {
    const formName = form.querySelector('[name="fio"]');
    const formPhone = form.querySelector('[name="phone"]');
    let success = true
    if (formName.value == '') {
      success = false
    }
    if ((formPhone.value.length > 16) || (formPhone.value == '')) {
      success = false
    }
    return success
  }
  // Sending
  const sendForm = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "applicaton/json"
      }
    }).then(res => res.json())
  }

  const submitForm = () => {
    const formElements = form.querySelectorAll('input')
    const formData = new FormData(form)
    const formBody = {}

    statusBlock.textContent = loadText
    statusBlock.classList.add('form-status')
    form.append(statusBlock)

    formData.forEach((val, key) => {
      formBody[key] = val
    })
    
    if (validate()) {
      sendForm(formBody)
        .then(data => {
          statusBlock.textContent = successText

          formElements.forEach(input => {
            input.value = ''
          })
        })
        .catch(error => {
          statusBlock.textContent = errorText
        })
    } else {
      statusBlock.textContent = 'Введите корректные данные'
    }
  }
  
  try {
    if (!form) {
      throw new Error('Верни форму, гад!!!')
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault()
  
      submitForm()
    })
  } catch(error) {
    console.log(error.message);
  }

}

export default forms