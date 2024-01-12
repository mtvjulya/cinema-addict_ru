import AbstractView from "./abstract-view";

const createEmptyList = ()=>{
return `
  <section class="films-list">
      <h2 class="films-list__title">В нашей базе данных нет фильмов</h2>

      <!--
        Значение отображаемого текста зависит от выбранного фильтра:
          * All movies – 'There are no movies in our database'
          * Watchlist — 'There are no movies to watch now';
          * History — 'There are no watched movies now';
          * Favorites — 'There are no favorite movies now'.
      -->
  </section>
  `;
};

export default class EmptyList extends AbstractView{
  getTemplate(){
    return createEmptyList();
  }
}