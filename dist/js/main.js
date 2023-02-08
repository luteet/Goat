


const body = document.querySelector('body'),
	html = document.querySelector('html'),
	menu = document.querySelectorAll('.header__burger, .header__nav, body'),
	burger = document.querySelector('.header__burger'),
	header = document.querySelector('.header');


body.addEventListener('click', function (event) {

	function $(elem) {
		return event.target.closest(elem)
	}

	// =-=-=-=-=-=-=-=-=-=- <open menu in header> -=-=-=-=-=-=-=-=-=-=-

	if ($('.header__burger')) {
		menu.forEach(element => {
			element.classList.toggle('_active')
		})
	}

	// =-=-=-=-=-=-=-=-=-=- </open menu in header> -=-=-=-=-=-=-=-=-=-=-



	// =-=-=-=-=-=-=-=-=-=- <learn more card> -=-=-=-=-=-=-=-=-=-=-

	const clientsCardBody = $('.clients__slide--body');
	const activeCard = document.querySelector('.clients__slide--body._active');
	if (clientsCardBody) {
		const activeCard = document.querySelector('.clients__slide--body._active');
		if (activeCard && !clientsCardBody.classList.contains('_active')) {
			activeCard.classList.remove('_active')
		}
		clientsCardBody.classList.toggle('_active');
	} else if (activeCard) {
		activeCard.classList.remove('_active')
	}

	// =-=-=-=-=-=-=-=-=-=- </learn more card> -=-=-=-=-=-=-=-=-=-=-

})

function hover(hover, blur) {
    body.addEventListener("mouseover", function (event) {
  
      hover(
        function $(elem) {
          return event.target.closest(elem);
        }
      )
  
    })
    
    body.addEventListener("mouseout", function (event) {
  
      blur(
        function $from(elem) {
          return event.target.closest(elem);
        },
        function $to(elem) {
          return event.relatedTarget.closest(elem);
        }
      )
    
    })
}

/* hover(
	function ($) {
		
	},
	function ($from, $to) {
		if($from('.cursor-drag')) {
			console.log('cursor-drag')
		}
	}
) */
  
/*   hover(
    function ($) {
  
      // hover
	  const videoOnHover = $('.video-on-hover');
	  if(videoOnHover) {
		videoOnHover.classList.add('_hover');
		const preview = videoOnHover.querySelector('.video-wrapper').querySelector('.video-preview'),
			  video = 	videoOnHover.querySelector('.video-wrapper').querySelector('.video-element');

		//video.autoplay = true;
		video.play();
	  }
  
    },
    function ($from, $to) {
  
      // blur
	  //console.log('blur');
	  const videoOnHover = $from('.video-on-hover');
	  if(videoOnHover && videoOnHover.classList.contains('_hover')) {
		videoOnHover.classList.remove('_hover');

		const preview = videoOnHover.querySelector('.video-wrapper').querySelector('.video-preview'),
			  video = 	videoOnHover.querySelector('.video-wrapper').querySelector('.video-element');

		setTimeout(() => {
			video.currentTime = 0;
			video.pause()
		},400)
		
		
	  }
  
    }) */

	const videoOnHover = document.querySelectorAll('.video-on-hover');
	videoOnHover.forEach(videoOnHover => {
		let blurCheck = false;
		videoOnHover.addEventListener('mouseenter', function () {
			//console.log('video')
			
			const video = 	videoOnHover.querySelector('.video-wrapper').querySelector('.video-element');

		    videoOnHover.classList.add('_hover');
		    video.play();
			
		})
		videoOnHover.addEventListener('mouseleave', function () {
			videoOnHover.classList.remove('_hover');
			blurCheck = true;

			const video = 	videoOnHover.querySelector('.video-wrapper').querySelector('.video-element');

		    video.currentTime = 0;
		    video.pause()
		})
	})
	

