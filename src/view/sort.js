import AbstractView from "./abstract-view";
import { SortType } from "../utils/const";
const createSortElement = ()=>{
  return `
    <ul class="sort">
    <li><a href="#" class="sort__button sort__button--active" data-sort-type='${SortType.DEFAULT}'>По умолчанию</a></li>
    <li><a href="#" class="sort__button" data-sort-type='${SortType.BY_DATE}'>По дате</a></li>
    <li><a href="#" class="sort__button" data-sort-type='${SortType.BY_RATING}'>По рейтингу</a></li>
    </ul>
  `;
};

export default class SortView extends AbstractView{
  constructor(){
    super();
    this._sortTypeChangeHandler = this._sortTypeChangeHandler.bind(this);
  }
  getTemplate(){
    return createSortElement();
  }
  _sortTypeChangeHandler(evt){
    if(evt.target.tagName !=='A'){
      return;
    }
    console.log(evt.target.dataset.sortType);
    this._callback.handleSortType(evt.target.dataset.sortType);
  }
  setHandleSortType(callback){
    this._callback.handleSortType = callback;
    this.getElement().addEventListener('click', this._sortTypeChangeHandler);
  }
}