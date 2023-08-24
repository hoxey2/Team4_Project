$(document).ready(function () {
    var slides = document.querySelector('.slides'),
        slide = document.querySelectorAll('.slides li'),
        currentIdx = 1,
        slideCount = slide.length,
        slideWidth = 940,
        slideMargin = 15,
        slideTotalWidth = slideWidth + slideMargin,
        prevBtn = document.querySelector('.prev'),
        nextBtn = document.querySelector('.next');
        makeClone();
        
    function makeClone() {
            var cloneSlide_f = slide[0].cloneNode(true);
            var cloneSlide_l = slide[slide.length-1].cloneNode(true);
            cloneSlide_f.classList.add('clone');
            cloneSlide_l.classList.add('clone');
            slides.appendChild(cloneSlide_f);
            slides.prepend(cloneSlide_l);
        setInitalPos();
        setTimeout(() => {
            slides.classList.add('animated');
        }, 100);
    }
    function setInitalPos() {
        var initialTranslateValue = -slideTotalWidth;
        slides.style.left = initialTranslateValue + 'px';
    }
    
    nextBtn.addEventListener('click', ()=>{
        moveSlide(currentIdx += 1);
    })
    prevBtn.addEventListener('click', ()=>{
        moveSlide(currentIdx -= 1);
    })
    
    function moveSlide(num) {
        currentIdx = num;
        slides.classList.remove('none')
        if(slides.classList.contains('animated')){
            if(num > slideCount){
                setTimeout(()=>{
                    slides.classList.add('none')
                    currentIdx = 1;
                    slides.style.left = - slideTotalWidth + "px"
                }, 120)
            }
            if(num < 1){
                setTimeout(()=>{
                    slides.classList.add('none')
                    currentIdx = slideCount;
                    slides.style.left = -slideTotalWidth * slideCount + "px"
                }, 120)
            }
            slides.style.left = -currentIdx * slideTotalWidth + 'px';
        }
    }
    });