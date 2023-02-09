
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

})

const videoOnHover = document.querySelectorAll('.video-on-hover');
videoOnHover.forEach(videoOnHover => {
	let blurCheck = false;
	videoOnHover.addEventListener('mouseenter', function () {

		const video = videoOnHover.querySelector('.video-wrapper').querySelector('.video-element');

		videoOnHover.classList.add('_hover');
		if(video.classList.contains('video-lazy-loading')) {
			if(video.classList.contains('_loaded')) {
				video.play();
			}
		} else {
			video.play();
		}

	})
	videoOnHover.addEventListener('mouseleave', function () {
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

		/* textResult = [];

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
		}) */
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
		//console.log(resizedCheck)
		Array.from(wordsToLinesArray).forEach(wordsToLinesArrayElement => {

			const text = wordsToLinesArrayElement[1],
				placeContent = wordsToLinesArrayElement[0];


			if (resizedCheck && placeContent.classList.contains('_animated')) placeContent.classList.add('_resized');
			placeContent.classList.remove('_init');
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
			let textResult = text.trim().split(' ');

			let hasTag = false, activeTag = false, activeImg, img;
			placeContent.innerHTML = '';
			//console.log(textResult)
			//const isHTMLTag = (str) => /(^<([^>]+)>$)/i.test(str)

			Array.from(textResult).forEach((textElement, index) => {

				if (!activeTag) {
					textResult[index] = `<span>${textElement}&nbsp;</span>`;

				} else if (activeTag && typeTag == 'mark') {
					textResult[index] = `<span><mark>${textElement}&nbsp;</mark></span>`;
				}
				//console.log(isHTMLTag(textElement))
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
				if (textElement) {
					placeContent.insertAdjacentHTML("beforeend", textResult[index])
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
	/* wordsToLines.forEach(wordsToLinesElement => {
		
	}) */
}



/* const underlineText = document.querySelectorAll('.underline-text');
underlineText.forEach(underlineTextElement => {
	const spanWrapper = document.createElement('span');
	spanWrapper.classList.add('underline-text-element');
	const span = underlineTextElement.querySelector('span').cloneNode(true);
	span.classList.add('underline-text-span');
	spanWrapper.append(span);
	underlineTextElement.insertAdjacentElement('afterbegin', spanWrapper)
}) */

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



var maxSpeed = 0, prevSpeed = 0, maxPositiveAcc = 0, maxNegativeAcc = 0;
setInterval(function () {
	if (prevEvent && currentEvent) {
		var movementX = Math.abs(currentEvent.screenX - prevEvent.screenX);
		var movementY = Math.abs(currentEvent.screenY - prevEvent.screenY);
		var movement = Math.sqrt(movementX * movementX + movementY * movementY);

		/* document.getElementById("movementX").innerText=movementX;
		document.getElementById("movementY").innerText=movementY;
		document.getElementById("movement").innerText=Math.round(movement); */

		//speed=movement/100ms= movement/0.1s= 10*movement/s
		var speed = movement / 2;//current speed

	}

	prevEvent = currentEvent;
	prevSpeed = speed;

	html.style.setProperty('--speed', speed + 'px');
}, 100);

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
	
			let scrollPositionX = 0, scrollPositionY = 0;
			let bodyScroll = document.getElementById("main-scrollbar");
	
	
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
			})
	
			function parallaxElementsFunc(scrollPositionY) {
				parallaxElements.forEach(parallaxElement => {
	
					if (parallaxElement.dataset.pos == "to-bottom") {
	
						if (document.querySelector(parallaxElement.dataset.anchor).offsetTop > scrollPositionY - (window.innerHeight)) {
							parallaxElement.style.transform = `translate3d(0,${scrollPositionY / 7}px,0)`;
						}
	
					} else {
						
						const parallaxElementAnchor = document.querySelector(parallaxElement.dataset.anchor);
						/* if (parallaxElementAnchor.offsetTop < scrollPositionY + window.innerHeight && parallaxElementAnchor.offsetTop + window.innerHeight > scrollPositionY) {
							//console.log((scrollPositionY) + ' ' + (parallaxElementAnchor.offsetTop + window.innerHeight))
							let result = (parallaxElementAnchor.offsetTop + window.innerHeight - scrollPositionY) / 5;
							console.log(-result);
							parallaxElement.style.setProperty('--y', -result  + 'px');
						} */


						if (parallaxElementAnchor.offsetTop > scrollPositionY - (window.innerHeight)) {
							let result = (parallaxElementAnchor.offsetTop - scrollPositionY) / 7;
							if (result >= parallaxElement.offsetHeight) result = parallaxElement.offsetHeight; else if (result <= -parallaxElement.offsetHeight) result = -parallaxElement.offsetHeight;
		
							parallaxElement.style.setProperty('--y', result  + 'px');
							//scrollImage.style.transform = `translate3d(0,${result}px,0)`;
						}
						//console.log(document.querySelector(parallaxElement.dataset.anchor).getBoundingClientRect())
						//let result = scrollPositionY - document.querySelector(parallaxElement.dataset.anchor).getBoundingClientRect().top - (window.innerHeight * 4);
						//parallaxElement.style.setProperty('--y', -document.querySelector(parallaxElement.dataset.anchor).getBoundingClientRect().top - header.offsetHeight + 'px');
					}
	
				})
			}
	
			const parallaxElements = document.querySelectorAll('.anim-parallax-element');
	
	
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
	
						/* thumbs: {
							swiper: passionImageSlider,
						}, */
	
						on: {
							init: function () {
								html.style.setProperty('--slider-speed', autoplayDelay / 1000 + 's');
								const 
								activeSlide = document.querySelector('.passion__content-slider').querySelector('.swiper-slide-active'),
								animateTitle = activeSlide.querySelector('.animate-title'),
								activeProggresTimer = activeSlide.querySelector('.passion__timer');
	
								if(animateTitle) {
									const lines = animateTitle.querySelectorAll('.words-line-element');
									gsap.to(lines, {
										transform: 'translate3d(0,0,0)',
										opacity: 1,
										duration: 0.5,
										stagger: 0.07,
									})
								}
	
								activeProggresTimer.classList.add('_slide-change');
								activeProggresTimer.style.setProperty('--value', '100%');
							},
							slideChangeTransitionEnd: function () {
								const 
								activeSlide = passionContentSlider.wrapperEl.querySelector('.swiper-slide-active'),
								animateTitle = activeSlide.querySelector('.animate-title'),
								proggresTimer = document.querySelector('.passion__timer._slide-change');
								
								
	
								if (proggresTimer) {
									proggresTimer.classList.remove('_slide-change');
									proggresTimer.style.setProperty('--value', '0%');
	
									const activeProggresTimer = activeSlide.querySelector('.passion__timer');
	
									activeProggresTimer.classList.add('_slide-change');
									activeProggresTimer.style.setProperty('--value', '100%');
								} else {
									const activeProggresTimer = activeSlide.querySelector('.passion__timer');
	
									activeProggresTimer.classList.add('_slide-change');
									activeProggresTimer.style.setProperty('--value', '100%');
								}
	
							},
							slideChangeTransitionStart: function () {
								const 
								activeSlide = passionContentSlider.wrapperEl.querySelector('.swiper-slide-active'),
								animateTitle = activeSlide.querySelector('.animate-title');
	
								setTimeout(() => {
									const 
									prevSlide = passionContentSlider.wrapperEl.querySelector('.swiper-slide-prev'),
									animateTitlePrev = prevSlide.querySelector('.animate-title');
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
									gsap.to(lines, {
										transform: 'translate3d(0,0,0)',
										opacity: 1,
										duration: 0.5,
										stagger: 0.07,
									})
								}
							}
						}
	
					});
				}
	
	
				let clientsSlider;
				if (document.querySelector('.projects__slider')) {
					clientsSlider = new Swiper('.clients__slider', {
						spaceBetween: 24,
						slidesPerView: "auto",
					});
				}
	
	
				let latesUpdatesSlider;
				if (document.querySelector('.projects__slider')) {
					latesUpdatesSlider = new Swiper('.lates-updates__slider', {
						spaceBetween: 24,
						slidesPerView: "auto",
					});
				}
	
	
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




