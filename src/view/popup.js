import dayjs from "dayjs";
import AbstractView from "./abstract-view";
import SmartView from "./smart-view";
const createGenresTemplate = (genres)=>{
  //console.log(genres.length);
  return genres.length>1?`
    <td class="film-details__term">Жанры</td>
      <td class="film-details__cell">
        <span class="film-details__genre">${genres.join(", ")}</span>
      </td>`:`
    <td class="film-details__term">Genre</td>
      <td class="film-details__cell">
        <span class="film-details__genre">${genres[0]}</span>
      </td>`
   
};
const createCommentsList = (comments)=>{
 // console.log(comments.comment[0].emotion,'comment');
 return comments.comment.map(({emotion, author, comment, date})=>{
    return `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-${emotion}">
    </span>
    <div>
      <p class="film-details__comment-text">${comment}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${author}</span>
        <span class="film-details__comment-day">${dayjs(date).format('YYYY-MM-DD HH:mm')}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`
  }).join('');
  
}
const createPopup= (film)=>{
  const {title, age_rating, director, alternative_title, poster, genres, writers, actors, description, total_rating, release, runtime, comments} = film;

  return `
    <section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="film-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="${poster}" alt="">
              <p class="film-details__age">${age_rating}</p>
            </div>

            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${title}</h3>
                  <p class="film-details__title-original">Original: ${alternative_title}</p>
                </div>

                <div class="film-details__rating">
                  <p class="film-details__total-rating">${total_rating}</p>
                </div>
              </div>

              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term">Director</td>
                  <td class="film-details__cell">${director}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Writers</td>
                  <td class="film-details__cell">${writers.join(', ')}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Actors</td>
                  <td class="film-details__cell">${actors.join(', ')}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Release Date</td>
                  <td class="film-details__cell">${release.date.format('DD MMMM YYYY')}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Runtime</td>
                  <td class="film-details__cell">${runtime}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">${release.country}</td>
                </tr>
                <tr class="film-details__row">
                  ${createGenresTemplate(genres)}
                </tr>
              </table>

              <p class="film-details__film-description">
                ${description}
              </p>
            </div>
          </div>

          <section class="film-details__controls">
            <button type="button" class="film-details__control-button film-details__control-button--watchlist" id="watchlist" name="watchlist">Add to watchlist</button>
            <button type="button" class="film-details__control-button film-details__control-button--watched" id="watched" name="watched">Already watched</button>
            <button type="button" class="film-details__control-button film-details__control-button--favorite" id="favorite" name="favorite">Add to favorites</button>
          </section>
        </div>

        <div class="film-details__bottom-container">
          <section class="film-details__comments-wrap">
            <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count"> ${comments.comment.length}</span></h3>

            <ul class="film-details__comments-list">
             ${createCommentsList(comments)}
              
            </ul>

            <div class="film-details__new-comment">
              <div class="film-details__add-emoji-label"></div>

              <label class="film-details__comment-label">
                <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
              </label>

              <div class="film-details__emoji-list">
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
                <label class="film-details__emoji-label" for="emoji-smile">
                  <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
                <label class="film-details__emoji-label" for="emoji-sleeping">
                  <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
                <label class="film-details__emoji-label" for="emoji-puke">
                  <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
                </label>

                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
                <label class="film-details__emoji-label" for="emoji-angry">
                  <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
                </label>
              </div>
            </div>
          </section>
        </div>
      </form>
    </section>
  `;
};

