function getDown() {
    if (normalScrollPages < pagesNumber) {
        normalScrollPages++;
        goScroll();
    }
}

function getUp() {
    if (normalScrollPages !== 0) {
        normalScrollPages--;
        goScroll();
    }
}

function goScroll() {
    setTimeout(
        () => {
            window.scrollTo(0, document.documentElement.clientHeight*normalScrollPages)
        }, 2);
}

function addScrollListener() {
    setTimeout(
        () => {
             window.addEventListener('scroll', scrollHandler);
             scrollY = window.scrollY;
        }, 500);
}

function removeScrollListener() {
    window.removeEventListener('scroll', scrollHandler);
}

function scrollHandler() {
    let temporalScrollY = window.scrollY;
    let scrollMinus = scrollY - temporalScrollY;
    removeScrollListener();
    if ( scrollMinus < 0) {
        getDown();
    } else {
        getUp();
    }
    addScrollListener();
}

let scrollY = 0;
let normalScrollPages = 0;
let pagesNumber = 2;

setTimeout(
    () => {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', scrollHandler);
    }, 1);