function wordsToLines() {
	const wordsToLines = document.querySelectorAll('.words-to-lines');
	wordsToLines.forEach(wordsToLinesElement => {
		const text = wordsToLinesElement;
		/* const tags = wordsToLinesElement.querySelectorAll('*');
		tags.forEach(tag => {
			//let words = tag.textContent.trim().split(' ').map(s => `<span>${s}</span>`).join('');
			let words = tag.textContent.trim().split(' ');
			Array.from(words).forEach(word => {
				tag.textContent += `${word.trim()} `;
			})
			
		})
		console.log(tags[0].textContent) */
		//text.textContent = text.textContent.trim();
		let tagCheck = false;
		let textResult = text.innerHTML.trim().split(' ');
		
		let hasTag = false, activeTag = false, activeImg, img;
		text.innerHTML = '';
		//console.log(textResult)
		//const isHTMLTag = (str) => /(^<([^>]+)>$)/i.test(str)
		
		Array.from(textResult).forEach((textElement, index) => {

			if(!activeTag) {
				/* textResult[index] = `<span>${textElement}&nbsp;</span>`;
				if(textElement.includes('</mark>')) {
					elements[count] += textResult[index];
					activeTag = false;
					delete textResult[index];
					textResult[index] = `${elements[count]}`;
				} */
				textResult[index] = `<span>${textElement}&nbsp;</span>`;
				
			} else if(activeTag && typeTag == 'mark') {
				textResult[index] = `<span><mark>${textElement}&nbsp;</mark></span>`;
			}
			//console.log(isHTMLTag(textElement))
			if(textElement.includes('<mark>') && textElement.includes('</mark>')) {

				textElement = textElement.replace('<mark>', '');
				textElement = textElement.replace('</mark>', '');
				
				activeTag = true;
				typeTag = 'mark';
				textResult[index] = `<span><mark>${textElement}&nbsp;</mark></span>`;
				
			} else if(textElement.includes('<mark>')) {
				
				textElement = textElement.replace('<mark>', '');
				activeTag = true;
				typeTag = 'mark';
				textResult[index] = `<span><mark>${textElement}&nbsp;</mark></span>`;

			} else if(textElement.includes('</mark>')) {
				
				activeTag = false;
				textElement = textElement.replace('</mark>', '');
				textResult[index] = `<span><mark>${textElement}&nbsp;</mark></span>`;

			}

			if(textElement.includes('<img')) {
				img = textElement;
				activeImg = true;
				delete textResult[index];
			} else if(!textElement.includes('>') && !textElement.includes('mark>') && activeImg) {
				img += ` ${textElement} `;
				delete textResult[index];
			} else if(activeImg) {
				img += textElement;
				textResult[index] = `<span>${img}</span>`;
				activeImg = false;
			}
			
			//console.log(textElement)

			/* if(textElement.includes('</mark>')) {

				if(!hasTag) {
					elements[count] += textResult[index];
				}
				
				textResult[index] = `<span>${elements[count]}&nbsp;</span>`;
				
			} else {
				textResult[index] = `<span>${elements[count]}&nbsp;</span>`;
			} */
				/*  else if(activeTag && !hasTag) {
				elements[count] += textResult[index];
				delete textResult[index];
			} else if(!activeTag) {
				textResult[index] = `<span>${textElement}&nbsp;</span>`;
				delete textResult[index];
			} */
			
			//hasTag = false;

			
			//textResult[index] = `<span>${textElement}&nbsp;</span>`;
		})

		
		//console.log(elements)
		
		/* Array.from(textResult).forEach((textElement, index) => {
			if(textResult[index]) {
				textResult[index] = `<span>${textElement}&nbsp;</span>`;
			}
		}) */
		//console.log(textResult)
		Array.from(textResult).forEach((textElement, index) => {
			if(textElement) {
				text.insertAdjacentHTML("beforeend", textResult[index])	
			}
			
		})

		
		
		//console.log(textResult)
		
		//console.log(textResult)
		//text.insertAdjacentHTML("beforeend", textResult);

		textResult = [];

		/* let textElements = text.querySelectorAll('span');
		textElements.forEach(textElement => {
			let spanArray = textElement.textContent.split('');
			//span = span.replace(/[\r\n]+/g, '\n');
			if (spanArray[0] === ' ') {
				textElement.remove();
			}
		}); */

		let textElements = text.querySelectorAll('span');

		let count = 0;
		textElements.forEach((textElement, index) => {
			if (textElements[index - 1]) {
				if (textElements[index - 1].offsetTop == textElement.offsetTop) {
					textResult.push([textElement, count]);
				} else {
					count++;
					textResult.push([textElement, count]);
				}
			} else {
				textResult.push([textElement, count]);
			}
		})

		text.innerHTML = '';
		let textSpans = [], textCount = 0;

		Array.from(textResult).forEach((textResultElement, index) => {
			if (textResult[index - 1]) {
				if (textResult[index - 1][1] == textResultElement[1]) {
					if (!textSpans[textCount]) {
						textSpans[textCount] = [];
					}
					textSpans[textCount].push(textResultElement[0])
				} else {
					textCount++;
					if (!textSpans[textCount]) {
						textSpans[textCount] = [];
					}
					textSpans[textCount].push(textResultElement[0])
				}
			} else {
				textSpans[textCount] = [];
				textSpans[textCount].push(textResultElement[0])
			}
		})

		setTimeout(() => {
			Array.from(textSpans).forEach(textSpan => {
				let lineSpan = document.createElement('span'),
					lineSpanWrapper = document.createElement('span');

				lineSpan.classList.add('words-line');
				lineSpanWrapper.classList.add('words-line-element');
				for(let index = 0; index < textSpan.length; index++) {
					lineSpanWrapper.append(textSpan[index])
				}

				lineSpan.append(lineSpanWrapper)
				text.append(lineSpan)
				//text.insertAdjacentHTML("beforeend", `<span><span>${textSpan}</span></span>`);
			})
			wordsToLinesElement.classList.add('_init');
		}, 0)
	})


}

