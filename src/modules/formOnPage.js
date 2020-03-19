const formOnPage = () => {
 const thanks = document.getElementById('thanks'),
 freeVisitForm = document.querySelector('#free_visit_form'),
 callbackForm = document.querySelector('#callback_form'),
 cardOrder = document.querySelector('#card_order'),
 errorCheck = 'Подтвердите согласие на обработку данных...',
 check1 = document.getElementById('check1'),
 check2 = document.getElementById('check2'),
 check = document.getElementById('check'),
 cardCheck = document.getElementById('card_check'),
 mozaika = document.getElementById('footer_leto_mozaika'),
 shelkovo = document.getElementById('footer_leto_schelkovo');



 thanks.addEventListener('click', () => {
  let target = event.target;
  if (target.classList.contains('close_icon')) {
    thanks.style.display = 'none';
  } else if (target.classList.contains('close-btn')) {
    thanks.style.display = 'none';
  } else if (target.classList.contains('overlay')) {
    thanks.style.display = 'none';
  }
 });
 
  const formBanner = document.getElementById('banner-form'),
  formVisit = document.getElementById('form1'),
  formContent = document.getElementById('form2'),
  footerForm = document.getElementById('footer_form');

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 14px';
  statusMessage.style.cssText = 'color: white';

  const errorMessage = () => {
    thanks.style.display = 'block';
    freeVisitForm.style.display = 'none';
    callbackForm.style.display = 'none';
    const h4 = document.querySelector('.thanks_h4');
    const p = document.querySelector('.thanks_p');
    h4.textContent = 'Ошибка';  
    p.textContent = 'Ваша заявка не отправлена!';  

  };
  
  const timerDelete = () => {
    statusMessage.textContent = '';
    statusMessage.textContent = '';
  };

  const loadMessage = 'Пожалуйста подождите...';
  const successMessage = () => {
    thanks.style.display = 'block';
    freeVisitForm.style.display = 'none';
    callbackForm.style.display = 'none';
    // const h4 = document.querySelector('.thanks_h4');    
    // const p = document.querySelector('.thanks_p');
    // h4.textContent = 'Спасибо';  
    // p.textContent = 'Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.';  
  };
 
  const formOne = document.getElementById('phone');
  const formThree = document.getElementById('callback_form2-phone');
  const formTwo = document.getElementById('callback_form1-phone');
  const formFour = document.getElementById('callback_footer_form-phone');
  const formFive = document.getElementById('callback_form-phone');
  

  formBanner.addEventListener('input', () => {
      formOne.value = formOne.value.replace (/[^\+\d]/g, '');
    });
  formVisit.addEventListener('input', () => {
      formTwo.value = formTwo.value.replace (/[^\+\d]/g, '');
    });
  formContent.addEventListener('input', () => {
      formThree.value = formThree.value.replace (/[^\+\d]/g, '');
    });
  footerForm.addEventListener('input', () => {
    formFour.value = formFour.value.replace (/[^\+\d]/g, '');
    });
    formFive.addEventListener('input', () => {
      formFive.value = formFive.value.replace (/[^\+\d]/g, '');
    });

    const formName = document.querySelectorAll('.form-name');
   
    document.addEventListener('input', () => {
      for (let i = 0; i < formName.length; i++) {
        formName[i].value = formName[i].value.replace(/[^А-Яа-яЁё\s]/gi, '');
      }
    });


  // //  Форма formBanner
  formBanner.addEventListener('submit', (event) => {
    event.preventDefault();  //  для того, чтобы страница не перезагружалась
    statusMessage.textContent = loadMessage;
    formBanner.appendChild(statusMessage);
    if (check1.checked) {
      // statusMessage.textContent = loadMessage;
      statusMessage.style.cssText = 'color: white';
    const formData = new FormData(formBanner);
    let body = {};
    formData.forEach((val, key) => {
      body[key] = val;
    });
  
    postData(body)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('status network not 200');
      }
      successMessage();
      setTimeout(timerDelete, 1800);
      // statusMessage.style.cssText = 'color: white';
      formBanner.reset();
    })
    .catch((error) => {
      setTimeout (errorMessage, 2000);
      setTimeout(timerDelete, 1800);

      // statusMessage.style.cssText = 'color: white';
      formBanner.reset();
      console.error(error);
  });
} else {
    formBanner.appendChild(statusMessage);
    statusMessage.textContent = errorCheck;
    setTimeout(timerDelete, 3000);
  }
  });

  //  Форма formVisit
  formVisit.addEventListener('submit', (event) => {
    event.preventDefault();  //  для того, чтобы страница не перезагружалась
    formVisit.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
   

    if (check.checked) {
      statusMessage.textContent = loadMessage;
      statusMessage.style.cssText = 'color: white';
    const formVis = new FormData(formVisit);
    let body = {};
    formVis.forEach((val, key) => {
      body[key] = val;
    });
  
    postData(body)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('status network not 200');
      }
      successMessage();
      setTimeout(timerDelete, 1800);
      // statusMessage.style.cssText = 'color: white';
      formVisit.reset();
    })
    .catch((error) => {
      setTimeout (errorMessage, 2000);
      setTimeout(timerDelete, 1800);
      // statusMessage.style.cssText = 'color: white';
      formVisit.reset();
      console.error(error);
  });
} else {
  formVisit.appendChild(statusMessage);
    statusMessage.textContent = errorCheck;
    setTimeout(timerDelete, 3000);
  }
  });

   //  Форма formContent
   formContent.addEventListener('submit', (event) => {
    event.preventDefault();  //  для того, чтобы страница не перезагружалась
    formContent.appendChild(statusMessage);
    statusMessage.textContent = loadMessage;
    
    if (check2.checked) {
      statusMessage.textContent = loadMessage;
      statusMessage.style.cssText = 'color: white';
    const formDataContent = new FormData(formContent);
    let body = {};
    formDataContent.forEach((val, key) => {
      body[key] = val;
    });
    
    postData(body)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('status network not 200');
      }
      successMessage();
      setTimeout(timerDelete, 1800);
      formContent.reset();
    })
    .catch((error) => {
      setTimeout (errorMessage, 2000);
      setTimeout(timerDelete, 1800);
      formContent.reset();
      console.error(error);
  });
} else {
  formContent.appendChild(statusMessage);
  statusMessage.textContent = errorCheck;
  setTimeout(timerDelete, 3000);
}
});
   //  Форма footerForm
   footerForm.addEventListener('submit', (event) => {
    event.preventDefault();  //  для того, чтобы страница не перезагружалась
        statusMessage.textContent = loadMessage;
        footerForm.appendChild(statusMessage);

    if (mozaika.checked) {
    statusMessage.textContent = loadMessage;
    statusMessage.style.cssText = 'color: white';
    const formDataFooter = new FormData(footerForm);
    let body = {};
    formDataFooter.forEach((val, key) => {
      body[key] = val;
    });
    
    postData(body)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('status network not 200');
      }
      successMessage();
      setTimeout(timerDelete, 1800);
      // statusMessage.style.cssText = 'color: white';
      footerForm.reset();
    })
    .catch((error) => {
      setTimeout (errorMessage, 2000);
      setTimeout(timerDelete, 1800);
      // statusMessage.style.cssText = 'color: white';
      footerForm.reset();
      console.error(error);
  });
} else if (shelkovo.checked) {
  statusMessage.textContent = loadMessage;
  statusMessage.style.cssText = 'color: white';
  const formDataFooter = new FormData(footerForm);
  let body = {};
  formDataFooter.forEach((val, key) => {
    body[key] = val;
  });
  
  postData(body)
  .then((response) => {
    if (response.status !== 200) {
      throw new Error('status network not 200');
    }
    successMessage();
    setTimeout(timerDelete, 1800);
    // statusMessage.style.cssText = 'color: white';
    footerForm.reset();
  })
  .catch((error) => {
    setTimeout (errorMessage, 2000);
    setTimeout(timerDelete, 1800);
    // statusMessage.style.cssText = 'color: white';
    footerForm.reset();
    console.error(error);
});
} 
else {
  footerForm.appendChild(statusMessage);
  statusMessage.textContent = 'Выберите клуб...';
  setTimeout(timerDelete, 3000);
}
  
});


