function getRandomIndex(length) {
    return Math.floor(Math.random()*length);
}

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}