// =-=-=-=-=-=-=-=-=-=-=-=- <resize> -=-=-=-=-=-=-=-=-=-=-=-=

let resizeCheck = {}, windowSize;

function resizeCheckFunc(size, minWidth, maxWidth) {
	if (windowSize <= size && (resizeCheck[String(size)] == true || resizeCheck[String(size)] == undefined) && resizeCheck[String(size)] != false) {
		resizeCheck[String(size)] = false;
		maxWidth(); // < size
	}

	if (windowSize >= size && (resizeCheck[String(size)] == false || resizeCheck[String(size)] == undefined) && resizeCheck[String(size)] != true) {
		resizeCheck[String(size)] = true;
		minWidth(); // > size
	}
}

function resize() {

	windowSize = window.innerWidth;

	html.style.setProperty("--height-screen", window.innerHeight + "px");
	html.style.setProperty("--height-header", header.offsetHeight + "px");

	/* resizeCheckFunc(1000,
		function () {  // screen > 992px



	},
	function () {  // screen < 992px

		Scrollbar.destroy();

	}); */

}

resize();

window.onresize = resize;

// =-=-=-=-=-=-=-=-=-=-=-=- </resize> -=-=-=-=-=-=-=-=-=-=-=-=




const underlineText = document.querySelectorAll('.underline-text');
underlineText.forEach(underlineTextElement => {
	const spanWrapper = document.createElement('span');
	spanWrapper.classList.add('underline-text-element');
	const span = underlineTextElement.querySelector('span').cloneNode(true);
	span.classList.add('underline-text-span');
	spanWrapper.append(span);
	underlineTextElement.insertAdjacentElement('afterbegin', spanWrapper)
})

const mouse = document.querySelectorAll('.mouse'),
	openCursor = document.querySelector('.mouse._open-mode'),
	drag = document.querySelector('.mouse._cursor-drag');

mouse.forEach(mouse => {
	mouse.style.setProperty('--size', `${mouse.offsetWidth}px`);
})
var prevEvent, currentEvent;

const customCursorOpen = document.querySelectorAll('.custom-cursor-open');
customCursorOpen.forEach(customCursorOpen => {
	customCursorOpen.addEventListener('mouseenter', function () {
		const openCursor = customCursorOpen.querySelector('.mouse');
		openCursor.classList.add('_visible');
	})
	customCursorOpen.addEventListener('mouseleave', function () {
		const openCursor = customCursorOpen.querySelector('.mouse');
		openCursor.classList.remove('_visible');
	})
})
const cursorDrag = document.querySelectorAll('.cursor-drag');
cursorDrag.forEach(cursorDrag => {
	cursorDrag.addEventListener('mouseenter', function () {
		drag.classList.add('_visible');
	})
	cursorDrag.addEventListener('mouseleave', function () {
		drag.classList.remove('_visible');
	})
})
function moveMouse(event) {
	currentEvent=event;
	//html.style.setProperty('--speed', `${Math.abs(event.movementX) + Math.abs(event.movementY)}px`);
	

	/* if (event.clientX < 5 || event.clientY < 5 || event.clientY > (window.innerHeight - 5) || event.clientX > (window.innerWidth - 5)) {

	} else {	
		
	} */
	
	if (window.innerWidth >= 1000) {
		
		customCursorOpen.forEach(customCursorOpen => {
			customCursorOpen.style.setProperty('--mouse-x', `${event.clientX - customCursorOpen.getBoundingClientRect().x}px`);
			customCursorOpen.style.setProperty('--mouse-y', `${event.clientY - customCursorOpen.getBoundingClientRect().y}px`);	
		})
		
		cursorDrag.forEach(cursorDrag => {
			cursorDrag.style.setProperty('--mouse-x', `${event.clientX - cursorDrag.getBoundingClientRect().x}px`);
			cursorDrag.style.setProperty('--mouse-y', `${event.clientY - cursorDrag.getBoundingClientRect().y}px`);	
		})
		

	}

	

}

