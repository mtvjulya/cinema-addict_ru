import FilmCard from "../view/film-card";
import Popup from "../view/popup";
import { remove, render,replace } from "../utils/render";
import { isEsc } from "../utils/render";
const Mode = {
  DEFAULT: 'DEFAULT',
  POPUP: 'POPUP',
};
export default class MoviePresenter{
  constructor(container, changeMovieData, changeMode){
    this._filmCard = null;
    this._popup = null;
    this._changeMode = changeMode;
    this._mode = Mode.DEFAULT;
    this._body = document.querySelector('body');
    this._movieListContainer = container;
    this._openPopup = this._openPopup.bind(this);
    this._removePopup = this._removePopup.bind(this);
    this._onEscPressDownClosePopup = this._onEscPressDownClosePopup.bind(this);
    this._changeMovieData = changeMovieData;
    this._changeFavoriteStatus = this._changeFavoriteStatus.bind(this);
    this._changeWatchedStatus = this._changeWatchedStatus.bind(this);
    this._addToWatchList = this._addToWatchList.bind(this);
  } ;

  init(movie){
    this._movie = movie;

    const prevMovieComponent = this._filmCard;
    const prevPopup = this._popup;
    this._filmCard = new FilmCard(movie);
    this._popup = new Popup(movie);

    this._popup.setClickPopup(this._removePopup);
    
    this._popup.setAddToWatchListHandler(this._addToWatchList);
    this._popup.setAddToFavoriteHandler(this._changeFavoriteStatus);
    this._popup.setMarkAsWatchHandler(this._changeWatchedStatus);
    
   
    this._filmCard.setClickListener(this._openPopup);
    this._filmCard.setAddToFavoriteHandler(this._changeFavoriteStatus);
    this._filmCard.setMarkAsWatchHandler(this._changeWatchedStatus);
    this._filmCard.setAddToWatchListHandler(this._addToWatchList);
   
    if(prevMovieComponent ===null|| prevPopup === null){
      render(this._movieListContainer, this._filmCard);
      return;
    }
 
    if(this._mode === Mode.DEFAULT){
      // console.log(prevMovieComponent);
      // console.log(this._filmCard);
      // console.log(movie);
     replace(this._filmCard, prevMovieComponent);
     remove(prevMovieComponent);
    }
    if(this._mode === Mode.POPUP){
      replace(this._popup, prevPopup);
      replace(this._filmCard, prevMovieComponent);

     }
    
    //remove(prevPopup);
  };
  resetView(){
    
    if(this._mode !==Mode.DEFAULT){
   
      this._popup.getElement().remove();
    }
  };

  _changeFavoriteStatus() {
    this._changeMovieData(
      Object.assign({}, this._movie, { isFavorite: !this._movie.isFavorite }),
    );
   this._checkingStatus();
  }
  _changeWatchedStatus() {
    this._changeMovieData(
      Object.assign({}, this._movie, { already_watched : !this._movie.already_watched }),
    );
 this._checkingStatus();
  }
  _addToWatchList() {
    this._changeMovieData(
      Object.assign({}, this._movie, { watchlist: !this._movie.watchlist }),
    );
    this._checkingStatus();
    
  }
  _removePopup(evt){
    //evt.preventDefault();
   //remove(this._popup);
  this._popup.getElement().remove();
   //document.querySelector('body').removeChild(this._popup.getElement());
    document.querySelector('body').classList.remove('hide-overflow');
    document.removeEventListener('keydown', this._onEscPressDownClosePopup);
    this._mode = Mode.DEFAULT;
  };

  _onEscPressDownClosePopup(evt){
    if(evt.key === 'Escape' || evt.key === 'Esc'){
      evt.preventDefault();
      this._removePopup();
    }
  };

  destroy(){
    remove(this._filmCard);
    remove(this._popup);
  }
  _openPopup(){
     this._body.appendChild(this._popup.getElement());
    this._body.classList.add('hide-overflow');
    document.addEventListener('keydown', this._onEscPressDownClosePopup);
    this._changeMode();
    this._mode = Mode.POPUP;
  };

_checkingStatus(){
  
  if(this._movie.watchlist){
    console.log(this._movie);
    console.log(this._movie.watchlist);
    this._filmCard.getElement().querySelector('.film-card__controls-item--add-to-watchlist').classList.add('film-card__controls-item--active');
    this._popup.getElement().querySelector('.film-details__control-button--watchlist').classList.add('film-details__control-button--active');
  }else{
    this._filmCard.getElement().querySelector('.film-card__controls-item--add-to-watchlist').classList.remove('film-card__controls-item--active');
    this._popup.getElement().querySelector('.film-details__control-button--watchlist').classList.remove('film-details__control-button--active');
  }
  if(this._movie.already_watched){
    this._filmCard.getElement().querySelector('.film-card__controls-item--mark-as-watched').classList.add('film-card__controls-item--active');
    this._popup.getElement().querySelector('.film-details__control-button--watched').classList.add('film-details__control-button--active');
  }else{
    this._filmCard.getElement().querySelector('.film-card__controls-item--mark-as-watched').classList.remove('film-card__controls-item--active');
    this._popup.getElement().querySelector('.film-details__control-button--watched').classList.remove('film-details__control-button--active');
  }
  if(this._movie.isFavorite){
    this._filmCard.getElement().querySelector('.film-card__controls-item--favorite').classList.add('film-card__controls-item--active');
    this._popup.getElement().querySelector('.film-details__control-button--favorite').classList.add('film-details__control-button--active');
  }else{
    this._filmCard.getElement().querySelector('.film-card__controls-item--favorite').classList.remove('film-card__controls-item--active');
    this._popup.getElement().querySelector('.film-details__control-button--favorite').classList.remove('film-details__control-button--active');
  }
}
}