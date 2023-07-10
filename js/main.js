///////////////////////////////////////////////////////////////
const navbarLinks = document.querySelectorAll('.navbar__link');
const openSections = document.querySelectorAll('.wear__item');

navbarLinks.forEach((link, index) => {
   link.addEventListener('click', () => {
      openSections.forEach((section, sectionIndex) => {
         if (index === sectionIndex) {
            section.classList.toggle('active');
         } else {
            section.classList.remove('active');
         }
      });
   });
});
////////////////////////////////////////////////////////////

const itemImages = document.querySelectorAll('.item__image');
const itemDescriptions = document.querySelectorAll('.item__column');

itemImages.forEach((image, index) => {
   image.addEventListener('click', () => {
      itemDescriptions.forEach((description, i) => {
         if (i === index) {
            description.classList.toggle('active');
         } else {
            description.classList.remove('active');
         }
      });
   });
});
//////////////////////////////////////////////////////
// Кнопка придбати
const buttons = document.querySelectorAll('.item__btn');
const orderForm = document.querySelector('.form');
const formSend = document.querySelector('.form__send');
const orderInfo = document.querySelector('.modal__content');
const buttonCancel = document.querySelector('.form__cancel');
const body = document.querySelector('body');
const showModal = document.querySelector('.modal');

const handleClick = (event) => {
   orderForm.classList.toggle('active');
}

buttonCancel.addEventListener('click', function () {
   orderForm.classList.remove('active');
});

buttons.forEach(button => {
   button.addEventListener('click', handleClick);
});

//////////////////////////////////////////////////////
orderForm.addEventListener('submit', (e) => {
   e.preventDefault();

   // Отримуємо значення введених даних користувача
   const fullName = document.getElementById('name').value;
   const city = document.getElementById('city').value;
   const novaPoshta = document.getElementById('post').value;
   const paymentMethod = document.getElementById('paymethod').value;
   const quantity = document.getElementById('quantity').value;
   const comment = document.getElementById('yourcomment').value;


   // Перевірка обов'язкових полів
   if (fullName && city && novaPoshta && paymentMethod && quantity) {
      // Вивід інформації про замовлення на сторінку
      orderInfo.innerHTML = `
         <h2>Інформація про замовлення:</h2>
         <p>ПІБ покупця: ${fullName}</p>
         <p>Місто: ${city}</p>
         <p>Склад Нової пошти: ${novaPoshta}</p>
         <p>Спосіб оплати: ${paymentMethod}</p>
         <p>Кількість продукції: ${quantity}</p>
         <p>Коментар до замовлення: ${comment}</p>
         <button class="close-modal">Закрити</button>
      `
         ;
      showModal.classList.toggle('active');
      const closeButton = orderInfo.querySelector('.close-modal');
      closeButton.addEventListener('click', () => {
         location.reload();
      });

      // Скидання значень полів форми
      orderForm.reset();
   } else {
      // Вивід повідомлення про помилку
      orderInfo.innerHTML = '<p class="error">Будь ласка, заповніть всі обов\'язкові поля</p>';
   }
});
////////////////////////////////////////////////////////