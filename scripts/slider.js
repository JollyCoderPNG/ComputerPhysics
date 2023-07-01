function setAnimation(){
    if (currentSlide === maxSlides - 1) {
        currentSlide = 0;
        items.forEach(
            item => {
                item.animate([
                    {left:`${(maxSlides-1)*(-100)}vw`},
                    {left:`0`}
                ], {
                    duration:800,
                    fill:'forwards'
                }
                );
            }
        )

    }
    else {
        currentSlide++;

        items.forEach(
            item => {
                item.animate([
                    {left:`${(currentSlide-1)*(-100)}vw`},
                    { left:`${currentSlide*(-100)}vw`}
                ], {
                    duration:1200,
                    fill:'forwards'
                }
                );
            }
        )
    }
}

let currentSlide = 0;
let maxSlides;
let items = document.getElementsByClassName('big-content');
items = Array.from(items);

maxSlides = items.length;

let animationLoop = setInterval(setAnimation,3000);