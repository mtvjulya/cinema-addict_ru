import {
  movieTitles, PossibleDescriptions, createIdList
} from "../consts";
import dayjs from "dayjs";
import {
  createRandomNumber,
  createFloatRandomNumber
} from "../utils/common.js";
import createComments from "./comments-data.js";
import { nanoid } from "nanoid";



const Genres = [
  'Drama', 'Comedy', 'Western', 'Fantesy', 'Musical', 'Cartoon'
];

const alternativeTitles = ['Hello', 'Computer', 'Lamp'];

const directors = ['Tom Ford', 'Tom Hardy', 'Limon'];

const Writers = ['Tom Ford', 'Tom Hardy', 'Limon'];

const Actors = ['Tom Ford', 'Tom Hardy', 'Limon'];

const Countries = ['USA', 'Russia','France', 'China'];

// const createCommentsIds = (comments)=>{
//   const commentsIds = comments.map(({id})=> id);
//   return commentsIds;
// };

const createCountry = ()=>{
  const country = Countries[createRandomNumber(0, Countries.length - 1)];
  return country;
};

const createActors = () => {
  const actors = [];
  for (let i = 0; i <= createRandomNumber(1, Actors.length - 1); i++) {
    actors.push(Actors[i]);
  }
  return actors;
};

const createWriters = () => {
  const writers = [];
  for (let i = 0; i <= createRandomNumber(0, Writers.length - 1); i++) {
    writers.push(Writers[i]);
  }
  return writers;
};

const createAlternativeTitle = () => {
  const alternativeTitle = alternativeTitles[createRandomNumber(0, alternativeTitles.length - 1)];
  return alternativeTitle;
};

const createGenre = () => {
  const genresSet = new Set();
   for (let i = 1; i <=createRandomNumber(2, Genres.length - 1); i++) {
    genresSet.add(Genres[createRandomNumber(0, Genres.length - 1)]);
   }
  const genres = Array.from(genresSet);
  return genres;
};

const createDescription = (text) => {
  let description = '';
  for (let i = 0; i < createRandomNumber(0, PossibleDescriptions.length - 1); i++) {
    description += PossibleDescriptions[createRandomNumber(0, PossibleDescriptions.length - 1)];
  }
  return description;
};

const createPoster = (title) => {
  const poster = title.toLowerCase().split(' ').join('-');
  return poster;
};

const createRuntime = (time) => {
  const hours = Math.floor(time / 60);
  const minutes = time < 60 ? time + 'm' : time % 60 + 'm';
  return hours > 0 ? hours + 'h ' + minutes : minutes;
};

const createMovieData = (id) => {
  const title = movieTitles[createRandomNumber(0, movieTitles.length - 1)];

  const movieData = {
    id:id,
    comments:createComments(id),
    title:title,
    age_rating: createRandomNumber(0, 18),
    director: directors[createRandomNumber(0, directors.length - 1)],
    alternative_title: createAlternativeTitle(),
    poster: `./images/posters/${createPoster(title)}.jpg`,
    genres: createGenre(),
    writers: createWriters(),
    actors: createActors(),
    description: createDescription(),
    total_rating: createFloatRandomNumber(0, 10),
    isFavorite:false,
    already_watched: false,
    watchlist: false,
    release: {
      date: dayjs().subtract(createRandomNumber(0, 10), 'year'),
      country:createCountry()
    },
    runtime: createRuntime(createRandomNumber(40, 200)),
    user_details: {
      watchlist: false,
      already_watched: true,
      
      isFavorite: false,
    }
  };
  return movieData;

};

export default createMovieData;