function move(block, x, y) {
    block.x += x;
    block.y += y;
}

function rotate(block) {
    block.shape.forEach((row, y) => {
        for(let x=0; x < y; x++) {
            const tempValue = block.shape[x][y];
            block.shape[x][y] = block.shape[y][x]
            block.shape[y][x] = tempValue;
        }
    });

    block.shape.forEach((row) => {
        row.reverse();
    });
}

function validate(block, matrix) {
    let isValid = true;

    block.shape.some((row, dy) => {
        row.some((value, dx) => {
            if(value > 0) {
                if(block.x+dx < 0 || block.x+dx >= matrix.board[0].length ||
                   block.y+dy < 0 || block.y+dy >= matrix.board.length ||
                   matrix.board[block.y+dy][block.x+dx] > 0) {
                    isValid = false;
                    return true;
                }
            }
        });
        if(!isValid) {
            return true;
        }
    });

    return isValid;
}

function validMove(block, matrix, x, y) {
    const cloneBlock = clone(block);
    move(cloneBlock, x, y);
    if(validate(cloneBlock, matrix)) {
        move(block, x, y);
        return true;
    } else {
        return false;
    }
}

function validRotate(block, matrix) {
    const cloneBlock = clone(block);
    rotate(cloneBlock);
    if(validate(cloneBlock, matrix)) {
        rotate(block);
        return true;
    } else {
        return false;
    }
}