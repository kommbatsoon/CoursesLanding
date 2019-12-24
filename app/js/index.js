const WINDOW_WIDTH = window.innerWidth;
const isMobile = WINDOW_WIDTH <= 768;

const CONFIG = {
	scrollingTime: 1500,
	sliderSettings: {
		slidesToShow: isMobile ? 1 : 2,
		autoPlay: false,
		autoPlaySpeed: 2000,
	},
	placesLeft: 7,
	educationPoints: [
		{
			title: 'Длительность 6 месяцев',
			description: '3 занятия в неделю от 30 минут до 1.30 часа в зависимости от темы. И понимания человеком материала.'
		},
		{
			title: 'Дипломный проект',
			description: 'После обучения дипломный проект, который уже включен в курс и платить за него не нужно.'
		},
		{
			title: 'Разбор собеседований',
			description: 'Кратко расписать что и как, я не шарю, помогите мне, пожалуйста, я не знаю, что тут писать'
		},
		{
			title: 'Стажировка',
			description: 'Кратко расписать что и как, я не шарю, помогите мне, пожалуйста, я не знаю, что тут писать'
		}
	],
	projects: [
		{
			id: 'project1',
			image: 'project1.png',
			name: 'Проект 1',
			description: 'Описане 1го проекта',
			preview: {
				title1: 'Заголовок 1',
				description1: 'Утром в ржаном закуте, Где златятся рогожи в ряд, Семерых ощенила сука, Рыжих семерых щенят. \n' +
					'До вечера она их ласкала, Причесывая языком, И струился снежок подталый.Под теплым ее животом.\n' +
					'А вечером, когда куры. Обсиживают шесток, Вышел хозяин хмурый, Семерых всех поклал в мешок. \n' +
					'По сугробам она бежала, Поспевая за ним бежать…И так долго, долго дрожала. Воды незамерзшей гладь.',
				image1: 'project-preview1-1.png',
				title2: 'Заголовок 2',
				description2: 'Утром в ржаном закуте, Где златятся рогожи в ряд, Семерых ощенила сука, Рыжих семерых щенят. \n' +
					'До вечера она их ласкала, Причесывая языком, И струился снежок подталый.Под теплым ее животом.\n' +
					'А вечером, когда куры. Обсиживают шесток, Вышел хозяин хмурый, Семерых всех поклал в мешок. \n' +
					'По сугробам она бежала, Поспевая за ним бежать…И так долго, долго дрожала. Воды незамерзшей гладь.',
				image2: 'project-preview1-1.png',
			}
		},
		{
			id: 'project2',
			image: 'project1.png',
			name: 'Проект 2',
			description: 'Описане 2го проекта',
			preview: {
				title1: 'Заголовок 1',
				description1: 'Описание 1',
				image1: 'project1.png',
				title2: 'Заголовок 2',
				description2: 'Описание 2',
				image2: 'project1.png',
			}
		},
		{
			id: 'project3',
			image: 'project1.png',
			name: 'Проект 3',
			description: 'Описане 3го проекта',
			preview: {
				title1: 'Заголовок 1',
				description1: 'Описание 1',
				image1: 'project1.png',
				title2: 'Заголовок 2',
				description2: 'Описание 2',
				image2: 'project1.png',
			}
		},
		{
			id: 'project4',
			image: 'project1.png',
			name: 'Проект 4',
			description: 'Описане 4го проекта',
			preview: {
				title1: 'Заголовок 1',
				description1: 'Описание 1',
				image1: 'project1.png',
				title2: 'Заголовок 2',
				description2: 'Описание 2',
				image2: 'project1.png',
			}
		},
	],
	reviews: [
		{
			avatar: 'avatar.png',
			authorName: 'Robbie Williams',
			date: '12 ноября 2019',
			text: 'Всем, кто заинтересован и старателен и кого не устраивает текущая зарплата, а кодить можно научить любого, если грамотно подается материал и человек прилагает усилия.'
		},
		{
			avatar: 'avatar.png',
			authorName: 'Гена Williams',
			date: '12 ноября 2019',
			text: 'Всем, кто заинтересован и старателен и кого не устраивает текущая зарплата, а кодить можно научить любого, если грамотно подается материал и человек прилагает усилия.'
		},
		{
			avatar: 'avatar.png',
			authorName: 'Гена Турбо',
			date: '12 ноября 2019',
			text: 'Всем, кто заинтересован и старателен и кого не устраивает текущая зарплата, а кодить можно научить любого, если грамотно подается материал и человек прилагает усилия.'
		}
	]
};

