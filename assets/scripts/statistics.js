import Stars from './stars.js';
import cards from './cards.js';
import categories from './categories.js';

class Statistics {
    constructor( container ) {
        this.container = container;
        this.statisticsData = this.getStatisticsData();
        this.stars = null;
        this.grade = 0;
    }

    initGrades(questionListLength) {
        this.stars = new Stars(this.container, questionListLength);
    }

    gradeAnswer(grade) {
        this.grade = grade;
        this.stars.makeStar(this.grade);
    }

    getStatisticsData() {
        const localData = localStorage.getItem('englishForKidsStatistics');
        if(localData) {
            return JSON.parse(localData);
        } else {
            const initialData = cards
                    .slice(1)
                    .map((el, index) => 
                        el.map((innerEl) => {
                        innerEl.category = categories.find((category) => category.index === index).name;
                        innerEl.trained = 0;
                        innerEl.correct = 0;
                        innerEl.incorrect = 0;
                        innerEl.procent = 0;
                        return innerEl
                    })).flat(1);
            
            localStorage.setItem('englishForKidsStatistics', JSON.stringify(initialData));
            return initialData;
        }
    }

    writeAnswer( cardId, isCorrect ) {
        const localData = JSON.parse(localStorage.getItem('englishForKidsStatistics'));
        const word = localData.findIndex((el) => el.id === parseInt(cardId));

        if(isCorrect) {
            localData[word].correct++;
        } else {
            localData[word].incorrect++;
        }
        
        localData[word].procent = 100 / (localData[word].correct + localData[word].incorrect) * localData[word].correct;
        localStorage.setItem('englishForKidsStatistics', JSON.stringify(localData));
    }

    writeTrainedCard( cardId ) {
        const localData = JSON.parse(localStorage.getItem('englishForKidsStatistics'));
        const word = localData.findIndex((el) => el.id === parseInt(cardId));
        localData[word].trained++;

        localStorage.setItem('englishForKidsStatistics', JSON.stringify(localData));
    }
}

export default Statistics;