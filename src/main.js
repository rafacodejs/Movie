const API_KEY = 'e9274037413b6dee8ef09c956605fee3';

const API = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
	},
	params: {
		api_key: API_KEY,
	},
});

async function getTrendingPreviewSlider() {
	const { data } = await API(`trending/all/day`);
	const movies = data.results;

	const trendingPreviewMovieContainer =
		document.querySelector('#slider-container');
	trendingPreviewMovieContainer.innerHTML = '';

	movies.forEach((movie) => {
		const container = document.createElement('div');
		const titleContainer = document.createElement('div');
		const title = document.createElement('h2');
		const description = document.createElement('p');
		const movieImg = document.createElement('img');

		container.classList.add('slide');
		container.classList.add('fade');
		titleContainer.classList.add('slider-info');
		movieImg.classList.add('slide-img');
		movieImg.setAttribute('alt', movie.title);
		movieImg.setAttribute(
			'src',
			`https://image.tmdb.org/t/p/original${movie.backdrop_path}`
		);

		title.textContent = movie.title || movie.original_name;
		description.textContent = movie.overview;

		titleContainer.appendChild(title);
		titleContainer.appendChild(description);
		container.appendChild(titleContainer);
		container.appendChild(movieImg);
		trendingPreviewMovieContainer.appendChild(container);
	});
}
getTrendingPreviewSlider();

async function getTrendingPreview() {
	const { data } = await API(`trending/all/week`);
	//const data = await res.json();

	const movies = data.results;
	movies.forEach((movie) => {
		const trendingPreviewContainer = document.querySelector(
			'#trendingPreview .trendingPreview-List'
		);

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

		previewContainerListImg.setAttribute('alt', movie.title);
		previewContainerListImg.setAttribute(
			'src',
			`https://image.tmdb.org/t/p/w500${movie.poster_path}`
		);

		previewContainerLink.href = movie.id;
		previewContainerInfoTitle.textContent = movie.title || movie.original_name;

		// FIND YEAR
		const releaseDate = movie.release_date || movie.first_air_date;
		const releaseDateYear = releaseDate.split('-');
		previewContainerInfoYear.textContent = releaseDateYear[0];

		// previewContainerInfoGenre.textContent = movie.genre_ids;
		previewContainerVoted.textContent = movie.vote_average;
		previewContainerButton.textContent = 'Watch Now';

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

		trendingPreviewContainer.appendChild(previewContainerList);
	});
}
getTrendingPreview();

async function getTrendingPreviewMovies() {
	const { data } = await API(`trending/movie/day`);
	//const data = await res.json();

	const movies = data.results;
	movies.forEach((movie) => {
		const trendingPreviewMovieContainer = document.querySelector(
			'#carrusel .movie-container'
		);

		const movieImg = document.createElement('img');
		movieImg.classList.add('movie-img');

		movieImg.setAttribute('alt', movie.title);
		movieImg.setAttribute(
			'src',
			`https://image.tmdb.org/t/p/w300${movie.poster_path}`
		);
		trendingPreviewMovieContainer.appendChild(movieImg);
	});
}
getTrendingPreviewMovies();

async function getTrendingPreviewSeries() {
	const { data } = await API(`trending/tv/day`);
	//const data = await res.json();

	const series = data.results;

	series.forEach((serie) => {
		const trendingPreviewSerieContainer = document.querySelector(
			'#carrusel .serie-container'
		);

		const serieImg = document.createElement('img');
		serieImg.classList.add('serie-img');

		serieImg.setAttribute('alt', serie.title);
		serieImg.setAttribute(
			'src',
			`https://image.tmdb.org/t/p/w300${serie.poster_path}`
		);
		trendingPreviewSerieContainer.appendChild(serieImg);
	});
}
getTrendingPreviewSeries();

async function getCategoriesMoviesPreview() {
	const { data } = await API(`genre/movie/list`);
	//const data = await res.json();

	const categories = data.genres;
	categories.forEach((category) => {
		const categoriesContainer = document.querySelector(
			'.categories-list .categories'
		);

		const categoryContainer = document.createElement('div');
		const categoryTitle = document.createElement('h3');

		categoryContainer.classList.add('category-container');
		categoryTitle.classList.add('category-title');
		categoryTitle.setAttribute('id', `id${category.id}`);
		categoryTitle.addEventListener('click', () => {
			location.hash = `#category=${category.id}-${category.name}`;
		});
		categoryTitle.setAttribute('id', category.name);
		const categoryTitleText = document.createTextNode(category.name);

		categoryTitle.appendChild(categoryTitleText);
		categoryContainer.appendChild(categoryTitle);
		categoriesContainer.appendChild(categoryContainer);
	});
}
getCategoriesMoviesPreview();

async function getCategoriesSeriesPreview() {
	const { data } = await API(`genre/tv/list`);
	//const data = await res.json();

	const categories = data.genres;
	categories.forEach((category) => {
		const categoriesContainer = document.querySelector(
			'.categories-list .categories'
		);

		const categoryContainer = document.createElement('div');
		const categoryTitle = document.createElement('h3');

		categoryContainer.classList.add('category-container');
		categoryTitle.classList.add('category-title');
		categoryTitle.setAttribute('id', `id${category.id}`);
		categoryTitle.addEventListener('click', () => {
			location.hash = `#category=${category.id}-${category.name}`;
		});
		categoryTitle.setAttribute('id', category.name);
		const categoryTitleText = document.createTextNode(category.name);

		categoryTitle.appendChild(categoryTitleText);
		categoryContainer.appendChild(categoryTitle);
		categoriesContainer.appendChild(categoryContainer);
	});
}
getCategoriesSeriesPreview();