(function () {
	window.scrollTo(0, 0);

	/**
	 *
	 * Working with EDUCATION PROCESS
	 *
	 * */

	function printEducationPoints(points) {
		const node = document.getElementById('education-points');

		points.forEach(function (project) {
			node.innerHTML += `
				<div class="point">
					<p class="title">${project.title}</p>
					<p class="description">${project.description}</p>
				</div>
				`;
		});
	}

	/**
	 *
	 * Working with PROJECTS
	 *
	 * */

	const MAIN_CONTAINER     = document.getElementById('main-container');
	const PROJECT_PAGE       = document.getElementById('project-page');
	let PREVIEW_CLOSE_BUTTON = document.getElementById('close-button');

	function printProjects(projects) {
		const node = document.getElementById('projects');

		projects.forEach(function (project, key) {
			const imagePath = './assets/images/projects/' + project.image;

			node.innerHTML += `
					<div class="project">
						<img src="${imagePath}"/>
						<p class="name">${project.name}</p>
						<p class="description">${project.description}</p>
					</div>
				`;

			let projectNodes = document.getElementsByClassName('project');

			for (let index = 0; index < projectNodes.length; index++) {
				projectNodes[index].addEventListener('click', function () {
					setActiveProject(index)
				});
			}
		});
	}
	function printProjectPreview(project) {
		const imagePath = './assets/images/projects/';

		PROJECT_PAGE.innerHTML = `
		<div class="project-page-container">
			<h1>${project.name}</h1>
			<h2>${project.name}</h2>
	
			<div class="scroll-container">
				<section>
					<img src="${imagePath + project.image1}" alt="Preview image" class="right-margin">
					<div class="info-block">
						<p class="section-title">${project.title1}</p>
						<p class="description">${project.description1}</p>
					</div>
				</section>
				<section>
					<div class="info-block">
						<p class="section-title">${project.title2}</p>
						<p class="description">${project.description2}</p>
					</div>
					<img src="${imagePath + project.image2}" alt="Preview image" class="left-margin">
				</section>
			</div>
	
			<div class="button-container">
				<button class="close-button" id="close-button">
					<img src="assets/images/icons/close-icon.png">
				</button>
			</div>
		</div>
	`;

		PREVIEW_CLOSE_BUTTON = document.getElementById('close-button');
	}
	function setActiveProject(index) {
		MAIN_CONTAINER.classList.toggle('hidden');
		PROJECT_PAGE.classList.toggle('visible');

		const projectPreview = CONFIG.projects[index] && {
			name: CONFIG.projects[index].name,
			...CONFIG.projects[index].preview
		};

		printProjectPreview(projectPreview);

		PREVIEW_CLOSE_BUTTON.addEventListener('click', function () {
			MAIN_CONTAINER.classList.toggle('hidden');
			PROJECT_PAGE.classList.toggle('visible');
		});
	}

	/**
	 *
	 * Working with SCROLLING
	 *
	 * */

	const MENU_LINKS = [
		{node: document.getElementById('salary-link'), navigateToID: '#salary-section'},
		{node: document.getElementById('salary-link-mobile'), navigateToID: '#salary-section'},
		{node: document.getElementById('coach-link'), navigateToID: '#coach-section'},
		{node: document.getElementById('coach-link-mobile'), navigateToID: '#coach-section'},
		{node: document.getElementById('faq-link'), navigateToID: '#faq-section'},
		//{node: document.getElementById('faq-link-mobile'), navigateToID: '#faq-section'},
		{node: document.getElementById('process-link'), navigateToID: '#education-section'},
		{node: document.getElementById('process-link-mobile'), navigateToID: '#education-section'},
		{node: document.getElementById('enroll-link'), navigateToID: '#enroll-section'},
		{node: document.getElementById('enroll-link-mobile'), navigateToID: '#enroll-section'},
		{node: document.getElementById('enroll1-link'), navigateToID: '#enroll-section'},
		{node: document.getElementById('enroll2-link'), navigateToID: '#enroll-section'},
		{node: document.getElementById('enroll3-link'), navigateToID: '#enroll-section'},
		{node: document.getElementById('enroll4-link'), navigateToID: '#enroll-section'},
		{node: document.getElementById('enroll5-link'), navigateToID: '#enroll-section'},
	];

	function doScrolling(element, duration) {
		let startingY = window.pageYOffset;
		let elementY = window.pageYOffset + document.querySelector(element).getBoundingClientRect().top - (isMobile ? 300 : 60);
		let targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY;
		let diff = targetY - startingY + 5;
		let easing = function (t) {
			return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
		};
		let start;

		if (!diff) return;

		window.requestAnimationFrame(function step(timestamp) {
			if (!start) start = timestamp;
			let time = timestamp - start;
			let percent = Math.min(time / duration, 1);
			percent = easing(percent);

			window.scrollTo(0, startingY + diff * percent);

			if (time < duration) {
				window.requestAnimationFrame(step)
			}
		})
	}

	MENU_LINKS.forEach(link => {
		link.node.addEventListener('click', function () {
			doScrolling(link.navigateToID, CONFIG.scrollingTime);
		});
	});

	/**
	 *
	 * Slider
	 *
	 * */

	function printReviews(reviews) {
		const node = document.getElementById('review-slider');

		reviews.forEach(function (review, key) {
			const imagePath = './assets/images/' + review.avatar;

			node.innerHTML += `
				<div class="item">
					<p class="text">${review.text}</p>
					<img src="${imagePath}" class="avatar"/>
					<p class="name">${review.authorName}</p>
					<p class="date">${review.date}</p>
				</div>
				`;
		});
	}

	printProjects(CONFIG.projects);
	printEducationPoints(CONFIG.educationPoints);
	printReviews(CONFIG.reviews);

	$('.slider-1').slick({
		infinite: true,
		arrows: true,
		slidesToShow: CONFIG.sliderSettings.slidesToShow,
		autoplay: CONFIG.sliderSettings.autoPlay,
		autoplaySpeed: CONFIG.sliderSettings.autoPlaySpeed
	});

	/**
	 *
	 * CallBack from Request form sending
	 *
	 * */

	$('#enroll-form').submit(function (e) {
		let context = $(this);
		e.preventDefault;

		$.ajax({
			type: 'POST', url: 'mail.php', data: $(this).serialize()
		}).done(function () {
			alert('Спасибо за заявку!');
			setTimeout(function () {
				context.trigger('reset');
			}, 1000);
		});

		return false;
	});
})();