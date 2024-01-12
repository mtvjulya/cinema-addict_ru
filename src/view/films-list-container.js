import AbstractView from "./abstract-view";
const createFilmsListContainer = ()=>{
  return `
    <div class="films-list__container">

  </div>
   `;
}

export default class FilmListContainer extends AbstractView{
  getTemplate(){
    return createFilmsListContainer();
  }
}