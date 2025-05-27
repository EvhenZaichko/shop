let slider = document.querySelector('.slider')
let nextBtn = document.getElementById('next')
let prevBtn = document.getElementById('prev')
let bannerTitle = document.querySelector('.banner-title')
let sliderBanner = document.querySelector('.slider-banner')

function updateGameTitle() {
    let imgTitle = slider.querySelector('img:first-child').alt;
    bannerTitle.textContent = imgTitle;
    if (imgTitle === 'ASTROBOT') {
        sliderBanner.style.backgroundColor = 'deepskyblue'
        sliderBanner.style.boxShadow = 'inset 0 0 80px deepskyblue, 0 0 60px dodgerblue';
    } else if (imgTitle === 'SPIDER-MAN') {
        sliderBanner.style.backgroundColor = 'darkred';
        sliderBanner.style.boxShadow = 'inset 0 0 80px red, 0 0 60px darkred';
    } else if (imgTitle === 'HELLDIVERS') {
        sliderBanner.style.backgroundColor = 'orange';
    } else {

        sliderBanner.style.backgroundColor = 'black';
    }
    document.addEventListener('DOMContentLoaded', updateGameTitle);
}

nextBtn.onclick = () => {
    slider.append(slider.querySelector('img:first-child'))
    updateGameTitle()
}
prevBtn.onclick = () => {
    slider.prepend(slider.querySelector('img:last-child'))
    updateGameTitle()
}








