'use strict'
import {colors} from './constants.js';

const getFromState = (keyName)=>{
    if(window.coloringGameState){
        return window.coloringGameState[keyName] ?? null;
    }
}
const setState = (keyName, val)=>{
    if(window.coloringGameState){
        const newState = {...window.coloringGameState, [keyName]:val};
        window.coloringGameState = newState;
        return newState;
    }
    return null;
}

export const clearColors = (boardElemRef) =>{
    boardElemRef.innerHTML = window.coloringGameState.initialGameBoard;
};
export const createCell = () =>{
    return `<div onclick="paintCell(event)"
    class="grid-cell board-cell" onmouseover="paintCell(event)" ></div>`;
};

export const paintCell = (e) =>{
    let colorToPaint = getFromState('chosenColor');
    if(!colorToPaint) return;
    let cell = e.target;
    if(e.type === 'click' || (e.type === "mouseover" && e.buttons === 1) ){
        cell.style.backgroundColor = colorToPaint;
    }
};

export const colorBtnClick = (e) =>{
    let clickedEl = e.target;
    let clickedElColor = clickedEl.dataset.colorDesc;
    setState('chosenColor',clickedElColor);
    // console.log(clickedElColor);
};

export const createColorBtn = (color) =>{
    return `<div
            class="color-btn"
            onclick="colorBtnClick(event)"
            data-color-desc="${color}"
            style="background-color:${color}">
        </div>`;
};
export const createColorPanel = (el) =>{
    return colors.map( (color) => createColorBtn(color)).join(" ");
}

export const fillBoard = ()=>{
    colors.forEach((color)=>{
            let newColorBtn = createColorBtn(color);
            initialGameBoard.push(newColorBtn)
            colorPanel.innerHTML += createColorBtn(color);
    });
}

