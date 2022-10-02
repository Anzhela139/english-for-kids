import cards from '/assets/cards.js';
import categories from '/assets/categories.js';


const $container = document.querySelector('.container');

const $menuBurgerBtn = document.querySelector(".menu_burger");
const $menu = document.querySelector(".menu");
const $screen = document.querySelector('.screen');

const $menuEls = document.querySelectorAll('.menu-el');

const $toggleSwitch = document.querySelector('#switch_toggle');
const $toggleSwitchLabel = document.querySelector('#switch_toggle-label');

function getAncestor(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
}

const makeElem = (type, className = '', text= '') => {
    let el = document.createElement(type);
    if (className) el.classList.add(className);
    let textNode = document.createTextNode(text);
    el.appendChild(textNode);
    return el;
}

$menuBurgerBtn.addEventListener('click', () => {
    //if (document.querySelector(".menu-open")) {$menu.classList.add('menu-close')};
    //console.log($menu);
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

$toggleSwitch.addEventListener('input', () => {
    $toggleSwitchLabel.innerHTML = ($toggleSwitchLabel.innerHTML = 'train') ? 'play' : 'train';
})



class Card {
    constructor(word, translation, image, sound) {
        this.word = word;
        this.translation = translation;
        this.image = image;
        this.sound = sound;
    }

    makeCard() {
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

        let $clone = $imageCtr.cloneNode( true );
        $back.appendChild($clone);
        $back.appendChild($translationCtr);

        $flip.appendChild($front);
        $flip.appendChild($back);
        $card.appendChild($flip);
        $card.appendChild($sound);

            $btn.addEventListener('click', function (e) {
                let $flip = getAncestor(this, 'flip');
                $flip.classList.add('flip-over');
            });


        return $card;
    }
}


class Category {
    constructor(image, title) {
        this.image = image;
        this.title = title;
    }

    makeCategory() {
        let $category = makeElem('div', 'category_train');
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



class Pages{
    init() {
        this.makeCategoryPage();
        let catItems = this.makeMain();
        //$container.appendChild(catItems);
    }
    
    makeCategoryPage() {
        let cardItems = [];
        cards[1].forEach(item=>{
            let itemCard = new Card(item.word, item.translation, item.image, item.audioSrc);
            itemCard.dom = itemCard.makeCard();
            cardItems.push(itemCard);
            console.log(itemCard)
            $container.appendChild(itemCard.dom);
        })
        return cardItems;
    }

    makeMain() {
        let catArr = Array.from($menuEls);
        let catItems = [];
        categories.forEach(item=>{
            let itemCat = new Category(item.image, item.name);
            itemCat.dom = itemCat.makeCategory();
            catItems.push(itemCat);
        })
        return catItems;
    }
}

const mpage = new Pages();
console.log(mpage.init())