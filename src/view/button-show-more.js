import AbstractView from "./abstract-view";
import { renderFilmCard } from "../utils/render";
const createButtonShowMore = ()=>{
  return `
    <button class="films-list__show-more">Показать больше</button>
  `;
};

export default class ButtonShowMore extends AbstractView{
  constructor(){
    super();
    this._onClickButtonHandler = this._onClickButtonHandler.bind(this);
  }
  getTemplate(){
    return createButtonShowMore();
  }
  _onClickButtonHandler(){
    this._callback.onClickButtonHandler();
  }
  setClickListener(callback){
    this._callback.onClickButtonHandler = callback;
    this.getElement().addEventListener('click', this._onClickButtonHandler);
  }
};