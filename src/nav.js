/*searchFormBtn.addEventListener('click', () => {
	location.hash = `#search=${searchFormInput.value.trim()}`;
});
trendingBtn.addEventListener('click', () => {
	location.hash = '#trends';
});
arrowBtn.addEventListener('click', () => {
	const stateLoad = window.history.state ? window.history.state.loadUrl : '';
	if (stateLoad.includes('#')) {
		window.location.hash = '';
	} else {
		window.history.back();
	}
});*/

/*window.addEventListener(
	'DOMContentLoaded',
	() => {
		navigator();
		window.history.pushState({ loadUrl: window.location.href }, null, '');
	},
	false
);*/

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
	console.log({ location });

	if (location.hash.startsWith('#trends')) {
		trendsPage();
	} else if (location.hash.startsWith('#search=')) {
		searchPage();
	} else if (location.hash.startsWith('#movie=')) {
		movieDetailsPage();
	} else if (location.hash.startsWith('#category=')) {
		categoriesPage();
	} else {
		homePage();
	}
	location.hash;

	document.documentElement.scrollTop = 0;
	document.body.scrollTop = 0;
}

function homePage() {
	console.log('Home!!');

	mainTitle.classList.remove('inactive');
	mainParagraph.classList.remove('inactive');
	categoryMainTitle.classList.add('inactive');
	arrowBtn.classList.add('inactive');
	mainSlider.classList.remove('inactive');
	mainSlideNav.classList.remove('inactive');
	trendContainer.classList.remove('inactive');
	categoryViewSection.classList.add('inactive');
	overviewContainer.classList.add('inactive');
}

function categoriesPage() {
	console.log('categories!!');

	mainTitle.classList.add('inactive');
	mainParagraph.classList.add('inactive');
	categoryMainTitle.classList.remove('inactive');
	arrowBtn.classList.remove('inactive');
	mainSlider.classList.add('inactive');
	mainSlideNav.classList.add('inactive');
	trendContainer.classList.add('inactive');
	categoryViewSection.classList.remove('inactive');
	overviewContainer.classList.add('inactive');

	getMoviesByCategory(categoryId);
}

function movieDetailsPage() {
	console.log('Movie!!');

	mainTitle.classList.add('inactive');
	mainParagraph.classList.add('inactive');
	categoryMainTitle.classList.add('inactive');
	arrowBtn.classList.add('inactive');
	mainSlider.classList.add('inactive');
	mainSlideNav.classList.add('inactive');
	trendContainer.classList.add('inactive');
	categoryViewSection.classList.add('inactive');
	overviewContainer.classList.remove('inactive');
}

function searchPage() {
	console.log('Search!!');

	mainTitle.classList.add('inactive');
	mainParagraph.classList.add('inactive');
	categoryMainTitle.classList.remove('inactive');
	arrowBtn.classList.remove('inactive');
	mainSlider.classList.add('inactive');
	mainSlideNav.classList.add('inactive');
	trendContainer.classList.add('inactive');
	categoryViewSection.classList.remove('inactive');
	overviewContainer.classList.add('inactive');
}

function trendsPage() {
	console.log('TRENDS!!');

	getTrendingMovies();
}
