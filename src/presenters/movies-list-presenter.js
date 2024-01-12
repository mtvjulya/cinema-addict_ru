import SortView from "../view/sort";
import FilmSection from "../view/film-section";
import FilmListContainer from "../view/films-list-container";
import FilmListView from "../view/films-list";
import { render, remove } from "../utils/render";
import EmptyList from "../view/empty-list";
import { findMostFilms } from "../utils/most-films-list";
import ButtonShowMore from "../view/button-show-more.js";
import MoviePresenter from "./movie-presenter";
import TopRatedFilmsList from "../view/films-list-top-rated";
import MostCommentedFilmsList from "../view/films-list-most-commented";
import { updateItem, sortDate, sortRating} from "../utils/common";
import { SortType } from "../utils/const";
const FILMS_STEP = 5;
const MOST_MOVIES = 2;
export default class MovieListPresenter {
  constructor(mainContainer){
    this._moviePresenter = {};
    this._sortType = SortType.DEFAULT;
    this._renderedFilms = FILMS_STEP;
    this._mainContainer = mainContainer;
    this._sortComponent = new SortView();
    this._filmsSectionComponent = new FilmSection(); 
    this._emptyListComponent = new EmptyList();
    this._filmsListComponent = new FilmListView();
    this._filmsListContainerComponent = new FilmListContainer();
    this._showMoreButtonComponent = null;
    this._topRatedFilmsList = new TopRatedFilmsList();
    this._topRatedFilmsListContainer = new FilmListContainer();
    this._mostCommentedFilmsList = new MostCommentedFilmsList();
    this._mostommentedFilmsListContainer = new FilmListContainer();
    this._renderMoreFilmsCards = this._renderMoreFilmsCards.bind(this);
    this._updateFilmCardData = this._updateFilmCardData.bind(this);
    this._changeMode = this._changeMode.bind(this);
    this._sortTypeHandler = this._sortTypeHandler.bind(this);
   
  }
  init(movies){
    this._movies = movies.slice();
    this._updatedMovies = movies.slice();
    this._renderSortComponent();
    this._renderFilmsSection();
    this._renderFilmsCards();
   this._renderMostMovies();
  }

  _changeMode(){
    Object.values(this._moviePresenter).forEach((presenter)=>presenter.resetView());
  }

  _sortTypeHandler(sortType){
    if(this._sortType === sortType){
      return;
    }
    this._sortMovies(sortType);
    this._clearMovieList();
    this._renderFilmsCards();
  }
  _sortMovies(sortType){
    switch(sortType){
      case SortType.DEFAULT:
        this._movies = this._updatedMovies.slice();
        break;
      case SortType.BY_DATE:
        this._movies.sort(sortDate);
        break;
      case SortType.BY_RATING:
        this._movies.sort(sortRating);
        break;
      default:
        "there is no other type"
    }
    this._sortType = sortType;
  }

  _renderSortComponent(){
    render(this._mainContainer, this._sortComponent);
    this._sortComponent.setHandleSortType(this._sortTypeHandler);
  };

  _updateFilmCardData(updatedMovie){
   // console.log(this._movies.find((prevMovie)=>prevMovie.id===updatedMovie.id))
    this._movies = updateItem(this._movies, updatedMovie);
    this._updatedMovies = updateItem(this._updatedMovies, updatedMovie);
//console.log(updatedMovie);
    this._moviePresenter[updatedMovie.id].init(updatedMovie);
  }

  _renderFilmCard(movie){
    const moviePresenter = new MoviePresenter(this._filmsListContainerComponent, this._updateFilmCardData,this._changeMode);
    moviePresenter.init(movie);
    this._moviePresenter[movie.id] = moviePresenter;
  }

  _renderFilmsCards(){
    for (let i = 0; i < FILMS_STEP; i++) {
      this._renderFilmCard(this._movies[i]);
    };
    if (this._movies.length > FILMS_STEP) {
      this._showMoreButtonComponent = new ButtonShowMore();
      //console.log(this._showMoreButtonComponent);
      render(this._filmsListContainerComponent, this._showMoreButtonComponent);
      this._showMoreButtonComponent.setClickListener(this._renderMoreFilmsCards);
     
    }
   
  }

  _renderMoreFilmsCards(){
    this._movies.slice(this._renderedFilms, this._renderedFilms + FILMS_STEP).forEach((film) => {
      this._renderFilmCard(film);
    });

    this._renderedFilms += FILMS_STEP;
    if (this._renderedFilms >= this._movies.length ) {
    remove(this._showMoreButtonComponent);    
    }
  }

  _renderFilmsSection(){
    render(this._mainContainer, this._filmsSectionComponent);
    if(this._movies.length===0){
      render(this._filmsSectionComponent, this._emptyListComponent);
    }else{
      render(this._filmsSectionComponent, this._filmsListComponent);
      render(this._filmsSectionComponent, this._filmsListContainerComponent);
 
    }
  };

  _renderMostMovies(){
    render(this._filmsSectionComponent, this._topRatedFilmsList);
    render(this._topRatedFilmsList, this._topRatedFilmsListContainer);
    render(this._filmsSectionComponent, this._mostCommentedFilmsList);
    render(this._mostCommentedFilmsList, this._mostommentedFilmsListContainer);

    for(let i = 0; i < MOST_MOVIES; i++){
      const topRatedMovie = new MoviePresenter(this._topRatedFilmsListContainer);
      topRatedMovie.init(findMostFilms(this._movies, 'TopRatedFilmsList')[i]);
      const mostCommentedMovie = new MoviePresenter(this._mostommentedFilmsListContainer);
      mostCommentedMovie.init(findMostFilms(this._movies, 'MostCommentedFilmsList')[i]);
    }
  }
  _clearMovieList() {
    Object
      .values(this._moviePresenter)
      .forEach((presenter) => presenter.destroy());
      this._moviePresenter = {};
    this._renderedFilms = FILMS_STEP;
    remove(this._showMoreButtonComponent);
  }
}