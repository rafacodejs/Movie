// OBSERVER

const lazyLoader = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		//console.log(entry);

		if (entry.isIntersecting) {
			const url = entry.target.getAttribute('data-img');
			entry.target.setAttribute('src', url);
		}
	});
});

// CREATE FUNCTION
function createTrendingPreview(movie_serie, container) {
	container.innerHTML = '';

	movie_serie.forEach((item) => {
		const previewContainerList = document.createElement('div');
		const previewContainerListImg = document.createElement('img');
		const previewContainerInfo = document.createElement('div');
		const previewContainerInfoTitle = document.createElement('h4');
		const previewContainerInfoDetails = document.createElement('div');
		const previewContainerInfoYear = document.createElement('p');
		// const previewContainerInfoGenre = document.createElement('p');
		const previewContainerRated = document.createElement('div');
		const previewContainerStar = document.createElement('i');
		const previewContainerVoted = document.createElement('p');
		const previewContainerButton = document.createElement('button');
		const previewContainerLink = document.createElement('a');

		previewContainerList.classList.add('trend-grid-container');
		previewContainerListImg.classList.add('trend-img');
		previewContainerInfo.classList.add('trend-info');
		previewContainerInfoDetails.classList.add('details');
		previewContainerInfoYear.classList.add('year');
		// previewContainerInfoGenre.classList.add('genres');
		previewContainerRated.classList.add('rated');
		previewContainerStar.classList.add('bx', 'bxs-star');
		previewContainerVoted.classList.add('voted');
		previewContainerButton.classList.add('button');

		previewContainerListImg.setAttribute('alt', item.title);
		previewContainerListImg.setAttribute(
			'data-img',
			`https://image.tmdb.org/t/p/w500${item.poster_path}`
		);

		previewContainerLink.href = movie.id;
		previewContainerInfoTitle.textContent = item.title || item.original_name;

		lazyLoader.observe(previewContainerListImg);

		// FIND YEAR
		const releaseDate = item.release_date || item.first_air_date;
		const releaseDateYear = releaseDate.split('-');
		previewContainerInfoYear.textContent = releaseDateYear[0];

		// previewContainerInfoGenre.textContent = movie.genre_ids;
		previewContainerVoted.textContent = item.vote_average;
		previewContainerButton.textContent = 'Watch Now';
		previewContainerButton.addEventListener('click', () => {
			location.hash = `#movie=${item.id}`;
		});

		// DETAILS

		previewContainerRated.appendChild(previewContainerStar);
		previewContainerRated.appendChild(previewContainerVoted);
		previewContainerInfoDetails.appendChild(previewContainerInfoYear);
		// previewContainerInfoDetails.appendChild(previewContainerInfoGenre);

		//INFO
		previewContainerInfo.appendChild(previewContainerInfoTitle);
		previewContainerInfo.appendChild(previewContainerInfoDetails);
		previewContainerInfo.appendChild(previewContainerRated);

		// BOTÓN
		previewContainerButton.appendChild(previewContainerLink);
		previewContainerInfo.appendChild(previewContainerButton);

		// GRID
		previewContainerList.appendChild(previewContainerListImg);
		previewContainerList.appendChild(previewContainerInfo);

		container.appendChild(previewContainerList);
	});
}

function createMovieTV(movie_tv, container) {
	container.innerHTML = '';

	movie_tv.forEach((item) => {
		const imgMovieTv = document.createElement('img');
		imgMovieTv.classList.add('movie-img', 'serie-img');

		imgMovieTv.setAttribute('alt', item.title);
		imgMovieTv.setAttribute(
			'data-img',
			`https://image.tmdb.org/t/p/w300${item.poster_path}`
		);

		lazyLoader.observe(imgMovieTv);

		imgMovieTv.addEventListener('click', () => {
			location.hash = `#movie=${item.id}`;
		});
		container.appendChild(imgMovieTv);
	});
}