export default class Popup extends SmartView{
  constructor(filmCard){
    super();
    this._filmCard = Popup.parsePointToData(filmCard);
    this._openPopup = this._openPopup.bind(this);
    this._addToWatchList = this._addToWatchList.bind(this);
    this._markAsWatch = this._markAsWatch.bind(this);
    this._addToFavorite = this._addToFavorite.bind(this);
    this._emojiHandler = this._emojiHandler.bind(this);
    this._setInnerHandlers();
    //this._checkingStatus();
  }
  static parsePointToData(filmCard){
    return Object.assign({}, filmCard);
  }
  static parseDataToPoint(data){
    return Object.assign({},data);
  }
  _openPopup(){
    this._callback.openPopup();
  }
  restoreHandlers(){
    this._setInnerHandlers();
    this._openPopup();
    this.setAddToWatchListHandler(this._callback.addToWatchList);
    this.setMarkAsWatchHandler(this._callback.markAsWatch);
    this.setAddToFavoriteHandler(this._callback.addToFavorite);
  }
  setClickPopup(callback){
    this._callback.openPopup = callback;
    this.getElement().querySelector('.film-details__close-btn').addEventListener('click', this._openPopup);
  }
  _setInnerHandlers(){
   // console.log(this._filmCard,'before');
    this.getElement().querySelectorAll('.film-details__emoji-item').forEach((inputEmoji)=>{
      inputEmoji.addEventListener('change',this._emojiHandler);
    });
  }
  _emojiHandler(evt){
    evt.preventDefault();
    console.log(this._filmCard,'fffffffffffffffffffffffffffffffff');
   // console.log(evt.target.value,'target');
    this._filmCard.comments.comment.push({emotion:evt.target.value, author:evt.target.value});
  //   this.getElement().querySelector('.film-details__add-emoji-label').insertAdjacentHTML('afterbegin',`<span class="film-details__comment-emoji">
  //   <img src="./images/emoji/${evt.target.value}.png" width="55" height="55" alt="emoji-${evt.target.value}">
  // </span>`);
   // console.log(this._filmCard,'after');
    this.updateData(this._filmCard.comments.comment);
  }

  getTemplate(){
 
    return createPopup(this._filmCard);
  }
  _addToWatchList(evt){
    //evt.preventDefault();
    this._callback.addToWatchList();  
  };
  _markAsWatch(evt){
    //evt.preventDefault();
    this._callback.markAsWatch();   
  };
  _addToFavorite(evt){
    //evt.preventDefault();
    this._callback.addToFavorite();
  };
  setAddToWatchListHandler(callback){
    this._callback.addToWatchList = callback;
    this.getElement().querySelector('.film-details__control-button--watchlist').addEventListener('click',this._addToWatchList);
  };
  setMarkAsWatchHandler(callback){
    this._callback.markAsWatch = callback;
    this.getElement().querySelector('.film-details__control-button--watched').addEventListener('click',this._markAsWatch);
  };
  setAddToFavoriteHandler(callback){
    this._callback.addToFavorite = callback;
    this.getElement().querySelector('.film-details__control-button--favorite').addEventListener('click',this._addToFavorite);
  };
  _checkingStatus(){
    console.log('hello');
    if(this._filmCard.watchlist){
      // this._filmCard.getElement().querySelector('.film-card__controls-item--add-to-watchlist').classList.add('film-card__controls-item--active');
      this.getElement().querySelector('.film-details__control-button--watchlist').classList.add('film-details__control-button--active');
    }else{
      // this._filmCard.getElement().querySelector('.film-card__controls-item--add-to-watchlist').classList.remove('film-card__controls-item--active');
      this.getElement().querySelector('.film-details__control-button--watchlist').classList.remove('film-details__control-button--active');
    }
    if(this._filmCard.already_watched){
      // this._filmCard.getElement().querySelector('.film-card__controls-item--mark-as-watched').classList.add('film-card__controls-item--active');
      this.getElement().querySelector('.film-details__control-button--watched').classList.add('film-details__control-button--active');
    }else{
      // this._filmCard.getElement().querySelector('.film-card__controls-item--mark-as-watched').classList.remove('film-card__controls-item--active');
      this.getElement().querySelector('.film-details__control-button--watched').classList.remove('film-details__control-button--active');
    }
    if(this._filmCard.isFavorite){
      // this._filmCard.getElement().querySelector('.film-card__controls-item--favorite').classList.add('film-card__controls-item--active');
      this.getElement().querySelector('.film-details__control-button--favorite').classList.add('film-details__control-button--active');
    }else{
      // this._filmCard.getElement().querySelector('.film-card__controls-item--favorite').classList.remove('film-card__controls-item--active');
      this.getElement().querySelector('.film-details__control-button--favorite').classList.remove('film-details__control-button--active');
    }
  }
}