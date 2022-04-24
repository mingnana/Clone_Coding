function randomNextBlockMatrix() {
    const BLOCK_SET = [
        [
            [1,1],
            [1,1]
        ],
        [
            [0,2,0],
            [2,2,2],
            [0,0,0]
        ],
        [
            [0,3,3],
            [3,3,0],
            [0,0,0]
        ],
        [
            [4,4,0],
            [0,4,4],
            [0,0,0]
        ],
        [
            [5,0,0],
            [5,5,5],
            [0,0,0]
        ],
        [
            [0,0,6],
            [6,6,6],
            [0,0,0]
        ],
        [
            [0,0,0,0],
            [7,7,7,7],
            [0,0,0,0],
            [0,0,0,0]
        ]
    ];

    const BLOCK_SET_OPTIONS = [ // 0: 0, 1~5: 1, 6: 2
        [
            [{},{}],
            [{},{}]
        ],
        [
            [{},{},{}],
            [{},{},{}],
            [{},{},{}]
        ],
        [
            [{},{},{},{}],
            [{},{},{},{}],
            [{},{},{},{}],
            [{},{},{},{}]
        ]
    ];

    const index = getRandomIndex(BLOCK_SET.length);

    let result = {
        block_set: BLOCK_SET[index],
        block_set_options: BLOCK_SET_OPTIONS[(index===0)?0:((index===6)?2:1)]
    }

    return result;
}

function initMatrix(rows, cols) {
    let matrix = {
        board: [],
        options: []
    };
    for(let y=0; y < rows; y++) {
        matrix.board.push(new Array(cols).fill(0));
        matrix.options.push(new Array(cols).fill({}));
    }
    return matrix;
}

function stack(block, matrix) {
    block.shape.forEach((row, y) => {
        row.forEach((value, x) => {
            if(value > 0) {
                matrix.board[y+block.y][x+block.x] = block.shape[y][x];
                matrix.options[y+block.y][x+block.x] = block.shape_options[y][x];
            }
        });
    });
}

function checkFilledLines(matrix) {
    result = [];
    for(let y=0; y < matrix.board.length; y++) {
        if(matrix.board[y].every(value => value > 0)) {
            result.push(y);
        }
    }
    return result;
}

function removeLines(matrix, lineIndexes) {
    lineIndexes.forEach((y, i) => {
        matrix.board.splice(y, 1);
        matrix.board.unshift(new Array(matrix.board[0].length).fill(0));
        matrix.options.splice(y, 1);
        matrix.options.unshift(new Array(matrix.options[0].length).fill({}));
    });
}