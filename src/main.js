const API_KEY = 'e9274037413b6dee8ef09c956605fee3';

async function getTrendingPreviewSlider() {
	const res = await fetch(
		`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
	);
	const data = await res.json();

	const movies = data.results;
	movies.forEach((movie) => {
		const trendingPreviewMovieContainer =
			document.querySelector('#slider-container');

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
			`https://image.tmdb.org/t/p/original${movie.poster_path}`
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
	const res = await fetch(
		`https://api.themoviedb.org/3/trending/week/day?api_key=${API_KEY}`
	);
	const data = await res.json();

	const movies = data.results;
	console.log(movies);
	movies.forEach((movie) => {

		const trendingPreviewContainer = document.querySelector(
			'#trendingPreview .trendingPreview-List'
		);

		const previewContainer = document.createElement('div');
		const previewContainerInfo = document.createElement('div');
		const previewImg = document.createElement('img');
		const previewContainerInfoTitle = document.createElement('h5');
		const previewContainerInfoDescription = document.createElement('p');

		previewContainer.classList.add('trend-grid-container');
		previewContainerInfo.classList.add('trend-info');
		previewImg.classList.add('trend-img');
		previewImg.setAttribute('alt', movie.title);
		previewImg.setAttribute(
			'src',
			`https://image.tmdb.org/t/p/w500${movie.poster_path}`
		);

		previewContainerInfoTitle.textContent = movie.title || movie.original_name;
		previewContainerInfoDescription.textContent = movie.vote_average;

		previewContainerInfo.appendChild(previewContainerInfoTitle);
		previewContainerInfo.appendChild(previewContainerInfoDescription);
		previewContainer.appendChild(previewImg);
		previewContainer.appendChild(previewContainerInfo);
		trendingPreviewContainer.appendChild(previewContainer);

		/*movieContainer.classList.add('movie-container');
		const movieImg = document.createElement('img');
		movieImg.classList.add('movie-img');
		movieImg.setAttribute('alt', movie.title);
		movieImg.setAttribute(
			'src',
			`https://image.tmdb.org/t/p/w300${movie.poster_path}`
		);
		movieContainer.appendChild(movieImg);
		trendingPreviewMovieContainer.appendChild(movieContainer);*/
	});
}
getTrendingPreview();
