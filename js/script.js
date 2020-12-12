const autoPlay = {
	interval: 4000,
}

//Variables declaration
var mainContainer = document.getElementById("container");
var slideContainer = document.getElementById("imageContainer");
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
var indicatorsWrapper = document.querySelector(".btn-wrapper");
var dots = document.querySelectorAll(".dots");
var slides = document.querySelectorAll(".image-rack");
var delayBar = document.querySelector(".delayIndicators-before");

var current_px = 40;


var index = 1;
var slideId;


delayBar.style.animationDuration = `${autoPlay.interval}ms`;

delayBar.style.animationName = 'width';

function startDelayBar() {
	delayBar.style.animationName = 'width';
	delayBar.style.animationPlayState = 'running';
}

function pauseDelayBar() {
	
	delayBar.style.animationPlayState = 'paused';
	delayBar.style.animationName = null;
}

//Create first and last slide's clone
var firstClone = slides[0].cloneNode(true);
var lastClone = slides[slides.length - 1].cloneNode(true);


//Set clone element's id names
firstClone.id = "first_image";
lastClone.id = "last_image";


//Set clone elements to the positions 
slideContainer.append(firstClone);
slideContainer.prepend(lastClone);


//Target each slide's width
var slideWidth = slides[index].clientWidth;


//Setting how much moving required for slide container to left, which is equal to slideWidth
slideContainer.style.transform = `translateX(${-slideWidth * index}px)`;


//Capturing all slides including clone nodes as array
var getSlides = () => document.querySelectorAll(".image-rack");


//Starting slide show by setInterval
var startSlideShow = () => {
	slideId = setInterval(() => {
		moveToNextSlide();
		
		startDelayBar();
		
	}, autoPlay.interval)
}

var moveToNextSlide = () => {
	slides = getSlides();
	if(index >= slides.length - 1) return;
	index++;
	slideContainer.style.transition = "1000ms ease-in-out";
	slideContainer.style.transform = `translateX(${-slideWidth * index}px)`;
	nextButtonAction();
}


var moveToPrevSlide = () => {
	slides = getSlides();
	if(index <= 0) return;
	index--
	slideContainer.style.transition = "1000ms ease-in-out";
	slideContainer.style.transform = `translateX(${-slideWidth * index}px)`;
	prevButtonAction();

}

slideContainer.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slideContainer.style.transition = 'none';
    index = 1;
    slideContainer.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slideContainer.style.transition = 'none';
    index = slides.length - 2;
    slideContainer.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

function pauseSliding(){
	mainContainer.addEventListener('touchstart', function onFirstTouch(e) {

		mainContainer.removeEventListener('touchstart', onFirstTouch, false);
	}, false);
	
	clearInterval(slideId);
	pauseDelayBar();	
}


//Mouse events

mainContainer.addEventListener("mouseenter", pauseSliding);
mainContainer.addEventListener("mouseleave", startSlideShow);


next.addEventListener("click", moveToNextSlide);
prev.addEventListener("click", moveToPrevSlide);



dots.forEach(function(indicator) {
	indicator.addEventListener("click", goToTargetSlide)
})

function classListRemoverOfDots() {
	dots.forEach(function(dot) {
		dot.classList.remove('activeColor');
	})
}


function goToTargetSlide(e) {
	
	if(e.target === dots[0]) {
		slideContainer.style.transition = "1000ms ease-in-out";
		slideContainer.style.transform = `translateX(${-slideWidth * 1}px)`;
		index = 1;
		dots[indexForDots].classList.remove('color');
		indexForDots = 0;
		
		classListRemoverOfDots();
		dots[0].classList.add('activeColor');

	}else if(e.target === dots[1]) {
		slideContainer.style.transition = "1000ms ease-in-out";
		slideContainer.style.transform = `translateX(${-slideWidth * 2}px)`;
		index = 2;
		dots[indexForDots].classList.remove('color');
		indexForDots = 1;
		
		classListRemoverOfDots()
		dots[1].classList.add('activeColor');

	}else if (e.target === dots[2]) {
		slideContainer.style.transition = "1000ms ease-in-out";
		slideContainer.style.transform = `translateX(${-slideWidth * 3}px)`;
		index = 3;
		dots[indexForDots].classList.remove('color');
		indexForDots = 2;
		
		classListRemoverOfDots()
		dots[2].classList.add('activeColor');

	}else if(e.target === dots[3]) {
		slideContainer.style.transition = "1000ms ease-in-out";
		slideContainer.style.transform = `translateX(${-slideWidth * 4}px)`;
		index = 4;
		dots[indexForDots].classList.remove('color');
		indexForDots = 3;
		
		classListRemoverOfDots()
		dots[3].classList.add('activeColor');

	}else if(e.target === dots[4]) {
		slideContainer.style.transition = "1000ms ease-in-out";
		slideContainer.style.transform = `translateX(${-slideWidth * 5}px)`;
		index = 5;
		dots[indexForDots].classList.remove('color');
		indexForDots = 4;
		
		classListRemoverOfDots()
		dots[4].classList.add('activeColor');

	}else if(e.target === dots[5]) {
		slideContainer.style.transition = "1000ms ease-in-out";
		slideContainer.style.transform = `translateX(${-slideWidth * 6}px)`;
		index = 6;
		dots[indexForDots].classList.remove('color');
		indexForDots = 5;
		
		classListRemoverOfDots()
		dots[5].classList.add('activeColor');
	}
}


let indexForDots = 0;

function nextButtonAction() {
  for (let i = 0; i < dots.length; i++) {}
  if (indexForDots < dots.length - 1) {
    
	classListRemoverOfDots()
    dots[indexForDots].classList.remove('color');
    ++indexForDots;
    dots[indexForDots].classList.add('color');
  } else {
	
	classListRemoverOfDots()
    dots[indexForDots].classList.remove('color');
    indexForDots = 0;
    dots[indexForDots].classList.add('color');
  }
}

function prevButtonAction() {
  for (let j = 5; j > 0; j--) {}
  if (indexForDots > 0) {
    classListRemoverOfDots()
    dots[indexForDots].classList.remove('color');
    indexForDots--;
    dots[indexForDots].classList.add('color');
  } else {
	
	classListRemoverOfDots()
    dots[indexForDots].classList.remove('color');
    indexForDots = 5;
    dots[indexForDots].classList.add('color');
  }
}

startSlideShow();

document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'visible') {
    startSlideShow();
	setTimeout(function() {
		startDelayBar();
	})
	
  } else {
    clearInterval(slideId);
	pauseDelayBar();
  }
})
