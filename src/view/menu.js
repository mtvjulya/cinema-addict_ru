import AbstractView from "./abstract-view";
const createMenu = (favoriteMovie)=>{
  return `
  <nav class="main-navigation">
  <div class="main-navigation__items">
    <a href="#all" class="main-navigation__item main-navigation__item--active">Все фильмы</a>
    <a href="#watchlist" class="main-navigation__item">Список просмотренных <span class="main-navigation__item-count">13</span></a>
    <a href="#history" class="main-navigation__item">История <span class="main-navigation__item-count">4</span></a>
    <a href="#favorites" class="main-navigation__item">Любимые <span class="main-navigation__item-count">${favoriteMovie}</span></a>
  </div>
  <a href="#stats" class="main-navigation__additional">Статистика</a>
  </nav>
  `;
};

export default class Menu extends AbstractView{
 
  getTemplate(){
  return createMenu();
  }

}