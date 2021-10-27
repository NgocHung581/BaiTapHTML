var size = document.getElementById('container-slider').clientWidth;
var changeSlide = document.getElementById('slide');
var change = 0;
var maxSize = changeSlide.getElementsByTagName('img').length*size -size;

showSlideNext = function() {
    if (change < maxSize)
    {
        change += size;
    }
    else {
        change = 0;
    }
    changeSlide.style.marginLeft = '-' + change + 'px';
}

showSlidePrevious = function() {
    if (change == 0)
    {
        change = maxSize;
    }
    else {
        change -= size;
    }
    changeSlide.style.marginLeft = '-' + change + 'px';
}

setInterval(showSlideNext,3000);