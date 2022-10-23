import Stars from './stars.js';

class Statistics {
    constructor( container, questionListLength ) {
        this.container = container;
        this.questionListLength = questionListLength;
        this.stars = null;
        this.grade = 0;
    }

    initGrades() {
        this.stars = new Stars(this.container, this.questionListLength);
    }

    gradeAnswer(grade) {
        this.grade = grade;
        this.stars.makeStar(this.grade);
    }
}

export default Statistics;