document.addEventListener('pointermove', moveMouse)
document.addEventListener('pointerdown', function () {
	mouse.forEach(mouse => {
		mouse.classList.add('_down');
	})
})

document.addEventListener('pointerup', function () {
	mouse.forEach(mouse => {
		mouse.classList.remove('_down');
	})
})



var maxSpeed=0,prevSpeed=0,maxPositiveAcc=0,maxNegativeAcc=0;
setInterval(function(){
  if(prevEvent && currentEvent){
    var movementX=Math.abs(currentEvent.screenX-prevEvent.screenX);
    var movementY=Math.abs(currentEvent.screenY-prevEvent.screenY);
    var movement=Math.sqrt(movementX*movementX+movementY*movementY);
    
    /* document.getElementById("movementX").innerText=movementX;
    document.getElementById("movementY").innerText=movementY;
    document.getElementById("movement").innerText=Math.round(movement); */
    
    //speed=movement/100ms= movement/0.1s= 10*movement/s
    var speed=movement/2;//current speed
    
  }
  
  prevEvent=currentEvent;
  prevSpeed=speed;

  html.style.setProperty('--speed', speed + 'px');
},100);
//document.addEventListener('scroll', moveMouse);
/* document.addEventListener('mousedown', function (event) {
	moveMouse(event)
}); */
//drag.addEventListener('mousedown', function () {console.log('down')});

const videoElements = document.querySelectorAll('.video-auto-element');
videoElements.forEach(videoElement => {
	videoElement.addEventListener('play', function () {
		const videoPoster = videoElement.closest('.video-auto-wrapper').querySelector('.video-auto-poster');
		videoPoster.classList.add('_hidden');
	})
})


// =-=-=-=-=-=-=-=-=-=-=-=- <slider> -=-=-=-=-=-=-=-=-=-=-=-=

let projectsSlider = new Swiper('.projects__slider', {

	spaceBetween: 24,
	slidesPerView: "auto",

});

let sliderSpeed = 1500, autoplayDelay = 4000;

let passionImageSlider = new Swiper('.passion__image-slider', {

	spaceBetween: 0,
	slidesPerView: 1,

	effect: "fade",
	loop: true,
	speed: sliderSpeed,

	autoplay: {
		delay: autoplayDelay,
	},

});

const passionTimer = document.querySelectorAll('.passion__timer');