function createByCategories(category, container) {
	container.innerHTML = '';

	category.forEach((category) => {
		const categoryItemContainer = document.createElement('div');
		const categoryItemImg = document.createElement('img');
		const categoryItemInfo = document.createElement('div');
		const categoryItemFade = document.createElement('div');
		const categoryItemInfoName = document.createElement('h3');
		const categoryItemInfoYear = document.createElement('h3');

		categoryItemContainer.classList.add('category-view-item');
		categoryItemFade.classList.add('fade-card');
		categoryItemInfo.classList.add('category-view-item-info');
		categoryItemInfoName.classList.add('category-view-name');
		categoryItemInfoYear.classList.add('category-view-year');

		categoryItemImg.setAttribute('alt', category.title);
		categoryItemImg.setAttribute(
			'data-img',
			`https://image.tmdb.org/t/p/w300${category.poster_path}`
		);

		categoryItemImg.addEventListener('error', () => {
			categoryItemImg.setAttribute('src', 'img/imageNotFound.jpg');
		});


		lazyLoader.observe(categoryItemImg);

		categoryItemContainer.addEventListener('click', () => {
			location.hash = `#movie=${category.id}`;
		});

		categoryItemInfoName.textContent = category.title || category.original_name;

		const releaseDate = category.release_date || category.first_air_date;
		const releaseDateYear = releaseDate.split('-');
		categoryItemInfoYear.textContent = releaseDateYear[0];

		categoryItemInfo.appendChild(categoryItemInfoName);
		categoryItemInfo.appendChild(categoryItemInfoYear);
		categoryItemContainer.appendChild(categoryItemImg);
		categoryItemContainer.appendChild(categoryItemInfo);
		categoryItemContainer.appendChild(categoryItemFade);
		container.appendChild(categoryItemContainer);
	});
}

function createDetailsMoviesTv(item, container) {
	container.innerHTML = '';

	// BUTTON

	const arrowBtn = document.createElement('button');
	const btnIcon = document.createElement('i');

	arrowBtn.classList.add('arrow-back');
	btnIcon.classList.add('bx', 'bx-chevron-left');

	arrowBtn.addEventListener('click', () => {
		const stateLoad = window.history.state ? window.history.state.loadUrl : '';
		if (stateLoad.includes('#')) {
			window.location.hash = '';
		} else {
			window.history.back();
		}
	});

	// Header
	const overviewHeader = document.createElement('div');
	const overviewFade = document.createElement('div');
	const overviewHeaderImg = document.createElement('img');

	overviewHeader.classList.add('overview-header');
	overviewFade.classList.add('fade-bg');
	overviewHeaderImg.classList.add('bg-poster');
	overviewHeaderImg.setAttribute('alt', item.title);
	overviewHeaderImg.setAttribute(
		'data-img',
		`https://image.tmdb.org/t/p/original${item.backdrop_path}`
	);

	lazyLoader.observe(overviewHeaderImg);

	//ELEMENTS

	const itemContainer = document.createElement('section');
	const itemContainerPoster = document.createElement('div');
	const itemContainerPosterImg = document.createElement('img');
	const itemContainerInfo = document.createElement('div');
	const itemContainerTitle = document.createElement('div');
	const itemContainerMainTitle = document.createElement('h1');
	const itemContainerYearGenres = document.createElement('div');
	const itemContainerYear = document.createElement('h3');
	const itemContainerGenre = document.createElement('h3');
	const itemContainerDescription = document.createElement('p');

	itemContainer.classList.add('overview-container-item');
	itemContainerPoster.classList.add('overview-poster');
	itemContainerPosterImg.classList.add('poster');
	itemContainerInfo.classList.add('overview-container-info');
	itemContainerTitle.classList.add('overview-title');
	itemContainerMainTitle.classList.add('overview-main-title');
	itemContainerYearGenres.classList.add('overview-year-genres');
	itemContainerYear.classList.add('item-year');
	itemContainerGenre.classList.add('item-genre');
	itemContainerDescription.classList.add('description');

	itemContainerMainTitle.textContent =
		item.title || item.original_title || item.name;
	itemContainerGenre.textContent = item.genres[1].name;
	itemContainerDescription.textContent = item.overview;
	itemContainerPosterImg.setAttribute('alt', item.title);
	itemContainerPosterImg.setAttribute(
		'data-img',
		`https://image.tmdb.org/t/p/w500${item.poster_path}`
	);

	lazyLoader.observe(itemContainerPosterImg);

	const releaseDate = item.release_date || item.first_air_date;
	const releaseDateYear = releaseDate.split('-');
	itemContainerYear.textContent = releaseDateYear[0];

	//BTN APPENCHILD

	arrowBtn.appendChild(btnIcon);
	overviewContainer.appendChild(arrowBtn);

	// HEADER APPENCHILD

	overviewHeader.appendChild(overviewFade);
	overviewHeader.appendChild(overviewHeaderImg);
	overviewContainer.appendChild(overviewHeader);

	// ELEMENTS APPENCHILD

	itemContainerYearGenres.appendChild(itemContainerYear);
	itemContainerYearGenres.appendChild(itemContainerGenre);
	itemContainerTitle.appendChild(itemContainerMainTitle);
	itemContainerTitle.appendChild(itemContainerYearGenres);
	itemContainerTitle.appendChild(itemContainerDescription);
	itemContainerInfo.appendChild(itemContainerTitle);
	itemContainerPoster.appendChild(itemContainerPosterImg);
	itemContainer.appendChild(itemContainerPoster);
	itemContainer.appendChild(itemContainerInfo);
	container.appendChild(itemContainer);
}
