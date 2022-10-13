searchFormBtn.addEventListener('click', () => {
  location.hash = `#search=${searchFormInput.value.trim()}`;
});
arrowBtn.addEventListener('click', () => {
  const stateLoad = window.history.state ? window.history.state.loadUrl : '';
  if (stateLoad.includes('#')) {
    window.location.hash = '';
  } else {
    window.history.back();
  }
});
arrowBtnCategories.addEventListener('click', () => {
  const stateLoad = window.history.state ? window.history.state.loadUrl : '';
  if (stateLoad.includes('#')) {
    window.location.hash = '';
  } else {
    window.history.back();
  }
});

window.addEventListener(
  'DOMContentLoaded',
  () => {
    navigator();
    window.history.pushState({ loadUrl: window.location.href }, null, '');
  },
  false
);

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
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
  //console.log('Home!!');

  mainTitle.classList.remove('inactive');
  mainParagraph.classList.remove('inactive');
  categoryMainTitle.classList.add('inactive');
  arrowBtn.classList.add('inactive');
  arrowBtnCategories.classList.add('inactive');
  mainSlider.classList.remove('inactive');
  mainSlideNav.classList.remove('inactive');
  trendContainer.classList.remove('inactive');
  categoryViewSection.classList.add('inactive');
  categoryViewSectionSeries.classList.add('inactive');
  overviewContainer.classList.add('inactive');
  overviewSimilar.classList.add('inactive');

  getLikedMovieTv();
  getTrendingPreviewMovies();
  getTrendingPreviewSeries();
  getTrendingPreview();
}

function categoriesPage() {
  //console.log('categories!!');

  mainTitle.classList.add('inactive');
  mainParagraph.classList.add('inactive');
  categoryMainTitle.classList.remove('inactive');
  arrowBtn.classList.add('inactive');
  arrowBtnCategories.classList.remove('inactive');
  mainSlider.classList.add('inactive');
  mainSlideNav.classList.add('inactive');
  trendContainer.classList.add('inactive');
  categoryViewSection.classList.remove('inactive');
  categoryViewSectionSeries.classList.remove('inactive');
  overviewContainer.classList.add('inactive');
  overviewSimilar.classList.add('inactive');

  const [_, categoryData] = location.hash.split('=');
  const [categoryId, categoryName] = categoryData.split('-');
  const newName = decodeURI(categoryName);

  categoryMainTitle.innerHTML = newName;

  getByCategoryMovies(categoryId);
  getByCategorySeries(categoryId);
}

function movieDetailsPage() {
  //console.log('Movie!!');

  mainTitle.classList.add('inactive');
  mainParagraph.classList.add('inactive');
  categoryMainTitle.classList.add('inactive');
  arrowBtn.classList.remove('inactive');
  arrowBtnCategories.classList.add('inactive');
  mainSlider.classList.add('inactive');
  mainSlideNav.classList.add('inactive');
  trendContainer.classList.add('inactive');
  categoryViewSection.classList.add('inactive');
  categoryViewSectionSeries.classList.add('inactive');
  overviewContainer.classList.remove('inactive');
  overviewSimilar.classList.remove('inactive');

  const [_, Id] = location.hash.split('=');
  getDetailsMovies(Id);
  getDetailsSeries(Id);
}

function searchPage() {
  //console.log('Search!!');

  mainTitle.classList.add('inactive');
  mainParagraph.classList.add('inactive');
  categoryMainTitle.classList.remove('inactive');
  arrowBtn.classList.add('inactive');
  arrowBtnCategories.classList.remove('inactive');
  mainSlider.classList.add('inactive');
  mainSlideNav.classList.add('inactive');
  trendContainer.classList.add('inactive');
  categoryViewSection.classList.add('inactive');
  categoryViewSectionSeries.classList.remove('inactive');
  overviewContainer.classList.add('inactive');
  overviewSimilar.classList.add('inactive');

  const [_, query] = location.hash.split('=');
  const newName = decodeURI(query);
  categoryMainTitle.innerHTML = newName;

  getMoviesBySearch(query);
}
