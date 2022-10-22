import { makeElem } from './utils.js';

class Stars {
    constructor(container) {
        this.container = container;
        this.starsContainer = null;

        this.init();
    }
    init() {
        this.starsContainer = makeElem('div', 'stars-cnr');
        this.container.before(this.starsContainer);
        this.makeStar(0);
    }
    makeStar(grade) {
        let mark = (grade) ? grade / 2 : 0;
        this.starsContainer.innerHTML = '';

        for (let i = 0; i < 4; i++) {
            let star;
            
            if (mark <= 0) {
                star = makeElem('span', 'material-icons', 'star_border');
            } else if (mark === 0.5) { 
                star = makeElem('span', 'material-icons', 'star_half');
            } else {
                star = makeElem('span', 'material-icons', 'star');
            }

            this.starsContainer.appendChild(star);
            mark = mark ? mark - 1 : mark;
        }
    }
}

export default Stars;