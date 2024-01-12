import AbstractView from "./abstract-view";

const createMostCommentedFilmsList = ()=>{
   return `
    <section class="films-list films-list--extra">
    <h2 class="films-list__title">Самый комментируемый</h2>
    
    </section>
  `;
};

export default class MostCommentedFilmsList extends AbstractView{

  getTemplate(){
    return createMostCommentedFilmsList(this._mostCommentedList);
  }
}