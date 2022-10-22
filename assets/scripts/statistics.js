import Stars from './stars.js';

class Statistics {
    constructor( container ) {
        this.container = container;
        this.stars = null;
        this.grade = 0;

    }

    initGrades() {
        this.stars = new Stars(this.container);
    }

    gradeAnswer(grade) {
        this.grade = grade;
        this.stars.makeStar(this.grade);
    }
}

export default Statistics;