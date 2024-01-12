import dayjs from "dayjs";
import AbstractView from "./abstract-view";

const createFilmCard = (movie)=>{
  const {title, total_rating, poster, description, comments,release, runtime, genres} = movie;
  const commentsNumber = comments.length;
  const releaseYear = dayjs(release.date).format('YYYY');
  const genre = genres[0];
  return `
    <article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${total_rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${releaseYear}</span>
        <span class="film-card__duration">${runtime}</span>
        <span class="film-card__genre">${genre}</span>
      </p>
      <img src="${poster}" alt="${title}" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <a class="film-card__comments">${commentsNumber} comments</a>
      <div class="film-card__controls">
        <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Добавить в список просмотренных</button>
        <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Пометить как просмотренный</button>
        <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Пометить как любимый</button>
      </div>
    </article>
  `;
};

export default class FilmCard extends AbstractView{
  constructor(film){
    super();
    this._film = film;
    
    this._openPopup = this._openPopup.bind(this);
    this._addToWatchList = this._addToWatchList.bind(this);
    this._markAsWatch = this._markAsWatch.bind(this);
    this._addToFavorite = this._addToFavorite.bind(this);
    //this._checkingStatus();
  };
  getTemplate(){
    return createFilmCard(this._film);
  };
  _openPopup(){
    this._callback.openPopup();
  };
  _addToWatchList(){
    console.log('1111111111111111111111');
    this._callback.addToWatchList();  
   // this._checkingStatus();
  };
  _markAsWatch(){
   
    this._callback.markAsWatch();   
   // this._checkingStatus();
  };
  _addToFavorite(){
   
   // this._checkingStatus();
    this._callback.addToFavorite();
    
  };
  setAddToWatchListHandler(callback){
    this._callback.addToWatchList = callback;
    this.getElement().querySelector('.film-card__controls-item--add-to-watchlist').addEventListener('click',this._addToWatchList);
  };
  setMarkAsWatchHandler(callback){
    this._callback.markAsWatch = callback;
    this.getElement().querySelector('.film-card__controls-item--mark-as-watched').addEventListener('click',this._markAsWatch);
    
  };
  setAddToFavoriteHandler(callback){
    this._callback.addToFavorite = callback;
    this.getElement().querySelector('.film-card__controls-item--favorite').addEventListener('click',this._addToFavorite);
  };

  setClickListener(callback){
    this._callback.openPopup = callback;
    this.getElement().querySelector('.film-card__title').addEventListener('click',this._openPopup);
    this.getElement().querySelector('.film-card__comments').addEventListener('click',this._openPopup);
    this.getElement().querySelector('.film-card__poster').addEventListener('click',this._openPopup);
  };
  // _checkingStatus(){
  //   console.log('hello');
  //   if(this._film.watchlist){
  //     this.getElement().querySelector('.film-card__controls-item--add-to-watchlist').classList.add('film-card__controls-item--active');
  //     // this._popup.getElement().querySelector('.film-details__control-button--watchlist').classList.add('film-details__control-button--active');
  //   }else{
  //     this.getElement().querySelector('.film-card__controls-item--add-to-watchlist').classList.remove('film-card__controls-item--active');
  //     // this._popup.getElement().querySelector('.film-details__control-button--watchlist').classList.remove('film-details__control-button--active');
  //   }
  //   if(this._film.already_watched){
  //     this.getElement().querySelector('.film-card__controls-item--mark-as-watched').classList.add('film-card__controls-item--active');
  //     // this._popup.getElement().querySelector('.film-details__control-button--watched').classList.add('film-details__control-button--active');
  //   }else{
  //     this.getElement().querySelector('.film-card__controls-item--mark-as-watched').classList.remove('film-card__controls-item--active');
  //     // this._popup.getElement().querySelector('.film-details__control-button--watched').classList.remove('film-details__control-button--active');
  //   }
  //   if(this._film.isFavorite){
  //     this.getElement().querySelector('.film-card__controls-item--favorite').classList.add('film-card__controls-item--active');
  //     // this._popup.getElement().querySelector('.film-details__control-button--favorite').classList.add('film-details__control-button--active');
  //   }else{
  //     this.getElement().querySelector('.film-card__controls-item--favorite').classList.remove('film-card__controls-item--active');
  //     // this._popup.getElement().querySelector('.film-details__control-button--favorite').classList.remove('film-details__control-button--active');
  //   }
  // }
}