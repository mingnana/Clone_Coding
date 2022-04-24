const sideContents = document.querySelector('#side-contents');
const title = document.querySelector('#title');

const bottomContainer = document.querySelector('#bottom-container');
const keypad = document.querySelector("#keypad");
const keypad2 = document.querySelector("#keypad2");

const startButton = document.querySelector('#start-button');
const quitButton = document.querySelector('#quit-button');
const pauseButton = document.querySelector('#pause-button');
const toggleKeysetButton = document.querySelector('#toggle-keyset-button');
const toggleSoundButton = document.querySelector('#toggle-sound-button');

// html에서 작성한 2가지 canvas 엘리먼트를 가져와 전역변수에 담음
// 2d로 그리겠다는 의미로 getContext 메서드 호출
const canvasMainBoard = document.querySelector('#main-board');
const ctxMainBoard = canvasMainBoard.getContext('2d');
const canvasNextBoard = document.querySelector('#next-board');
const ctxNextBoard = canvasNextBoard.getContext('2d');

const COLS_MAIN_BOARD = 10;
const ROWS_MAIN_BOARD = 20;
const COLS_NEXT_BOARD = 4;
const ROWS_NEXT_BOARD = 4;

let mainBlock = null;
let nextBlock = null;

let time = 0;
let requestAnimationId = null;

let matrixMainBoard = initMatrix(ROWS_MAIN_BOARD, COLS_MAIN_BOARD);

let timeForRemovingLines = 0;
let filledLines = [];

let gameStatus = null;

let totalScore = 0;
let scoreElem = document.querySelector('#score');
let addScoreElem = document.querySelector('#add-score');
let addScoreId = null;
let globalAddScore = 0;
let highScoreElem = document.querySelector('#high-score');

let remaningLines = 0;
let linesElem = document.querySelector('#lines');
let removeLinesElem = document.querySelector('#remove-lines');
let removeLinesId = null;
let comboCount = 0;

let currentLevel = 1;
let levelElem = document.querySelector('#level');
let levelUpElem = document.querySelector('#level-up');
let levelUpId = null;

const COLOR_SET = [
    '#1726f3',
    '#df2736',
    '#38a73b',
    '#fc902c',
    '#6f4af7',
    '#ffd151',
    '#1c2491',
    '#9c9c9c'
];

const soundElem = document.querySelector('#sound');
const bgmElem = document.querySelector('#bgm');
let allowSound = true;

let timeForMakingOneLine = 0;
const levelToStartForMakingOneLine = 5;

/* 사파리 오디오 지연 문제 해결 */
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();