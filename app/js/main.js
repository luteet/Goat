
const body = document.querySelector('body'),
	html = document.querySelector('html'),
	menu = document.querySelectorAll('.header__burger, .header__nav, .header, body'),
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
			gsap.to(activeCard.querySelectorAll('.word-span'), {
				transform: 'translate3d(0,50%,0)',
				opacity: 0,
				ease: "power4.out",
				duration: 0.3,
				stagger: 0,
			})
		}
		if (clientsCardBody.classList.contains('_active')) {
			activeCard.classList.remove('_active')
			gsap.to(clientsCardBody.querySelectorAll('.word-span'), {
				transform: 'translate3d(0,50%,0)',
				opacity: 0,
				ease: "power4.out",
				duration: 0.3,
				stagger: 0,
			})
		} else {
			clientsCardBody.classList.add('_active');
			gsap.to(clientsCardBody.querySelectorAll('.word-span'), {
				transform: 'translate3d(0,0,0)',
				opacity: 1,
				ease: "power4.out",
				duration: 0.3,
				stagger: 0.015,
			})
		}

	} else if (activeCard) {
		activeCard.classList.remove('_active')
		gsap.to(activeCard.querySelectorAll('.word-span'), {
			transform: 'translate3d(0,50%,0)',
			opacity: 0,
			ease: "power4.out",
			duration: 0.3,
			stagger: 0,
		})
		/* gsap.to(clientsCardBody.querySelectorAll('.word-span'), {
			transform: 'translate3d(0,100%,0)',
			opacity: 0,
			ease: "power4.out",
			duration: 0.2,
			stagger: 0.02,
		}) */
	}

	// =-=-=-=-=-=-=-=-=-=- </learn more card> -=-=-=-=-=-=-=-=-=-=-



	// =-=-=-=-=-=-=-=-=-=- <animate-decor-lines> -=-=-=-=-=-=-=-=-=-=-

	const animateDecorLines = $('.animate-decor-lines'),
		  animateDecorLineHover = document.querySelector('.animate-decor-lines._hover');

	if(animateDecorLines) {

		const lines = animateDecorLines.querySelectorAll('.words-decor-line'),
		spaceSpan = document.createElement('span');
		spaceSpan.innerHTML = '&nbsp;';
		spaceSpan.style.display = 'inline-block';
		spaceSpan.style.position = 'absolute';
		spaceSpan.style.pointerEvents = 'none';

		animateDecorLines.append(spaceSpan)

		const spaceWidth = spaceSpan.offsetWidth;

		spaceSpan.remove();
		animateDecorLines.style.setProperty('--space-width', spaceWidth + 'px');

		if(!animateDecorLines.classList.contains('_hover')) {
			animateDecorLines.classList.add('_hover');
			gsap.to(lines, {
				transform: 'scale(2,1)',
				duration: 0.5,
				stagger: 0.2,
			})
			
		}

		
	} else if(animateDecorLineHover) {
		animateDecorLineHover.classList.remove('_hover');
		gsap.to(lines, {
			transform: 'scale(0,1)',
			duration: 0.5,
			stagger: 0.2,
		})
	}

	// =-=-=-=-=-=-=-=-=-=- </animate-decor-lines> -=-=-=-=-=-=-=-=-=-=-



	// =-=-=-=-=-=-=-=-=-=- <FAQ> -=-=-=-=-=-=-=-=-=-=-

	const faqItemHeader = $('.faq__item--header');
	if(faqItemHeader) {

		if(!faqItemHeader.classList.contains('_animating')) {
			faqItemHeader.classList.add('_animating');
			
			const faqItem = faqItemHeader.closest('.faq__item'),
			  faqItemContent = faqItem.querySelector('.faq__item--content');

		
			/* faqItemContent.style.display = 'block';
			const height = faqItemContent.offsetHeight; */
			

			if(faqItem.classList.contains('_active')) {

				faqItemContent.style.transitionProperty = 'height';
				const height = faqItemContent.offsetHeight;
				faqItemContent.style.height = height + 'px';
				setTimeout(() => {
					faqItemContent.style.height = 0;
					faqItem.classList.remove('_active')
					gsap.to(faqItemContent.querySelectorAll('.word-span'), {
						transform: 'translate3d(0,50%,0)',
						opacity: 0,
						duration: 0.2,
						stagger: 0,
					})
					setTimeout(() => {
						faqItemContent.style.removeProperty('transition-property')
						faqItemContent.style.display = 'none';
						faqItemContent.style.removeProperty('height')
						faqItemHeader.classList.remove('_animating');
					},300)
				},0)

			} else {

				faqItem.classList.add('_active');
				faqItemContent.style.removeProperty('height');
				faqItemContent.style.display = 'block';
				const height = faqItemContent.offsetHeight;
				faqItemContent.style.height = 0;
				faqItemContent.style.transitionProperty = 'height';
				
				setTimeout(() => {
					faqItemContent.style.height = height + 'px';
					gsap.to(faqItemContent.querySelectorAll('.word-span'), {
						transform: 'translate3d(0,0,0)',
						opacity: 1,
						duration: 0.2,
						stagger: 0.01,
					})
					setTimeout(() => {
						faqItemContent.style.removeProperty('transition-property')
						faqItemContent.style.removeProperty('height');
						faqItemHeader.classList.remove('_animating');
					},300)
				},0)
				
			}
		}

		
	}

	// =-=-=-=-=-=-=-=-=-=- </FAQ> -=-=-=-=-=-=-=-=-=-=-

})