//  Форма CARDS
cardOrder.addEventListener('submit', (event) => {
  event.preventDefault();  //  для того, чтобы страница не перезагружалась
      statusMessage.textContent = loadMessage;
      cardOrder.appendChild(statusMessage);
      statusMessage.style.cssText = 'color: black';
      statusMessage.style.cssText = 'font-size: 20px';
  if (cardCheck.checked) {
  statusMessage.textContent = loadMessage;
  // statusMessage.style.cssText = 'color: white';
  const cardDataFooter = new FormData(cardOrder);
  let body = {};
  cardDataFooter.forEach((val, key) => {
    body[key] = val;
  });
  
  postData(body)
  .then((response) => {
    if (response.status !== 200) {
      throw new Error('status network not 200');
    }
    successMessage();
    setTimeout(timerDelete, 1800);
    // statusMessage.style.cssText = 'color: white';
    cardOrder.reset();
  })
  .catch((error) => {
    setTimeout (errorMessage, 2000);
    setTimeout(timerDelete, 1800);
    // statusMessage.style.cssText = 'color: white';
    cardOrder.reset();
    console.error(error);
});
} else if (cardCheck.checked) {
// statusMessage.textContent = loadMessage;
statusMessage.style.cssText = 'color: white';
const cardDataFooter = new FormData(cardOrder);
let body = {};
cardDataFooter.forEach((val, key) => {
  body[key] = val;
});

postData(body)
.then((response) => {
  if (response.status !== 200) {
    throw new Error('status network not 200');
  }
  successMessage();
  setTimeout(timerDelete, 1800);
  // statusMessage.style.cssText = 'color: white';
  cardOrder.reset();
})
.catch((error) => {
  setTimeout (errorMessage, 2000);
  setTimeout(timerDelete, 1800);
  // statusMessage.style.cssText = 'color: white';
  cardOrder.reset();
  console.error(error);
});
} else if (cardCheck.checked) {
  // statusMessage.textContent = loadMessage;
  statusMessage.style.cssText = 'color: white';
  const cardDataFooter = new FormData(cardOrder);
  let body = {};
  cardDataFooter.forEach((val, key) => {
    body[key] = val;
  });
  
  postData(body)
  .then((response) => {
    if (response.status !== 200) {
      throw new Error('status network not 200');
    }
    successMessage();
    setTimeout(timerDelete, 1800);
    // statusMessage.style.cssText = 'color: white';
    cardOrder.reset();
  })
  .catch((error) => {
    setTimeout (errorMessage, 2000);
    setTimeout(timerDelete, 1800);
    // statusMessage.style.cssText = 'color: white';
    cardOrder.reset();
    console.error(error);
  });
  } else if (cardCheck.checked) {
    // statusMessage.textContent = loadMessage;
    statusMessage.style.cssText = 'color: white';
    const cardDataFooter = new FormData(cardOrder);
    let body = {};
    cardDataFooter.forEach((val, key) => {
      body[key] = val;
    });
    
    postData(body)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('status network not 200');
      }
      successMessage();
      setTimeout(timerDelete, 1800);
      // statusMessage.style.cssText = 'color: white';
      cardOrder.reset();
    })
    .catch((error) => {
      setTimeout (errorMessage, 2000);
      setTimeout(timerDelete, 1800);
      // statusMessage.style.cssText = 'color: white';
      cardOrder.reset();
      console.error(error);
    });
    } else if (cardCheck.checked) {
      // statusMessage.textContent = loadMessage;
      statusMessage.style.cssText = 'color: white';
      const cardDataFooter = new FormData(cardOrder);
      let body = {};
      cardDataFooter.forEach((val, key) => {
        body[key] = val;
      });
      
      postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('status network not 200');
        }
        successMessage();
        setTimeout(timerDelete, 1800);
        // statusMessage.style.cssText = 'color: white';
        cardOrder.reset();
      })
      .catch((error) => {
        setTimeout (errorMessage, 2000);
        setTimeout(timerDelete, 1800);
        // statusMessage.style.cssText = 'color: white';
        cardOrder.reset();
        console.error(error);
      });
      } 
else {
  cardOrder.appendChild(statusMessage);
  statusMessage.style.cssText = 'color: black';
  statusMessage.style.cssText = 'font-size: 20px';
statusMessage.textContent = errorCheck;
setTimeout(timerDelete, 3000);
}

});



const postData = (body) => {
  return fetch('./server.php', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
 };
};

export default formOnPage;

