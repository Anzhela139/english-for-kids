'use strict'

import cards from './cards.js';
import categories from './categories.js';
import Card from './card.js';
import Category from './category.js';
import Router from './router.js';
import Statistics from './statistics.js';
import { playSound, getDescendant, getAncestor, randomArr, makeElem } from './utils.js';
import { ASSETS_URL_AUDIO, ASSETS_URL_IMAGES } from './constans.js';

document.addEventListener('DOMContentLoaded', () => {
    new App(
        'train',
        document.querySelector('.container'),
        document.querySelector(".menu_burger"),
        document.querySelector(".menu"),
        document.querySelector('.screen'),
        document.querySelector('#switch_toggle'),
        document.querySelector('#switch_toggle-label')
    );
})


class App {
    pageObj = {
        page: 'animal-a',
        get a() {
            return this.page;
        },
        set c(val) {
            this.page = val;
        }
    }

    constructor( mode, container, menuBurgerBtn, menu, screen, toggleSwitch, toggleSwitchLabel ) {
        this.mode = mode;
        this.container = container;
        this.menuBurgerBtn = menuBurgerBtn;
        this.menu = menu;
        this.screen = screen;
        this.toggleSwitch = toggleSwitch;
        this.toggleSwitchLabel = toggleSwitchLabel;

        this.fail = false;
        this.linkRouter = null;
        this.statistics = new Statistics(this.container);
        this.mark = 1;
        this.audiosPlay = [];
        this.word = '';
        this.cardsPlay = [];
        this.mixedAudios = [];
        this.audiosPlayControls = [];

        Object.defineProperty(this, "data", {
            get() {
                const actualData = someExpensiveComputation();
 
                Object.defineProperty(this, "data", {
                    value: actualData,
                    writable: false,
                    configurable: false
                });
 
                return actualData;
            },
            configurable: true,
            enumerable: true
        });

        this.init();
    }
    init() {
        const btnWrapper = document.querySelector('.btn-play--wraper');
        if(btnWrapper) {
            btnWrapper.remove();
        }
        
        this.linkRouter = new Router();
        this.pageScreen(this.linkRouter);

        let $links = document.querySelectorAll('.menu-el a');

        $links.forEach((link) => {
            link.addEventListener('click', this.handleMakeLink.bind(this));
        })

        this.toggleSwitch.addEventListener('input', this.handleSwitchMode.bind(this));
        this.menuBurgerBtn.addEventListener('click', this.handleMenu.bind(this));
        this.menu.addEventListener('transitionend', this.handleMenuBtn.bind(this));
        this.screen.addEventListener('click', this.handleMenu.bind(this));
    }

    pageScreen(linkRouter) {
        if (this.pageObj.page === 'animal-a') {
            this.makeMain(linkRouter);
        } else {
            let index = categories.findIndex((el) => el.name === this.pageObj.page);
            this.makeCategoryPage(index > 0 ? index : 0);
        }
    }

    handleMakeLink(event) {
        let route = event.target.getAttribute('data-index');
        if(route === '-1') {
            this.container.closest('body').classList.remove('body-with-table');
            this.container.classList.remove('statistics-table');
            this.makeMain(this.linkRouter)
        } else if (route === '8') {
            this.makeStatisticsPage();
        } else {
            this.container.closest('body').classList.remove('body-with-table');
            this.container.classList.remove('statistics-table');
            this.makeCategoryPage(+route + 1)
        }

        this.linkRouter.nav(event);
    }

    handleSwitchMode(event) {
        this.mode = (this.mode === 'train') ? 'play' : 'train';
        this.toggleSwitchLabel.innerHTML = this.mode;
        this.toggleSwitchLabel.style.paddingRight = (this.mode === 'train') ? '1rem' : '3.5rem';
        if (this.mode === 'play') {
            if (!this.menu.classList.contains('menu-play')) {
                this.menu.classList.add('menu-play');
            }
        } else {
            this.menu.classList.remove('menu-play');
        }
        this.pageScreen(this.linkRouter);
        return this.mode;
    }

    handleMenuBtn() {
        this.menuBurgerBtn.classList.toggle('handler-disabled');
    }