const videoOnHover = document.querySelectorAll('.video-on-hover');
videoOnHover.forEach(videoOnHover => {
	let blurCheck = false;
	videoOnHover.addEventListener('mouseenter', function () {

		if(window.innerWidth > 965) {
			const video = videoOnHover.querySelector('.video-wrapper').querySelector('.video-element');

			videoOnHover.classList.add('_hover');
			if(video.classList.contains('video-lazy-loading')) {
				if(video.classList.contains('_loaded')) {
					video.play();
				}
			} else {
				video.play();
			}

		}

	})
	videoOnHover.addEventListener('mouseleave', function () {

		if(window.innerWidth > 965) {
			videoOnHover.classList.remove('_hover');
			blurCheck = true;
	
			const video = videoOnHover.querySelector('.video-wrapper').querySelector('.video-element');
	
			if(video.classList.contains('video-lazy-loading')) {
				if(video.classList.contains('_loaded')) {
					video.currentTime = 0;
					video.pause()
				}
			} else {
				video.currentTime = 0;
				video.pause()
			}
		}
		
		
	})
})

function wordsToSpan() {
	const wordsToLines = document.querySelectorAll('.words-to-span');
	wordsToLines.forEach(wordsToLinesElement => {
		const text = wordsToLinesElement;
		let textResult = text.textContent.trim().split(' ').map(function (s) { return `<span class="word-span">${s}&nbsp;</span>`; });

		text.innerHTML = '';

		Array.from(textResult).forEach((textElement, index) => {
			if (textElement) {
				text.insertAdjacentHTML("beforeend", textResult[index])
			}

		})
	})


}

wordsToSpan();


