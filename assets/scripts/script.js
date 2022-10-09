'use strict'

import cards from './assets/cards.js';
import categories from './assets/categories.js';


const $container = document.querySelector('.container');

const $menuBurgerBtn = document.querySelector(".menu_burger");
const $menu = document.querySelector(".menu");
const $screen = document.querySelector('.screen');

const $menuEls = document.querySelectorAll('.menu-el');

const $toggleSwitch = document.querySelector('#switch_toggle');
const $toggleSwitchLabel = document.querySelector('#switch_toggle-label');

let page = 'main-page';

let pageObj = {
    page: 'animal-a',
    get a() {
        return this.page;
    },
    set c(val) {
        this.page = val;
    }
}

const playSound = (sound) => {
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

$menuBurgerBtn.addEventListener('click', () => {
    $menu.classList.toggle('menu-open');
    $menu.classList.toggle('menu-close');
    $menuBurgerBtn.classList.toggle('menu-burger-rotate');

    if (!document.querySelector(".fade-on")) {
        $screen.classList.add('fade-on');
    } else {
        $screen.classList.remove('fade-on');
    }

    $screen.addEventListener('click', () => {
        $menu.classList.toggle('menu-open');
        $menu.classList.toggle('menu-close');
        $menuBurgerBtn.classList.toggle('menu-burger-rotate');
        $screen.classList.remove('fade-on');
    })
})

class Card {
    constructor(word, translation, image, sound) {
        this.word = word;
        this.translation = translation;
        this.image = image;
        this.sound = sound;
    }

    makeSound(card, sound) {
        card.addEventListener('click', function () {
            playSound(sound);
        });
    }

    makeCardTrain() {
        let $card = makeElem('div', 'card');
        let $imageCtr = makeElem('div', 'card_img');
        let $image = makeElem('img', '');
        $image.src = this.image;
        $image.setAttribute('alt', this.word);

        let $flip = makeElem('div', 'flip');
        let $front = makeElem('div', 'front');
        let $back = makeElem('div', 'back');
        let $titleFront = makeElem('h3', '', this.word);

        let $wordCtr = makeElem('div', 'card_title');
        let $word = makeElem('h3', '', this.word);
        let $translationCtr = makeElem('div', 'card_title');
        let $translation = makeElem('h3', '', this.translation);
        let $btn = makeElem('button', 'btn-rotate');
        let $btnIcon = makeElem('span', 'material-icons', 'flip_camera_android');
        let $sound = makeElem('audio');
        $sound.src = this.sound;

        $imageCtr.appendChild($image);
        $btn.appendChild($btnIcon);
        $wordCtr.appendChild($word);
        $wordCtr.appendChild($btn);
        $translationCtr.appendChild($translation);

        $front.appendChild($imageCtr);
        $front.appendChild($wordCtr);

        let $clone = $imageCtr.cloneNode(true);
        $back.appendChild($clone);
        $back.appendChild($translationCtr);

        $flip.appendChild($front);
        $flip.appendChild($back);
        $card.appendChild($flip);
        $card.appendChild($sound);

        $btn.addEventListener('click', function (e) {
            e.stopPropagation();
            let $flip = getAncestor(this, 'flip');
            $flip.classList.add('flip-over');
            $card.addEventListener('mouseleave', function () {
                this.firstElementChild.classList.remove('flip-over');
            })
        });

        this.makeSound($card, $sound);

        return $card;
    }

    makeCardPlay() {
        let $card = makeElem('div', 'card_play');
        let $imageCtr = makeElem('div', 'card_img');
        let $image = makeElem('img', '');
        $image.src = this.image;
        $image.setAttribute('alt', this.word);

        let $sound = makeElem('audio', 'card_sound');
        $sound.setAttribute('data-route', this.word);
        $sound.src = this.sound;

        $imageCtr.appendChild($image);
        $card.appendChild($imageCtr);
        $card.appendChild($sound);
        $card.setAttribute('data-route', this.word);

        return $card;
    }
}


class Category {
    constructor(image, title) {
        this.image = image;
        this.title = title;
    }

    makeCategory(mode) {
        let $category = (mode === 'train') ? makeElem('div', ['category', 'category_train']) : makeElem('div', ['category', 'category_play']);
        $category.setAttribute('data-route', this.title);
        let $imageCtr = makeElem('div', 'category_img');
        let $image = makeElem('img', '');
        $image.src = this.image;
        $image.setAttribute('alt', this.title);
        let $titleCtr = makeElem('div', 'category_title')
        let $title = makeElem('h3', '', this.title);
        $imageCtr.appendChild($image);
        $titleCtr.appendChild($title);
        $category.appendChild($imageCtr);
        $category.appendChild($titleCtr);

        return $category;
    }
}

class Router {
    constructor(link) {
        this.routes = [];
        this.currentPage = null;
    };

    init() {
        this.routes.push('main-page');
        categories.forEach(item => {
            this.routes.push(item.name);
        })
        history.replaceState({}, 'Main page', '#main-page');
        window.addEventListener('popstate', this.poppin);
    };

    nav(ev) {
        ev.preventDefault();
        this.currentPage = (ev.target.getAttribute('data-route')) || getAncestor(ev.target, 'category').getAttribute('data-route');
        pageObj.c = this.currentPage;
        history.pushState({}, this.currentPage, `#${this.currentPage}`);
    };

    poppin(ev) {
        //let hash = location.hash.replace('#' ,'');
        history.pushState({}, this.currentPage, `#${this.currentPage}`);
    };
}

class Stars {
    makeStar(grade) {
        let $starsCNR = makeElem('div', 'stars-cnr');
        let mark = (grade) ? grade / 2 : 0;
        console.log(mark)

        for (let i = 0; i < 4; i++) {
            if (mark % 1 === 0) {
                let $starFull = makeElem('span', 'material-icons', 'star');
                $starsCNR.appendChild($starFull);
                mark -= 0.5;
            } else if (mark % 1 == 0.5) {
                let $starHalf = makeElem('span', 'material-icons', 'star_half');
                $starsCNR.appendChild($starHalf);
                mark -= 0.5;
            } else if (mark === 0 || mark < 0) {
                let $starVoid = makeElem('span', 'material-icons', 'star_border');
                $starsCNR.appendChild($starVoid);
            }
            //mark -= 0.5;
            console.log(mark)
        }
        return $starsCNR;
    }
}

class App {
    constructor(mode) {
        this.mode = mode;
        this.fail = false;
    }
    init() {
        //$container.innerHTML = '';

        let linkRouter = new Router();
        linkRouter.init();
        this.pageScreen(linkRouter);

        let $links = document.querySelectorAll('.menu-el a');
        $links.forEach((link) => {
            link.addEventListener('click', function (e) {
                let route = this.getAttribute('data-index');
                (route === '-1') ? mpage.makeMain(linkRouter): mpage.makeCategoryPage(+route + 1);

                linkRouter.nav(e);
            });
        })
        this.switchMode(linkRouter);
    }

    pageScreen(linkRouter) {
        if (pageObj.page === 'animal-a') {
            this.makeMain(linkRouter);
        } else {
            let index = 0;
            categories.forEach(item => {
                if (item.name === pageObj.page) {
                    index = item.index;
                }
            })
            this.makeCategoryPage(index);
        }
    }

    switchMode(linkRouter) {
        $toggleSwitch.addEventListener('change', () => {
            this.mode = (this.mode === 'train') ? 'play' : 'train';
            $toggleSwitchLabel.innerHTML = this.mode;
            $toggleSwitchLabel.style.paddingRight = (this.mode === 'train') ? '1rem' : '5rem';
            if (this.mode === 'play') {
                if (!$menu.classList.contains('menu-play')) {
                    $menu.classList.add('menu-play');
                }
            }
            else {
                $menu.classList.remove('menu-play');
            }
            this.pageScreen(linkRouter);
            return this.mode;
        })
    }



    makePlay(cardItems) {
        let $btnPlay = makeElem('button', 'btn-play', 'start');
        let $btnIcon = makeElem('span', 'material-icons', 'replay');
        $btnPlay.appendChild($btnIcon);

        let $errSound = makeElem('audio', '');
        $errSound.src = 'assets/audio/error.mp3';
        let $corrSound = $errSound.cloneNode(true);
        $corrSound.src = 'assets/audio/correct.mp3';
        let $failSound = $corrSound.cloneNode(true);
        $failSound.src = 'assets/audio/failure.mp3';
        let $succSound = $failSound.cloneNode(true);
        $succSound.src = 'assets/audio/success.mp3';

        let $finalImgW = makeElem('img', 'final-img');
        $finalImgW.src = 'assets/img/success.jpg';
        $finalImgW.setAttribute('alt', 'success');
        let $finalImgF = $finalImgW.cloneNode(true);
        $finalImgF.src = 'assets/img/failure.jpg';
        $finalImgF.setAttribute('alt', 'failure');

        let stars = new Stars();
        let $starsCNR = stars.makeStar(0);

        let $audios = [];
        let $cards = [];
        let word = '';
        let mark = 1;

        cardItems.forEach(item=>{
            let audio = getDescendant(item.dom, 'card_sound');
            $cards.push(item.dom);

            $audios.push(audio);
        })
        let $mixedAudios = randomArr($audios);
        const makeTimer = (arr, timer) => setTimeout(() => {
            let repeat = arr.shift();
            word = repeat.getAttribute('data-route');
            playSound(repeat);
            makeTimer(arr, timer);
        }, timer);
        const clearTimer = (timer) => {
            clearTimeout(timer);
        }
        $btnPlay.addEventListener('click', function(){
            playSound($mixedAudios[0]);
            let repeat = $mixedAudios.shift();
            $btnPlay.textContent = ''; 
            $btnPlay.appendChild($btnIcon);
            word = repeat.getAttribute('data-route')
            makeTimer($mixedAudios, 8000)
            $btnIcon.addEventListener('click', function(e){
                e.stopPropagation();
                playSound(repeat);
                clearTimer(makeTimer);
            })



            $cards.forEach(item=>{
                item.addEventListener('click', function(){

                    if (this.getAttribute('data-route') === word) {
                        console.log(mark)

                        $starsCNR = stars.makeStar(mark);
                        mark++;
                        $container.before($starsCNR);
                        playSound($corrSound);
                    }
                    else {
                        mpage.fail = true;
                        playSound($errSound);
                    }
                    if ($mixedAudios.length === 0) {
                        $container.innerHTML = '';
                        if (!mpage.fail) {
                            $container.appendChild($finalImgW);
                            $container.appendChild($succSound);
                            playSound($succSound);
                            setTimeout(()=>{
                                mpage.mode = 'train';
                                mpage.init();
                            }, 8000);
                        }
                        else {
                            $container.appendChild($finalImgF);
                            $container.appendChild($failSound);
                            playSound($failSound);
                            setTimeout(()=>{
                                mpage.mode = 'train';
                                mpage.init();
                            }, 8000);
                        }
                    }
                })
            })
        })
        $container.appendChild($errSound);
        $container.appendChild($corrSound);

        $container.after($btnPlay);
    }

    makeCategoryPage(index) {
        $container.innerHTML = '';
        let cardItems = [];
        cards[index].forEach(item => {
            let itemCard = new Card(item.word, item.translation, item.image, item.audioSrc);
            itemCard.dom = (this.mode === 'train') ? itemCard.makeCardTrain() : itemCard.makeCardPlay();
            cardItems.push(itemCard);
            $container.appendChild(itemCard.dom);
        })
        if (this.mode === 'train') {} else {
            this.makePlay(cardItems);
        }
        return cardItems;
    }

    makeMain(linkRouter) {
        $container.innerHTML = '';
        let catItems = [];
        categories.forEach(item => {
            let itemCat = new Category(item.image, item.name);
            itemCat.dom = itemCat.makeCategory(this.mode);
            catItems.push(itemCat);

            itemCat.dom.addEventListener('click', function (e) {
                linkRouter.nav(e);
                mpage.makeCategoryPage(item.index + 1);
            });

            $container.appendChild(itemCat.dom);
        })
        return catItems;
    }
}

const mpage = new App('train');
mpage.init()