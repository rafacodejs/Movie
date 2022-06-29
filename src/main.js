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

	const item = data.results;
	const trendingPreviewContainer = document.querySelector(
		'#trendingPreview .trendingPreview-List'
	);
	createTrendingPreview(item, trendingPreviewContainer);
}

async function getTrendingPreviewMovies() {
	const { data } = await API(`trending/movie/day`);
	const movie_tv = data.results;

	const trendingPreviewMovieContainer = document.querySelector(
		'#carrusel .movie-container'
	);

	createMovieTV(movie_tv, trendingPreviewMovieContainer);
}

async function getTrendingPreviewSeries() {
	const { data } = await API(`trending/tv/day`);

	const movie_tv = data.results;
	const trendingPreviewSerieContainer = document.querySelector(
		'#carrusel .serie-container'
	);

	createMovieTV(movie_tv, trendingPreviewSerieContainer);
}

async function getCategoriesMoviesPreview() {
	const { data } = await API(`genre/movie/list`);
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
	createByCategories(categoriesMovies, categoryMovieContainer);
}
async function getByCategorySeries(categoryId) {
	const { data } = await API(`discover/tv`, {
		params: {
			with_genres: categoryId,
		},
	});
	const categoriesSeries = data.results;
	const categorySerieContainer = document.querySelector('.category-view-serie');
	createByCategories(categoriesSeries, categorySerieContainer);
}
async function getMoviesBySearch(query) {
	const { data } = await API(`search/multi`, {
		params: {
			query,
		},
	});
	const categoriesBySearch = data.results;
	const categorySearchContainer = document.querySelector(
		'.category-view-serie'
	);
	createByCategories(categoriesBySearch, categorySearchContainer);
}

async function getDetailsMovies(id) {
	const { data: movie } = await API(`movie/${id}`);
	const movies = movie;

	const overviewContainer = document.querySelector('.overview-container');
	createDetailsMoviesTv(movies, overviewContainer);
	//getRelatedMoviesId(id);
}
async function getDetailsSeries(id) {
	const { data: serie } = await API(`tv/${id}`);
	const series = serie;

	const overviewContainer = document.querySelector('.overview-container');
	createDetailsMoviesTv(series, overviewContainer);
}