function wordsToLines() {
	const wordsToLines = document.querySelectorAll('.words-to-lines');
	let wordsToLinesArray = [];

	wordsToLines.forEach(wordsToLinesElement => {
		wordsToLinesArray.push([wordsToLinesElement, wordsToLinesElement.innerHTML]);
	})

	function wordsToLinesFunc(resized) {
		let resizedCheck = resized;

		Array.from(wordsToLinesArray).forEach(wordsToLinesArrayElement => {

			const text = wordsToLinesArrayElement[1],
				placeContent = wordsToLinesArrayElement[0];


			if (resizedCheck && placeContent.classList.contains('_animated')) placeContent.classList.add('_resized');
			placeContent.classList.remove('_init');

			let tagCheck = false;
			let textResult = text.trim().split(' ');

			let hasTag = false, activeTag = false, activeImg, img;
			placeContent.innerHTML = '';

			Array.from(textResult).forEach((textElement, index) => {

				if (!activeTag) {
					textResult[index] = `<span>${textElement}&nbsp;</span>`;

				} else if (activeTag && typeTag == 'mark') {
					textResult[index] = `<span><mark>${textElement}&nbsp;</mark></span>`;
				}
				
				if (textElement.includes('<mark>') && textElement.includes('</mark>')) {

					textElement = textElement.replace('<mark>', '');
					textElement = textElement.replace('</mark>', '');

					activeTag = true;
					typeTag = 'mark';
					textResult[index] = `<span><mark>${textElement}&nbsp;</mark></span>`;

				} else if (textElement.includes('<mark>')) {

					textElement = textElement.replace('<mark>', '');
					activeTag = true;
					typeTag = 'mark';
					textResult[index] = `<span><mark>${textElement}&nbsp;</mark></span>`;

				} else if (textElement.includes('</mark>')) {

					activeTag = false;
					textElement = textElement.replace('</mark>', '');
					textResult[index] = `<span><mark>${textElement}&nbsp;</mark></span>`;

				}

				if (textElement.includes('<img')) {
					img = textElement;
					activeImg = true;
					delete textResult[index];
				} else if (!textElement.includes('>') && !textElement.includes('mark>') && activeImg) {
					img += ` ${textElement} `;
					delete textResult[index];
				} else if (activeImg) {
					img += textElement;
					textResult[index] = `<span>${img}</span>`;
					activeImg = false;
				}

			})

			Array.from(textResult).forEach((textElement, index) => {
				if (textElement) {
					placeContent.insertAdjacentHTML("beforeend", textResult[index])
				}

			})

			textResult = [];

			let textElements = placeContent.querySelectorAll('span');

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

			placeContent.innerHTML = '';
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

			Array.from(textSpans).forEach(textSpan => {
				let lineSpan = document.createElement('span'),
					lineDecor = document.createElement('span'),
					lineSpanWrapper = document.createElement('span');

				lineSpan.classList.add('words-line');
				lineDecor.classList.add('words-decor-line');
				lineSpanWrapper.classList.add('words-line-element');

				for (let index = 0; index < textSpan.length; index++) {
					lineSpanWrapper.append(textSpan[index])
				}

				lineSpan.append(lineSpanWrapper)
				lineSpan.append(lineDecor);

				const widthSpace = document.createElement('span');
				widthSpace.style.position = 'absolute';
				widthSpace.style.display = 'inline-block';
				widthSpace.style.pointerEvents = 'none';
				widthSpace.innerHTML = '&nbsp;';
				
				placeContent.append(lineSpan)
				placeContent.append(widthSpace)

				placeContent.style.setProperty('--space-width', widthSpace.offsetWidth + 'px');
				widthSpace.remove();
				
			})
			placeContent.classList.add('_init');
		})
	}

	wordsToLinesFunc();

	window.addEventListener('resize', function () {
		wordsToLinesFunc(true);
	})
}

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
	currentEvent = event;

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


const videoElements = document.querySelectorAll('.video-auto-element');
videoElements.forEach(videoElement => {
	videoElement.addEventListener('play', function () {
		const videoPoster = videoElement.closest('.video-auto-wrapper').querySelector('.video-auto-poster');
		videoPoster.classList.add('_hidden');
	})
})

const preloader = document.querySelector('.preloader'),
	  preloaderElement = preloader.querySelector('.preloader__element');

const videoLazyLoading = document.querySelectorAll('.video-lazy-loading');

html.style.setProperty("--height-screen-start", window.innerHeight + "px");
html.style.setProperty("--height-screen", window.innerHeight + "px");
html.style.setProperty("--height-header", header.offsetHeight + "px");

