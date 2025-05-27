
const essentialCard = document.querySelector('.essential-card');
const extraCard = document.querySelector('.extra-card');
const deluxeCard = document.querySelector('.deluxe-card');
const subModal = document.querySelector('.subscription-modal-window');



const info = [
    {
        id: 3,
        title: 'Essential',
        monthPrice: 10, yearPrice: 70,
        img: 'https://gmedia.playstation.com/is/image/SIEPDC/ps-plus-essential-plan-thumbnail-01-12may22$en?$1600px$',
        features: [
            'Ігри місяця',
            'Мережевий багатокористувацький режим',
            'Ексклюзивні знижки',
            'Ексклюзивні матеріали',
            'Колекція PlayStation Plus'
        ]
    },
    {
        id: 4,
        title: 'Extra',
        monthPrice: 15, yearPrice: 85,
        features: [
            'Всі переваги Essential',
            'Каталог ігор',
            'Класика UBISOFT',
            'Ексклюзивні матеріали',
            'Трайл нових ігор'
        ]
    },
    {
        id: 5,
        title: 'Deluxe',
        monthPrice: 20, yearPrice: 99,
        img: 'https://via.placeholder.com/100',
        features: [
            'Всі переваги Extra і Essential',
            'Трайл обмеженого часу',
            'Класичні ігри PlayStation'
        ],
    }
];


function showModal(contentId) {
    const foundItem = info.find(item => item.id === contentId);
    if (!foundItem) return;


    const featuresListHTML = foundItem.features.map(feature =>
        `<li class="features">${feature}</li>`
    ).join('');

    subModal.innerHTML = `
    <div class="modalsub-info">
      <h1 class="modal-header">${foundItem.title}</h1>
      <div class="modal-text-box">
        ${foundItem.textContent ? `<p>${foundItem.textContent}</p>` : ''}
      </div>
      <div class="features-bar">
        <ul class="features-list">
          ${featuresListHTML}
        </ul>
      </div>
      <div class="modal-plan">
            <div class="month-plan selected-plan">MONTH</div>
            <div class="year-plan">YEAR</div>   
      </div>
      <span class="modal-price">$${foundItem.monthPrice}</span>
      <button onclick="addToCart(${foundItem.id})">BUY</button>
    </div>
  `;

    const checkElement = setInterval(() => {
        const monthPlan = document.querySelector('.month-plan');
        const yearPlan = document.querySelector('.year-plan');
        const modalPrice = document.querySelector('.modal-price');
        if (yearPlan && monthPlan) {
            let isOriginal = true;
            monthPlan.addEventListener('click', () => {
                isOriginal = true;
                monthPlan.style.backgroundColor = '#7fff00';
                yearPlan.style.backgroundColor = 'transparent';
                monthPlan.classList.add('selected-plan');
                yearPlan.classList.remove('selected-plan');
                modalPrice.textContent = `$${foundItem.monthPrice}`
            });

            yearPlan.addEventListener('click', () => {
                isOriginal = false;
                yearPlan.style.backgroundColor = '#7fff00';
                monthPlan.style.backgroundColor = 'transparent';
                yearPlan.classList.add('selected-plan');
                monthPlan.classList.remove('selected-plan');
                modalPrice.textContent = `$${foundItem.yearPrice}`
            });


            clearInterval(checkElement);
        }
    }, 100);

    subModal.style.display = 'flex';
}




essentialCard.addEventListener('click', () => showModal(3));
extraCard.addEventListener('click', () => showModal(4));
deluxeCard.addEventListener('click', () => showModal(5));


window.addEventListener('click', (e) => {
    const clickedOutsideModal = !subModal.contains(e.target);
    const clickedOnCard =
        essentialCard.contains(e.target) ||
        extraCard.contains(e.target) ||
        deluxeCard.contains(e.target);

    if (clickedOutsideModal && !clickedOnCard) {
        subModal.style.display = 'none';
    }
});