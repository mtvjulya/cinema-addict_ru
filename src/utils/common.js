import dayjs from "dayjs";
const createRandomNumber = (min = 0, max = 10) => {
  const rundomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return rundomNumber;
};

const createFloatRandomNumber = (min, max)=>{
  return (Math.random() * (max - min) + min).toFixed(2);
 
};

const isEsc = (evt)=>{
  return evt.key === ('Esc'||'Escape');
};

const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);

  if (index === -1) {
    return items;
  }

  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1),
  ];

};

const sortDate = (dateA, dateB)=>{
return dayjs(dateA.release.date).diff(dateB.release.date);
};

const sortRating = (ratingA, ratingB)=>{
  if(ratingA.total_rating === ratingB.total_rating){
    return 0;
  }
  if(ratingA.total_rating > ratingB.total_rating){
    return 1;
  }
  if(ratingA.total_rating < ratingB.total_rating){
    return -1;
  }
}

export {createRandomNumber, createFloatRandomNumber, isEsc, updateItem, sortDate, sortRating};