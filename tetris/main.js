// html에서 작성한 2가지 canvas 엘리먼트를 가져와 전역변수에 담음
// 2d로 그리겠다는 의미로 getContext 메서드 호출
const canvasMainBoard = document.querySelector('#main-board');
const ctxMainBoard = canvasMainBoard.getContext('2d');
const canvasNextBoard = document.querySelector('#next-board');
const ctxNextBoard = canvasNextBoard.getContext('2d');

// 필요한 행과 열 갯수 선언
const COLS_MAIN_BOARD = 10;
const ROWS_MAIN_BOARD = 20;
const COLS_NEXT_BOARD = 4;
const ROWS_NEXT_BOARD = 4;

// 반응형웹을 위한 브라우저 크기가 달라질 때마다 크기를 계산하는 함수
// main-board 크기를 계산하기 위해 윈도우의 60%로 설정
function resize(){
    const WINDOW_INNERWIDTH = (window.innerWidth > 660)?660:window.innerWidth;
    const MAIN_CONTENTS_WIDTH = Math.floor(WINDOW_INNERWIDTH*0.6);
    const BLOCK_SIZE = Math.floor(MAIN_CONTENTS_WIDTH/COLS_MAIN_BOARD);

    ctxMainBoard.canvas.width = BLOCK_SIZE*COLS_MAIN_BOARD;
    ctxMainBoard.canvas.height = BLOCK_SIZE*ROWS_MAIN_BOARD;
    ctxMainBoard.scale(BLOCK_SIZE, BLOCK_SIZE);

    ctxNextBoard.canvas.width = BLOCK_SIZE*COLS_NEXT_BOARD;
    ctxNextBoard.canvas.height = BLOCK_SIZE*ROWS_NEXT_BOARD;
    ctxNextBoard.scale(BLOCK_SIZE, BLOCK_SIZE);

    const FONT_RATIO = WINDOW_INNERWIDTH/350;
    document.querySelector('#side-contents').getElementsByClassName.fontSize = FONT_RATIO+'rem';

}

(function (){
    main();
}) ();

function main(){
    resize();
    window.addEventListener('resize',resize);
}

