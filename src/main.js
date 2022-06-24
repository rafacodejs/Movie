const API_KEY = 'e9274037413b6dee8ef09c956605fee3';

async function getTrendingPreviewSlider() {
	const res = await fetch(
		`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
	);
	const data = await res.json();

	const movies = data.results;
	console.log(movies);
	movies.forEach((movie) => {
		const trendingPreviewContainer = document.querySelector('#main-slider');

		const containerTrends = document.createElement('div');
		const trendImg = document.createElement('img');
		const trendInfo = document.createElement('div');
		const trendTitle = document.createElement('h2');
		const trendDescription = document.createElement('p');

		containerTrends.classList.add('slide');

		trendInfo.classList.add('info');
		trendImg.setAttribute('alt', movie.title);
		trendImg.setAttribute(
			'src',
			`https://image.tmdb.org/t/p/original${movie.poster_path}`
		);

		trendTitle.textContent = movie.title || movie.original_name;
		trendDescription.textContent = movie.overview;

		trendInfo.appendChild(trendTitle);
		trendInfo.appendChild(trendDescription);
		containerTrends.appendChild(trendImg);
		containerTrends.appendChild(trendInfo);
		trendingPreviewContainer.appendChild(containerTrends);

		/*container.classList.add('miSlider');
		titleContainer.classList.add('slider-text');
		movieImg.classList.add('miSlider-img');
		movieImg.setAttribute('alt', movie.title);
		movieImg.setAttribute(
			'src',
			`https://image.tmdb.org/t/p/original${movie.poster_path}`
		);

		title.textContent = movie.title || movie.original_name;
		description.textContent = movie.overview;
		link.textContent = 'Watch';
		link.setAttribute('src', movie.id);

		titleContainer.appendChild(title);
		titleContainer.appendChild(description);
		btn.appendChild(link);
		titleContainer.appendChild(btn);
		container.appendChild(titleContainer);
		container.appendChild(movieImg);
		trendingPreviewMovieContainer.appendChild(container);*/
	});
}
getTrendingPreviewSlider();
