import dayjs from 'dayjs';
import {PossibleDescriptions} from '../consts.js';
import {  createRandomNumber} from '../utils/common.js';

const COMMENTS_NUMBER = 5;
const Emotions = ["smile", "sleeping", "puke", "angry"];
const Authors =  ["John Doe", "Julia", "Alexey", "Maksim"];

const createCommentText = ()=>{
  let text = '';
  for (let i = 0; i < createRandomNumber(0, PossibleDescriptions.length - 1); i++) {
    text += PossibleDescriptions[createRandomNumber(0, PossibleDescriptions.length - 1)];
  }
  return text;
};

const createComment = ()=>{
  const comment ={
    
    author: Authors[createRandomNumber(0, Authors.length - 1)],
    comment: createCommentText(),
    emotion:Emotions[createRandomNumber(0, Emotions.length - 1)],
    date: dayjs().subtract(createRandomNumber(0, 10),'day')
  };
return comment;
};

const createComments = (id) => {
  const comments = {};
  comments.comment = [];
  comments.id = id;
  for (let i = 0; i < createRandomNumber(1, COMMENTS_NUMBER); i++) {
    comments.comment.push(createComment());
  }
  return comments;
};

export default createComments;