    handleMenu() {
        this.menu.hidden = false;
        this.menuBurgerBtn.classList.toggle('menu-burger-rotate');
        this.handleMenuBtn();
        setTimeout(() => {
            this.menu.classList.toggle('menu-open');
    
            if (!document.querySelector(".fade-on")) {
                this.screen.classList.add('fade-on');
            } else {
                this.screen.classList.remove('fade-on');
            }
        }, 5)
    }

    handleCategory(...args) {
        this.linkRouter.nav(args[1]);
        this.makeCategoryPage(args[0] + 1);
    }

    handleCard(event) {
        this.statistics.gradeAnswer(this.mark);

        if (event.target.getAttribute('data-route') === this.word) {
            event.target.closest('.card_play').classList.add('checked_card');
            this.mark++;

            const correctSound = this.audiosPlayControls.find((el) => el.id === 'correct-audio');
            playSound(correctSound);
            this.statistics.writeAnswer(event.target.closest('.card_play').dataset['jsCardId'], true);
        } else {
            this.fail = true;

            const errSound = this.audiosPlayControls.find((el) => el.id === 'error-audio');
            playSound(errSound);
            this.statistics.writeAnswer(event.target.closest('.card_play').dataset['jsCardId'], false);
        }
        
        if (this.mixedAudios.length === 0) {
            this.makeFinish();
        }
    }

    makeFinish() {
        let finalImgW = makeElem('img', 'final-img');
        finalImgW.src = `${ASSETS_URL_IMAGES}success.jpg`;
        finalImgW.setAttribute('alt', 'success');
        let finalImgF = finalImgW.cloneNode(true);
        finalImgF.src = `${ASSETS_URL_IMAGES}failure.jpg`;
        finalImgF.setAttribute('alt', 'failure');

        this.container.innerHTML = '';
        this.container.classList.add('final');
        if (!this.fail) {
            this.container.appendChild(finalImgW);
            const failureSound = this.audiosPlayControls.find((el) => el.id === 'success-audio');
            playSound(failureSound);
        } else {
            this.container.appendChild(finalImgF);
            const failureSound = this.audiosPlayControls.find((el) => el.id === 'failure-audio');
            playSound(failureSound);
        }

        const btnWrapper = document.querySelector('.btn-play--wraper');
        btnWrapper.innerHTML = '';

        const $btnPlay = makeElem('button', 'btn-play', 'play again');
        let $btnIcon = makeElem('span', 'material-icons', 'replay');
        $btnPlay.addEventListener('click', this.handlePlay.bind(this, $btnIcon), { once: true });
        const btnTrain = makeElem('button', 'btn-train', 'train more');
        btnTrain.addEventListener('click', this.init.bind(this));
        btnWrapper.appendChild($btnPlay);
        btnWrapper.appendChild(btnTrain);
    }  

    makeAudioPlayControls() {
        const audioPlayWrap = makeElem('div');
        audioPlayWrap.setAttribute('data-js-audio-controls', '')

        const makeAudioControls = ( name ) => {
            const audioElem = makeElem('audio');
            audioElem.src = `${ASSETS_URL_AUDIO}${name}.mp3`;
            audioElem.id = `${name}-audio`;
            this.audiosPlayControls.push(audioElem);
            audioPlayWrap.appendChild(audioElem);
        }

        makeAudioControls('error');
        makeAudioControls('correct');
        makeAudioControls('failure');
        makeAudioControls('success');
        this.container.after(audioPlayWrap);
    }

    playMode() {
        this.makeAudioPlayControls();
        if(!document.querySelector('.btn-play--wraper')) {
            let wrapper = makeElem('div', 'btn-play--wraper');
            let $btnPlay = makeElem('button', 'btn-play', 'start');
            let $btnIcon = makeElem('span', 'material-icons', 'replay');
            $btnPlay.appendChild($btnIcon);
            $btnPlay.addEventListener('click', this.handlePlay.bind(this, $btnIcon), { once: true });
            wrapper.appendChild($btnPlay);
            this.container.after(wrapper);
        }
    }

