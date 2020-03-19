const calc = () => {
  const cardOrder = document.querySelector('.card-order'),
   m1 = document.querySelector('.m1'),
   m2 = document.querySelector('.m2'),
   m3 = document.querySelector('.m3'),
   m4 = document.querySelector('.m4'),
   cardLetoMozaika = document.querySelector('.cardLetoMozaika'),
   cardLetoSchelkovo = document.querySelector('.cardLetoSchelkovo'),
   priceTotal = document.querySelector('.price-total'),
   promo = document.querySelector('.promo'),
   promoCode = 'ТЕЛО2019';
  
   const countSum = () => {
    if (m1.checked && cardLetoMozaika.checked) {
      if (promoCode === promo.value) {
      priceTotal.textContent = Math.floor(1999 * 0.7);
      } else {
        priceTotal.textContent = '1999';
      }
    }
    if (m2.checked && cardLetoMozaika.checked) {
      if (promoCode === promo.value) {
        priceTotal.textContent = Math.floor(9900 * 0.7);
        } else {
          priceTotal.textContent = '9900';
        }
    }
    if (m3.checked && cardLetoMozaika.checked) {
      if (promoCode === promo.value) {
        priceTotal.textContent = Math.floor(13900 * 0.7);
        } else {
          priceTotal.textContent = '13900';
        }
    }
    if (m4.checked && cardLetoMozaika.checked) {
      if (promoCode === promo.value) {
        priceTotal.textContent = Math.floor(19900 * 0.7);
        } else {
          priceTotal.textContent = '19900';
        }
    }
    if (m1.checked && cardLetoSchelkovo.checked) {
      if (promoCode === promo.value) {
        priceTotal.textContent = Math.floor(2999 * 0.7);
        } else {
          priceTotal.textContent = '2999';
        }
    }
    if (m2.checked && cardLetoSchelkovo.checked) {
      if (promoCode === promo.value) {
        priceTotal.textContent = Math.floor(14990 * 0.7);
        } else {
          priceTotal.textContent = '14990';
        }
    }
    if (m3.checked && cardLetoSchelkovo.checked) {
      if (promoCode === promo.value) {
        priceTotal.textContent = Math.floor(21990 * 0.7);
        } else {
          priceTotal.textContent = '21990';
        }
    }
    if (m4.checked && cardLetoSchelkovo.checked) {
      if (promoCode === promo.value) {
        priceTotal.textContent = Math.floor(24990 * 0.7);
        } else {
          priceTotal.textContent = '24990';
        }
    }
   };


   cardOrder.addEventListener('change', (event) => {
    const target = event.target;

    if (target.checked === m1.checked || target.checked === m2.checked || target.checked === m3.checked ||
      target.checked === m4.checked || 
      target.checked === cardLetoMozaika.checked || target.checked === cardLetoSchelkovo.checked || target === promo) {
      countSum();
    }
  });
};
calc();