const playSound = (sound) => {
    console.log(sound)
    sound.currentTime = 0;
    sound.play();
}

function getAncestor(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}

function getDescendant(el, cls) {
    while ((el = el.lastElementChild) && !el.classList.contains(cls));
    return el;
}

const randomArr = (arr) => arr.slice(0).sort((a, b) => 0.5 - Math.random());

const makeElem = (type, className = '', text = '') => {
    let el = document.createElement(type);
    if (className) {
        if (typeof className === 'string') {
            el.classList.add(className);
        } else {
            className.forEach(item => el.classList.add(item));
        }
    };
    let textNode = document.createTextNode(text);
    el.appendChild(textNode);
    return el;
}

export { playSound, getAncestor, getDescendant, randomArr, makeElem };