let passionContentSlider = new Swiper('.passion__content-slider', {

	spaceBetween: 0,
	slidesPerView: 1,

	effect: "fade",
	loop: true,
	speed: sliderSpeed,

	autoplay: {
		delay: autoplayDelay,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	thumbs: {
		swiper: passionImageSlider,
	},

	on: {
		init: function () {
			html.style.setProperty('--slider-speed', autoplayDelay / 1000 + 's');
			const activeSlide = document.querySelector('.passion__content-slider').querySelector('.swiper-slide-active'),
				activeProggresTimer = activeSlide.querySelector('.passion__timer');

			activeProggresTimer.classList.add('_slide-change');
			activeProggresTimer.value = 100;
		},
		slideChangeTransitionEnd: function () {
			//console.log('end');
			const proggresTimer = document.querySelector('.passion__timer._slide-change');
			if (proggresTimer) {
				proggresTimer.classList.remove('_slide-change');
				proggresTimer.value = 0;

				const activeSlide = passionContentSlider.wrapperEl.querySelector('.swiper-slide-active'),
					activeProggresTimer = activeSlide.querySelector('.passion__timer');

				activeProggresTimer.classList.add('_slide-change');
				activeProggresTimer.value = 100;
			} else {
				const activeSlide = passionContentSlider.wrapperEl.querySelector('.swiper-slide-active'),
					activeProggresTimer = activeSlide.querySelector('.passion__timer');

				activeProggresTimer.classList.add('_slide-change');
				activeProggresTimer.value = 100;
			}

		}
	}

});

let clientsSlider = new Swiper('.clients__slider', {
	spaceBetween: 24,
	slidesPerView: "auto",
});

let latesUpdatesSlider = new Swiper('.lates-updates__slider', {
	spaceBetween: 24,
	slidesPerView: "auto",
});





//console.log(document.querySelector('.who-we-are__text').innerHTML.trim())

/* function progressTimer() {

} */

/*
let slider = new Swiper('.__slider', {

		spaceBetween: 30,
		slidesPerView: 1,
		centeredSlides: false,

		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			992: {
				slidesPerView: 3,
				centeredSlides: true,

			},
			600: {
				slidesPerView: 2,
				centeredSlides: false,
			},
		}
});
*/
// =-=-=-=-=-=-=-=-=-=-=-=- </slider> -=-=-=-=-=-=-=-=-=-=-=-=




// =-=-=-=-=-=-=-=-=-=-=-=- <Animation> -=-=-=-=-=-=-=-=-=-=-=-=

const preloader = document.querySelector('.preloader');
body.classList.add('_active');
preloader.classList.add('_active');

const scrollCheck = document.createElement('div');
scrollCheck.classList.add('scroll-check');
scrollCheck.setAttribute('aria-hidden', true);
body.append(scrollCheck);

window.onload = function () {
	wordsToLines();
	setTimeout(() => {
		preloader.classList.remove('_active');
		setTimeout(() => {
			body.classList.remove('_active');
			var scrollPositionX = 0;
			var scrollPositionY = 0;
			
			function isHidden(el) {
				return (el.offsetParent === null)
			}
			
			let tl = gsap.timeline();
			const animSection = document.querySelectorAll('.anim-section');
			let animSectionArray = [];
			
			function sortByIndex(arr) {
				if (windowSize < 980) return arr.sort((a, b) => a.mobIndex > b.mobIndex ? 1 : -1); else return arr.sort((a, b) => a.index > b.index ? 1 : -1);
			}
			
			animSection.forEach(animSection => {
			
				const animElement = animSection.querySelectorAll('.anim-element');
			
				let animArray = [];
				animElement.forEach(animElement => {
					const index = Number(animElement.dataset.index),
						mobIndex = (Number(animElement.dataset.mobIndex)) ? Number(animElement.dataset.mobIndex) : index;
			
					animArray.push({ element: animElement, index: index, mobIndex: mobIndex });
				})
			
				animArray = sortByIndex(animArray);
			
				let tl = new TimelineMax();
				tl.pause();
			
			
				Array.from(animArray).forEach((animArrayElement, index) => {
			
					const duration = (Number(animArrayElement['element'].dataset.duration)) ? Number(animArrayElement['element'].dataset.duration) : 0.5,
						delay = (Number(animArrayElement['element'].dataset.delay)) ? Number(animArrayElement['element'].dataset.delay) : 0,
						stagger = (Number(animArrayElement['element'].dataset.stagger)) ? Number(animArrayElement['element'].dataset.stagger) : 0.05,
						childrensReverse = (animArrayElement['element'].dataset.childrensReverse == "true") ? true : false;
			
					if (animArrayElement['element'].classList.contains('anim-text')) {
			
						tl.to(animArrayElement['element'], {
							//opacity: 1,
							duration: duration,
							delay: delay,
							onStart: function () {
			
								let spanArray = [];
								animArrayElement['element'].querySelectorAll('.words-line > .words-line-element').forEach(span => {
									//if (!isHidden(span)) spanArray.push(span); else span.style.transform = 'translate3d(0,0%,0)'; span.style.opacity = 1;
									spanArray.push(span);
								})
			
								gsap.to(spanArray, {
									transform: 'translate3d(0,0,0)',
									startAt: {
										transform: 'translate3d(0,100%,0)',
									},
									ease: "power4.out",
									duration: duration,
									stagger: stagger
			
								})
							}
						}, (index == 0) ? false : "-=1")
			
					} else if (animArrayElement['element'].classList.contains('anim-fade-in')) {
			
						tl.to(animArrayElement['element'], {
							opacity: 1,
							duration: duration,
							delay: delay,
						}, (index == 0) ? false : "-=1");
			
					} else if (animArrayElement['element'].classList.contains('anim-fade-up')) {
			
						tl.to(animArrayElement['element'], {
							opacity: 1,
							transform: 'translate3d(0,0,0)',
							startAt: {
								transform: 'translate3d(0,25px,0)',
							},
							duration: duration,
							delay: delay,
							onStart: function () {
								animArrayElement['element'].classList.add('_animated');
							}
						}, (index == 0) ? false : "-=1");
			
					} else if (animArrayElement['element'].classList.contains('anim-fade-right')) {
			
						tl.to(animArrayElement['element'], {
							opacity: 1,
							transform: 'translate3d(0,0,0)',
							startAt: {
								transform: 'translate3d(-20px,0,0)',
							},
							duration: duration,
							delay: delay,
						}, (index == 0) ? false : "-=1");
			
					} else if (animArrayElement['element'].classList.contains('anim-fade-left')) {
			
						tl.to(animArrayElement['element'], {
							opacity: 1,
							transform: 'translate3d(0,0,0)',
							startAt: {
								transform: 'translate3d(20px,0,0)',
							},
							duration: duration,
							delay: delay,
						}, (index == 0) ? false : "-=1");
			
					} else if (animArrayElement['element'].classList.contains('anim-zoom-out')) {
						tl.to(animArrayElement['element'], {
							opacity: 1,
							transform: 'scale3d(1,1,1)',
							startAt: {
								transform: 'scale3d(1.1,1.1,1)',
								opacity: 0,
							},
							duration: duration,
							ease: "power2.out",
							delay: delay,
						}, (index == 0) ? false : "-=1");
					} else if (animArrayElement['element'].classList.contains('anim-childrens-fade-right')) {
			
						tl.to(animArrayElement['element'], {
							opacity: 1,
							duration: duration,
							delay: delay,
							onStart: function () {
			
								let childrens = Array.from(animArrayElement['element'].children);
			
								if (childrensReverse) childrens = childrens.reverse();
			
								gsap.to(childrens, {
									transform: 'translate3d(0,0,0)',
									opacity: 1,
									startAt: {
										transform: 'translate3d(-20px,0,0)',
										opacity: 0,
									},
									duration: duration,
									stagger: stagger,
			
								})
							}
						}, (index == 0) ? false : "-=1")
			
					} else if (animArrayElement['element'].classList.contains('anim-fade-progress-right')) {
			
						tl.to(animArrayElement['element'], {
							opacity: 1,
							maskImage: 'linear-gradient(90deg, rgba(72,172,240,1) 100%, transparent 105%)',
							startAt: {
								maskImage: 'linear-gradient(90deg, rgba(72,172,240,1) -5%, transparent 0%)',
							},
							duration: duration,
							delay: delay,
						}, (index == 0) ? false : "-=1")
			
						/* tl.to(animArrayElement['element'], {
							opacity: 1,
							duration: duration,
							delay: delay,
						}, (index == 0) ? false : "-=1") */
					} else if (animArrayElement['element'].classList.contains('anim-childrens-fade-left')) {
			
						tl.to(animArrayElement['element'], {
							opacity: 1,
							duration: duration,
							delay: delay,
							onStart: function () {
			
								let childrens = Array.from(animArrayElement['element'].children);
			
								if (childrensReverse) childrens = childrens.reverse();
			
								gsap.to(childrens, {
									transform: 'translate3d(0,0,0)',
									opacity: 1,
									startAt: {
										transform: 'translate3d(20px,0,0)',
										opacity: 0,
									},
									duration: duration,
									stagger: stagger,
			
								})
							}
						}, (index == 0) ? false : "-=1")
			
					} else if (animArrayElement['element'].classList.contains('anim-zoom-in')) {
			
						tl.to(animArrayElement['element'], {
							opacity: 1,
							transform: 'scale3d(1,1,1)',
							startAt: {
								transform: 'scale3d(0.7,0.7,1)',
							},
							duration: duration,
							delay: delay,
			
						}, (index == 0) ? false : "-=1")
			
					} else if (animArrayElement['element'].classList.contains('anim-clip-down')) {
						tl.to(animArrayElement['element'], {
							opacity: 1,
							clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
							startAt: {
								clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)',
								opacity: 1,
							},
							ease: "power2.out",
							duration: duration,
							delay: delay,
						}, (index == 0) ? false : "-=1");
					}
			
				})
			
				animSection.style.opacity = 1;
				animSectionArray.push([animSection, tl]);
			
			})
			
			function animScroll() {
			
				Array.from(animSectionArray).forEach((animArrayElement, index) => {
					const element = animArrayElement[0],
						offset = (Number(animArrayElement[0].dataset.offset)) ? Number(animArrayElement[0].dataset.offset) : 0;
					elementCoords = element.getBoundingClientRect();
			
					if (window.innerHeight / 1.5 - offset > elementCoords.top && !element.classList.contains('_animated')) {
						element.classList.add('_animated')
						animArrayElement[1].play();
					}
				})
			}

			document.addEventListener('scroll', function (event) {
				animScroll();
				
				parallaxElementsFunc(Math.abs(scrollCheck.getBoundingClientRect().y));
			})

			function parallaxElementsFunc(scrollPositionY) {
				parallaxElements.forEach(parallaxElement => {
				
					if (parallaxElement.dataset.pos == "to-bottom") {
		
						if (document.querySelector(parallaxElement.dataset.anchor).offsetTop > scrollPositionY - (window.innerHeight)) {
							parallaxElement.style.transform = `translate3d(0,${scrollPositionY / 7}px,0)`;
						}
		
					} else {
		
						if (document.querySelector(parallaxElement.dataset.anchor).offsetTop > scrollPositionY - (window.innerHeight / 2)) {
							let result = (document.querySelector(parallaxElement.dataset.anchor).offsetTop - scrollPositionY) / 30;
							if (result >= 25) result = 25; else if (result <= -25) result = -25;
		
							parallaxElement.style.transform = `translate3d(0,${result}px,0)`;
						}
					}
		
				})
			}
			
			const parallaxElements = document.querySelectorAll('.anim-parallax-element');
			
			animScroll()
			
			function smoothScrollbarInit() {
			
				var bodyScroll = document.getElementById("main-scrollbar");
			
				bodyScrollBar = Scrollbar.init(bodyScroll, {
					damping: 0.05,
					delegateTo: document,
				});
			
				bodyScrollBar.addListener(({ offset }) => {

					
					/* if(window.currentEvent) {
						moveMouse(window.currentEvent)
					} */
					if(windowSize >= 1000) {
						scrollPositionX = offset.x;
						scrollPositionY = offset.y;
				
						if(body.classList.contains('_active')) bodyScrollBar.setPosition(0, 0, 0);
				
						parallaxElementsFunc(scrollPositionY);
					} else {
						bodyScrollBar.destroy()
					}
					
			
					
			
					animScroll()
			
				});
			
				/* scrollAnimation = scrollAnimation({
					element: '#main-scrollbar'
				});
				
				var smoothScrollBar = scrollAnimation.getScrollBar();
				
				var element = document.querySelector('.ss');
				smoothScrollBar.addListener(() => {
					console.log(smoothScrollBar.isVisible(element));    
				}); */
			
			}
			
			smoothScrollbarInit();
			bodyScrollBar.setPosition(0, 0);
			bodyScrollBar.limit.y = 0;
			bodyScrollBar.track.xAxis.element.remove();
			bodyScrollBar.update();


			gsap.to(header, {
				transform: 'translate3d(0,0,0)',
				delay: 0.5,
			});
			
			
			/* const startImage = document.querySelector('.start-image');
			
			startImage.addEventListener('load', function () {
				const lazyLoading = document.querySelectorAll('.lazy-loading');
				lazyLoading.forEach(lazyElement => {
					lazyElement.setAttribute('src', lazyElement.dataset.src);
					//lazyElement.load();
			
					const parent = lazyElement.closest('picture');
					if(parent) {
						parent.querySelectorAll('[data-webp-image]').forEach(webpImage => {
							webpImage.setAttribute('srcset', webpImage.dataset.webpImage);
						})
					}
					
					//lazyElement.load();
				})
			}) */
			
			/* var rellax = new Rellax('.rellax', {
				wrapper:'.wrapper'
			  }); */
		},0)
		setTimeout(() => {
			preloader.classList.add('_loaded');
		},400)
	}, 500);
}




// =-=-=-=-=-=-=-=-=-=-=-=- </Animation> -=-=-=-=-=-=-=-=-=-=-=-=