async function getByCategoryMovies(categoryId) {
	const { data } = await API(`discover/movie`, {
		params: {
			with_genres: categoryId,
		},
	});
	const categoriesMovies = data.results;

	const categoryMovieContainer = document.querySelector(
		'.category-view-container'
	);
	categoryMovieContainer.innerHTML = '';
	categoriesMovies.forEach((category) => {
		const categoryItemContainer = document.createElement('div');
		const categoryItemImg = document.createElement('img');
		const categoryItemInfo = document.createElement('div');
		const categoryItemInfoName = document.createElement('h3');
		const categoryItemInfoYear = document.createElement('h3');

		categoryItemContainer.classList.add('category-view-item');
		categoryItemInfo.classList.add('category-view-item-info');
		categoryItemInfoName.classList.add('category-view-name');
		categoryItemInfoYear.classList.add('category-view-year');

		categoryItemImg.setAttribute('alt', category.title);
		categoryItemImg.setAttribute(
			'src',
			`https://image.tmdb.org/t/p/w300${category.poster_path}`
		);

		categoryItemInfoName.textContent = category.title || category.original_name;

		const releaseDate = category.release_date || category.first_air_date;
		const releaseDateYear = releaseDate.split('-');
		categoryItemInfoYear.textContent = releaseDateYear[0];

		categoryItemInfo.appendChild(categoryItemInfoName);
		categoryItemInfo.appendChild(categoryItemInfoYear);
		categoryItemContainer.appendChild(categoryItemImg);
		categoryItemContainer.appendChild(categoryItemInfo);
		categoryMovieContainer.appendChild(categoryItemContainer);
	});
}
async function getByCategorySeries(categoryId) {
	const { data } = await API(`discover/tv`, {
		params: {
			with_genres: categoryId,
		},
	});
	const categoriesSeries = data.results;

	const categorySerieContainer = document.querySelector('.category-view-serie');
	categorySerieContainer.innerHTML = '';

	categoriesSeries.forEach((category) => {
		const categoryItemContainer = document.createElement('div');
		const categoryItemImg = document.createElement('img');
		const categoryItemInfo = document.createElement('div');
		const categoryItemInfoName = document.createElement('h3');
		const categoryItemInfoYear = document.createElement('h3');

		categoryItemContainer.classList.add('category-view-item');
		categoryItemInfo.classList.add('category-view-item-info');
		categoryItemInfoName.classList.add('category-view-name');
		categoryItemInfoYear.classList.add('category-view-year');

		categoryItemImg.setAttribute('alt', category.title);
		categoryItemImg.setAttribute(
			'src',
			`https://image.tmdb.org/t/p/w300${category.poster_path}`
		);

		categoryItemInfoName.textContent = category.title || category.original_name;

		const releaseDate = category.release_date || category.first_air_date;
		const releaseDateYear = releaseDate.split('-');
		categoryItemInfoYear.textContent = releaseDateYear[0];

		categoryItemInfo.appendChild(categoryItemInfoName);
		categoryItemInfo.appendChild(categoryItemInfoYear);
		categoryItemContainer.appendChild(categoryItemImg);
		categoryItemContainer.appendChild(categoryItemInfo);
		categorySerieContainer.appendChild(categoryItemContainer);
	});
}
async function getMoviesBySearch(query) {
	const { data } = await API(`search/multi`, {
		params: {
			query,
		},
	});
	const categoriesSeries = data.results;
	console.log(categoriesSeries);

	const categorySerieContainer = document.querySelector('.category-view-serie');
	categorySerieContainer.innerHTML = '';

	categoriesSeries.forEach((category) => {
		/*const categoryItemContainer = document.createElement('div');
		const categoryItemImg = document.createElement('img');
		const categoryItemInfo = document.createElement('div');
		const categoryItemInfoName = document.createElement('h3');
		const categoryItemInfoYear = document.createElement('h3');

		categoryItemContainer.classList.add('category-view-item');
		categoryItemInfo.classList.add('category-view-item-info');
		categoryItemInfoName.classList.add('category-view-name');
		categoryItemInfoYear.classList.add('category-view-year');

		categoryItemImg.setAttribute('alt', category.title);
		categoryItemImg.setAttribute(
			'src',
			`https://image.tmdb.org/t/p/w300${category.poster_path}`
		);

		categoryItemInfoName.textContent = category.title || category.original_name;

		const releaseDate = category.release_date || category.first_air_date;
		const releaseDateYear = releaseDate.split('-');
		categoryItemInfoYear.textContent = releaseDateYear[0];

		categoryItemInfo.appendChild(categoryItemInfoName);
		categoryItemInfo.appendChild(categoryItemInfoYear);
		categoryItemContainer.appendChild(categoryItemImg);
		categoryItemContainer.appendChild(categoryItemInfo);
		categorySerieContainer.appendChild(categoryItemContainer);*/
	});
}
