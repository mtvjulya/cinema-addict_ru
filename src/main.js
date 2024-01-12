import MenuView from "./view/menu.js";
import UserView from "./view/user.js";
import createMovieData from "./mock/movie-data.js";
import { render, RenderPosition} from "./utils/render.js";
import MovieListPresenter from "./presenters/movies-list-presenter.js";
import { nanoid } from "nanoid";

const createIdList = ()=>{
  const FILMS_NUMBER = 20;
  const idList = [];
  for(let i = 0; i<FILMS_NUMBER;i++){
    idList.push(nanoid());
  }
  return idList;
}
const IDs = createIdList();

const movies = IDs.map((id)=>createMovieData(id));
console.log(movies);
const header = document.querySelector('.header');
const main = document.querySelector('.main');
render(header, new UserView(), RenderPosition.BEFOREEND);
render(main, new MenuView(), RenderPosition.BEFOREEND);

const movieListPresenter = new MovieListPresenter(main);
movieListPresenter.init(movies);



