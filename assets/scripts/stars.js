import { makeElem } from './utils.js';

class Stars {
    constructor(grade) {
        this.grade = grade;
    }
    makeStar() {
        let $starsCNR = makeElem('div', 'stars-cnr');
        let mark = (this.grade) ? grade / 2 : 0;
        console.log(mark)

        for (let i = 0; i < 4; i++) {
            if (mark % 1 == 0.5 && mark > 0) {
                let $starHalf = makeElem('span', 'material-icons', 'star_half');
                $starsCNR.appendChild($starHalf);
                mark -= 0.5;
            } else if (mark <= 8 && mark > 0) {
                let $starFull = makeElem('span', 'material-icons', 'star');
                $starsCNR.prepend($starFull);
                mark -= 1;
            } else if (mark <= 0) {
                let $starVoid = makeElem('span', 'material-icons', 'star_border');
                $starsCNR.appendChild($starVoid);
            }
            console.log(mark)
        }
        return $starsCNR;
    }
}

export default Stars;