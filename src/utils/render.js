import AbstractView from "../view/abstract-view";
import { isEsc } from "./common";


const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
};

const render = (container, element, place = RenderPosition.BEFOREEND) => {
  if (element instanceof AbstractView){
    element = element.getElement();
  }
  if(container instanceof AbstractView){
    container = container.getElement();
  }
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};


const createElement = (element)=>{
  const newElement = document.createElement('div');
  newElement.innerHTML = element;
  return newElement.firstElementChild;
};
const replace = (newComponent, prevComponent)=>{
  if(newComponent instanceof AbstractView){
    newComponent = newComponent.getElement();
  }
  if(prevComponent instanceof AbstractView){
    prevComponent = prevComponent.getElement();
  }
  const prevComponentParent = prevComponent.parentElement;
  if (prevComponentParent === null || newComponent === null || prevComponent === null) {
    throw new Error('Can\'t replace unexisting elements');
  }
  prevComponentParent.replaceChild(newComponent, prevComponent);
}

const remove = (component)=>{
  if(!(component instanceof AbstractView)){
    throw new Error('can remove only component')
  }
  component.getElement().remove();
  component.removeElement();
  }
export {  createElement, RenderPosition, render, isEsc, remove,replace};