    handlePlay(...args) {
        this.mixedAudios = randomArr(this.audiosPlay);
        this.statistics.initGrades(this.mixedAudios.length);
        playSound(this.mixedAudios[0]);

        const btnPlay = args[1].target;
        btnPlay.innerHTML = '';

        this.handleTimer(this.mixedAudios, 4000, false);
        args[0].addEventListener('click', this.handleCardSound.bind(this));

        this.cardsPlay.forEach(item => {
            item.addEventListener('click', this.handleCard.bind(this));
        })
    }

    handleTimer( audios, delay, clear ) {
        const makeTimer = (arr, timer) => setTimeout(() => {
            let repeat = arr.shift();
            if(!repeat) return;

            this.word = repeat.getAttribute('data-route');
            playSound(repeat);
            makeTimer(arr, timer);
        }, timer);

        const clearTimer = (timer) => {
            clearTimeout(timer);
        }

        if(clear) {
            clearTimer(makeTimer);
        } else {
            makeTimer(audios, delay);
        }
    }


    handleCardSound(e) {
        e.stopPropagation();
        playSound(repeat);
        this.handleTimer(null, null, true);
    }

    makeCategoryPage(index) {
        this.container.innerHTML = '';
        let cardItems = [];
        cards[index].forEach(item => {
            let itemCard = new Card(item.word, item.translation, item.id);
            itemCard.dom = (this.mode === 'train') ? itemCard.makeCardTrain() : itemCard.makeCardPlay(); 

            if(this.mode !== 'train') {
                let audio = getDescendant(itemCard.dom, 'card_sound');
                this.cardsPlay.push(itemCard.dom);
                this.audiosPlay.push(audio);
            } else {
                itemCard.dom.addEventListener('click', this.handleFlipCard.bind(itemCard));
            }

            cardItems.push(itemCard);
            this.container.appendChild(itemCard.dom);
        })
        if (this.mode !== 'train') {
            this.playMode();
        }
        return cardItems;
    }

    handleFlipCard(event) {
        if(!event.target.closest('.btn-rotate')) return;

        event.stopPropagation();
        const card = event.target.closest('.card');
        this.statistics.writeTrainedCard(card.dataset['jsCardId']);
        let flip = getAncestor(event.target, 'flip');
        flip.classList.add('flip-over');
        card.addEventListener('mouseleave', this.handleFlipBack.bind(this));
        card.removeEventListener('mouseleave', this.handleFlipBack.bind(this))
    }

    makeStatisticsPage() {
        this.container.innerHTML = '';

        const divWrapper = makeElem('div', 'table--wrapper', '');
        const table = makeElem('table', 'table-responsive', '');

        const makeTHeader = ( arr, thead ) => {
            arr.map((el) => {
                const th = makeElem('th', '', el);
                thead.appendChild(th);
            })
        }

        const thead = makeElem('thead', '', '');
        makeTHeader(
            ['Categories', 'Words', 'Translation', 'Trained', 'Correct', 'Incorrect', '%'],
            thead
        )
        const tbody = makeElem('tbody', '', '')
        const statisticsData = this.statistics.getStatisticsData();

        statisticsData.map((el) => {
            const tr = makeElem('tr');
            const makeApend = ( name ) => {
                const elem = makeElem('td', '', name);
                tr.appendChild(elem);
            }

            makeApend(el.category);
            makeApend(el.word);
            makeApend(el.translation);
            makeApend(el.trained);
            makeApend(el.correct);
            makeApend(el.incorrect);
            makeApend(el.procent);

            tbody.appendChild(tr);
        })

        table.appendChild(thead);
        table.appendChild(tbody);
        divWrapper.appendChild(table);
        this.container.closest('body').classList.toggle('body-with-table');
        this.container.classList.toggle('statistics-table');
        this.container.appendChild(divWrapper);
    }

    makeMain() {
        this.container.innerHTML = '';
        let catItems = [];
        categories.forEach(item => {
            let itemCat = new Category(item.image, item.name);
            itemCat.dom = itemCat.makeCategory(this.mode);
            catItems.push(itemCat);

            itemCat.dom.addEventListener('click', this.handleCategory.bind(this, item.index));

            this.container.appendChild(itemCat.dom);
        })
        return catItems;
    }
}
