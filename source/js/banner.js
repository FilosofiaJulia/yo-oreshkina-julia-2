window.addEventListener('DOMContentLoaded', function(){ 

    const banner = document.querySelector('.banner');
    const bannerTitle = document.querySelector('.banner__slide-title');
    const numberOfSlide = document.getElementById('span');
    const bannerInfo = document.querySelector('.banner__slide-info');
    const switchButtons = document.querySelectorAll('.switch__btn');

    const slidesDB = [
        {   number: '01',
            title:'The ooh noo collection',
            info: 'Designed in Slovenia',
            color: '#EEE4DB'
        },
        {   number: '02',
            title:'the funny collection',
            info: 'Designed in Moldova',
            color: 'rgba(118, 194, 116, 0.5)'
        },
        {   number: '03',
            title:'the scary collection',
            info: 'Designed in Serbia',
            color: 'rgba(192, 116, 194, 0.5)'
        },
        {   number: '04',
            title:'The teen collection',
            info: 'Designed in Belarus',
            color: 'rgba(116, 157, 194, 0.5)'
        }
    ];

    function switchSlideOfBanner(arr) {
        for (let i = 0; i < switchButtons.length; i++) { 
            switchButtons[i].addEventListener('click', function(e){ 
                switchButtons.forEach(button => {
                    button.classList.remove('btn-active'); 
                });
                switchButtons[i].classList.add('btn-active');
                banner.style.backgroundColor = arr[i].color;
                numberOfSlide.textContent = arr[i].number;
                bannerTitle.textContent = arr[i].title;
                bannerInfo.textContent = arr[i].info;
            }); 
        } 
    }

    switchSlideOfBanner(slidesDB);
});