document.addEventListener('DOMContentLoaded', function () {

	preloaderElement.src = preloaderElement.dataset.src;
	preloaderElement.load()
	
	preloaderElement.onloadeddata = function () {
		preloaderElement.play()
		preloader.classList.add('_active');
		
		setTimeout(() => {
			preloader.classList.remove('_active');
	
			wordsToLines();
	
			// =-=-=-=-=-=-=-=-=-=-=-=- <Animation> -=-=-=-=-=-=-=-=-=-=-=-=
	
			let windowSize = window.innerWidth;
	
			const scrollCheck = document.createElement('div');
			scrollCheck.classList.add('scroll-check');
			scrollCheck.setAttribute('aria-hidden', true);
			body.append(scrollCheck);
	
			let scrollPositionY = 0;
			let bodyScroll = document.getElementById("main-scrollbar");
	
			//let tl = gsap.timeline();
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
						stagger = (Number(animArrayElement['element'].dataset.stagger)) ? Number(animArrayElement['element'].dataset.stagger) : 0.05;
	
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
									stagger: stagger,
									onComplete: function () {
										animArrayElement['element'].classList.add('_animated');
									}
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
	
					}
	
				})
	
				animSection.style.opacity = 1;
				animSectionArray.push([animSection, tl]);
	
			})
	
			function animScroll() {

				html.style.setProperty("--height-screen", window.innerHeight + "px");
				html.style.setProperty("--height-header", header.offsetHeight + "px");
	
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
				horizontalParallax(Math.abs(scrollCheck.getBoundingClientRect().y));
			})
	
			function parallaxElementsFunc(scrollPositionY) {
				parallaxElements.forEach(parallaxElement => {
	
					if (parallaxElement.dataset.pos == "to-bottom") {
	
						if (document.querySelector(parallaxElement.dataset.anchor).offsetTop > scrollPositionY - (window.innerHeight)) {
							parallaxElement.style.transform = `translate3d(0,${scrollPositionY / 7}px,0)`;
						}
	
					} else {
						
						const parallaxElementAnchor = document.querySelector(parallaxElement.dataset.anchor);

						if (parallaxElementAnchor.offsetTop > scrollPositionY - (window.innerHeight)) {
							let result = (parallaxElementAnchor.offsetTop - scrollPositionY) / 7;
							if (result >= parallaxElement.offsetHeight) result = parallaxElement.offsetHeight; else if (result <= -parallaxElement.offsetHeight) result = -parallaxElement.offsetHeight;
		
							parallaxElement.style.setProperty('--y', result  + 'px');
						}
					}
	
				})
			}

			function horizontalParallax(scrollPositionY) {
				horizontalParallaxElements.forEach(horizontalParallaxElement => {
	
					const parallaxElementAnchor = document.querySelector(horizontalParallaxElement.dataset.anchor);

					if (parallaxElementAnchor.offsetTop > scrollPositionY - (window.innerHeight)) {
						let result = (parallaxElementAnchor.offsetTop - scrollPositionY) / 3;
						if (result >= window.innerHeight) result = horizontalParallaxElement.offsetHeight; else if (result <= -window.innerHeight) result = -horizontalParallaxElement.offsetHeight;
	
						horizontalParallaxElement.style.setProperty('--x', horizontalParallaxElement.classList.contains('_reverse') ? -result + 'px' : result  + 'px');
					}
	
				})
			}
	
			const parallaxElements = document.querySelectorAll('.anim-parallax-element'),
			horizontalParallaxElements = document.querySelectorAll('.anim-horizontal-parallax-element');
	
	
			function smoothScrollbarInit() {
	
				bodyScrollBar = Scrollbar.init(bodyScroll, {
					damping: 0.05,
					delegateTo: document,
				});
	
				bodyScrollBar.addListener(({ offset }) => {
	
					scrollPositionX = offset.x;
					scrollPositionY = offset.y;
	
					if (body.classList.contains('_active')) bodyScrollBar.setPosition(0, 0, 0);
	
					parallaxElementsFunc(scrollPositionY);
					horizontalParallax(scrollPositionY);
	
					animScroll()
	
				});
	
			}
	
	
			// =-=-=-=-=-=-=-=-=-=-=-=- <resize> -=-=-=-=-=-=-=-=-=-=-=-=
	
			let resizeCheck = {};
	
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
	
				resizeCheckFunc(1000,
					function () {  // screen > 992px
	
						smoothScrollbarInit();
						bodyScrollBar.setPosition(0, 0);
						bodyScrollBar.limit.y = 0;
						bodyScrollBar.track.xAxis.element.remove();
						bodyScrollBar.update();
	
					},
					function () {  // screen < 992px
	
						try {
							bodyScrollBar.destroy()
						} catch {
	
						}
	
	
					});
	
			}
	
			resize();
	
			window.onresize = resize;
	
			// =-=-=-=-=-=-=-=-=-=-=-=- </resize> -=-=-=-=-=-=-=-=-=-=-=-=
	
			setTimeout(() => {
				body.classList.add('_overflow-visible');
	
				animScroll()
	
				gsap.to(header, {
					transform: 'translate3d(0,0,0)',
					delay: 0.5,
				});
	
				const animateDecorLines = document.querySelectorAll('.animate-decor-lines');
				animateDecorLines.forEach(animateDecorLine => {
	
					const lines = animateDecorLine.querySelectorAll('.words-decor-line'),
					spaceSpan = document.createElement('span');
					spaceSpan.innerHTML = '&nbsp;';
					spaceSpan.style.display = 'inline-block';
					spaceSpan.style.position = 'absolute';
					spaceSpan.style.pointerEvents = 'none';
	
					animateDecorLine.append(spaceSpan)
	
					const spaceWidth = spaceSpan.offsetWidth;
	
					spaceSpan.remove();
					animateDecorLine.style.setProperty('--space-width', spaceWidth + 'px');
	
					animateDecorLine.addEventListener('mouseenter', function () {
						gsap.to(lines, {
							transform: 'scale(2,1)',
							duration: 0.5,
							stagger: 0.2,
						})
					})
	
					animateDecorLine.addEventListener('mouseleave', function () {
						gsap.to(lines, {
							transform: 'scale(0,1)',
							duration: 0.5,
							stagger: 0.2,
						})
					})
				})
	
				// =-=-=-=-=-=-=-=-=-=-=-=- <slider> -=-=-=-=-=-=-=-=-=-=-=-=
	
				let projectsSlider
				if (document.querySelector('.projects__slider')) {
					projectsSlider = new Swiper('.projects__slider', {
	
						spaceBetween: 24,
						slidesPerView: "auto",
	
					});
				}
	
	
				let sliderSpeed = 500, autoplayDelay = 4000;
	
				const passionTimer = document.querySelectorAll('.passion__timer');
	
				let passionContentSlider
				if (document.querySelector('.projects__slider')) {
					passionContentSlider = new Swiper('.passion__content-slider', {
	
						spaceBetween: 0,
						slidesPerView: 1,
	
						allowTouchMove: false,
	
						effect: "fade",
						loop: true,
						speed: sliderSpeed,
	
						autoplay: {
							delay: autoplayDelay,
							disableOnInteraction: false,
						},
	
						navigation: {
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						},
	
						on: {
							init: function () {
								html.style.setProperty('--slider-speed', autoplayDelay / 1000 + 's');
								const 
								activeSlide = document.querySelector('.passion__content-slider').querySelector('.swiper-slide-active'),
								animateTitle = activeSlide.querySelector('.animate-title'),
								activeProggresTimer = activeSlide.querySelector('.passion__timer');
	
								if(animateTitle && windowSize > 965) {
									const lines = animateTitle.querySelectorAll('.words-line-element');
									gsap.to(lines, {
										transform: 'translate3d(0,0,0)',
										opacity: 1,
										duration: 0.5,
										stagger: 0.07,
									})
								}
	
								activeProggresTimer.classList.add('_slide-change');
							},
							slideChangeTransitionEnd: function () {
								const 
								activeSlide = passionContentSlider.wrapperEl.querySelector('.swiper-slide-active'),
								proggresTimer = document.querySelector('.passion__timer._slide-change');
	
								if (proggresTimer) {
									setTimeout(() => {
										proggresTimer.classList.remove('_slide-change');	
									},500)
	
									const activeProggresTimer = activeSlide.querySelector('.passion__timer');
	
									activeProggresTimer.classList.add('_slide-change');
								} else {
									const activeProggresTimer = activeSlide.querySelector('.passion__timer');
	
									activeProggresTimer.classList.add('_slide-change');
								}
	
							},
							slideChangeTransitionStart: function () {
								const 
								activeSlide = passionContentSlider.wrapperEl.querySelector('.swiper-slide-active'),
								animateTitle = activeSlide.querySelector('.animate-title');
	
								setTimeout(() => {
									const 
									prevSlide = passionContentSlider.wrapperEl.querySelector('.swiper-slide-prev'),
									animateTitlePrev = (prevSlide) ? prevSlide.querySelector('.animate-title') : false;
									if(animateTitlePrev) {
										const lines = animateTitlePrev.querySelectorAll('.words-line-element');
										gsap.to(lines, {
											transform: 'translate3d(0,50%,0)',
											opacity: 1,
											duration: 0,
											stagger: 0,
										})
									}
								},500)
	
								if(animateTitle) {
									const lines = animateTitle.querySelectorAll('.words-line-element');
									if(windowSize > 965) {
										gsap.to(lines, {
											transform: 'translate3d(0,0,0)',
											opacity: 1,
											duration: 0.5,
											stagger: 0.07,
										})
									} else {
										/* lines.forEach(line => {
											line.style.transform = 'translate3d(0,0,0)';
										}) */
									}
									
								}
							}
						}
	
					});
				}
	
	
				let clientsSlider;
				if (document.querySelector('.clients__slider')) {
					clientsSlider = new Swiper('.clients__slider', {
						spaceBetween: 24,
						slidesPerView: "auto",
					});
				}
	
	
				let latesUpdatesSlider;
				if (document.querySelector('.lates-updates__slider')) {
					latesUpdatesSlider = new Swiper('.lates-updates__slider', {
						spaceBetween: 24,
						slidesPerView: "auto",
					});
				}

				/* let wordsSlider;
				if(document.querySelector('.words__line')) {
					document.querySelectorAll('.words__line').forEach(slider => {
						new Swiper(slider, {
							spaceBetween: 0,
							slidesPerView: "auto",
							slidesPerGroupAuto: true,
							loop: true,
							allowTouchMove: false,
							loopAdditionalSlides: 3,
							
							speed: 6000,
						});
					})
					
				} */
	
				// =-=-=-=-=-=-=-=-=-=-=-=- </slider> -=-=-=-=-=-=-=-=-=-=-=-=
	
	
			}, 500);
			setTimeout(() => {
				preloader.classList.add('_loaded');
			}, 400)
		}, 1500)
	}
	
})

window.onload = function () {
	videoLazyLoading.forEach(videoLazyLoadingElement => {
		videoLazyLoadingElement.src = videoLazyLoadingElement.dataset.src;
		if(videoLazyLoadingElement.dataset.autoplay == 'true') {
			videoLazyLoadingElement.autoplay = true;
		}
		videoLazyLoadingElement.load();
		videoLazyLoadingElement.onloadeddata = function () {
			videoLazyLoadingElement.classList.add('_loaded');
		}
		
	})
}


// =-=-=-=-=-=-=-=-=-=-=-=- </Animation> -=-=-=-=-=-=-=-=-=-=-=-=




