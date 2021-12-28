'use strict'
import {colors, cellCount} from './constants.js';
import * as importedMethodsObj from './methods.js'
Object.assign(window,importedMethodsObj);

const coloringGameState = {
    chosenColor:null
}
window.coloringGameState = coloringGameState ;

function colorPanelSetup(colorPanelElemRef){
    colorPanelElemRef.innerHTML = createColorPanel(colorPanelElemRef, colors);
}

function coloringBoardSetup(coloringBoardElemRef){
    let boardHTMLStr = '';
    [...Array(cellCount).keys()].forEach( () => {
        let newCell = importedMethodsObj.createCell();
        boardHTMLStr +=newCell
        // console.log(boardHTMLStr);
    });
    window.coloringGameState.initialGameBoard = boardHTMLStr;
    coloringBoardElemRef.innerHTML = window.coloringGameState.initialGameBoard;
}

//starting the game only when contents are loaded
function createGameSetup(){
    //color panel setup
    const colorPanelEl = document.querySelector(".rows-colors");
    colorPanelSetup(colorPanelEl);

    //game board setup
    let boardEl = document.querySelector('.section-coloring-board');
    coloringBoardSetup(boardEl);

    //clear-colors btn
    const clearColorsBtnElem= document.querySelector('.clear-btn');
    clearColorsBtnElem.addEventListener('click',
    ()=>{ importedMethodsObj.clearColors(boardEl) } );

}
window.addEventListener("load", function(){
    createGameSetup();
});
