import AbstractView from "./abstract-view";

export default class SmartView extends AbstractView{
  constructor(){
    super();
    this._filmCard = {};
  }
  restoreHandlers(){
    throw new Error('can\'t implement method');
  }
  updateData(updated,flag){
    // if(!updated){
    //   return;
    // }
 
    this._filmCard = Object.assign(
      {},
      this._filmCard,
      updated
      )
      // if(flag){
      //   return;
      // }
    this.updateElement();
  }
  updateElement(){
    const oldElement = this.getElement();
    const parent = oldElement.parentElement;
    this.removeElement();
    const newElement = this.getElement();

    parent.replaceChild(newElement,oldElement);
    this.restoreHandlers();
  }
} 