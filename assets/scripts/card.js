import { playSound, makeElem } from './utils.js';
import { ASSETS_URL_AUDIO, ASSETS_URL_IMAGES } from './constans.js';

class Card {
    constructor( word, translation, id ) {
        this.word = word;
        this.translation = translation;
        this.id = id;
        this.image = `${ASSETS_URL_IMAGES}${word}.jpg`;
        this.sound = `${ASSETS_URL_AUDIO}${word}.mp3`;
    }

    makeSound(card, sound) {
        card.addEventListener('click', function (event) {
            if(event.target.closest('.btn-rotate')) return;
            playSound(sound);
        });
    }

    makeCardTrain() {
        let card = makeElem('div', 'card');
        card.setAttribute('data-js-card-id', this.id);
        let imageCtr = makeElem('div', 'card_img');
        let $image = makeElem('img', '');
        $image.src = this.image;
        $image.setAttribute('alt', this.word);

        let flip = makeElem('div', 'flip');
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

        imageCtr.appendChild($image);
        $btn.appendChild($btnIcon);
        $wordCtr.appendChild($word);
        $wordCtr.appendChild($btn);
        $translationCtr.appendChild($translation);

        $front.appendChild(imageCtr);
        $front.appendChild($wordCtr);

        let $clone = imageCtr.cloneNode(true);
        $back.appendChild($clone);
        $back.appendChild($translationCtr);

        flip.appendChild($front);
        flip.appendChild($back);
        card.appendChild(flip);
        card.appendChild($sound);

        this.makeSound(card, $sound);

        return card;
    }

    handleFlipBack(event) {
        const flip = event.target.querySelector('.flip');
        if(!flip) return;
        flip.classList.remove('flip-over')
    }

    makeCardPlay() {
        let card = makeElem('div', 'card_play');
        card.setAttribute('data-js-card-id', this.id)
        let imageCtr = makeElem('div', 'card_img');
        let $image = makeElem('img', '');
        $image.src = this.image;
        $image.setAttribute('alt', this.word);
        $image.setAttribute('data-route', this.word);

        let $sound = makeElem('audio', 'card_sound');
        $sound.setAttribute('data-route', this.word);
        $sound.src = this.sound;

        imageCtr.appendChild($image);
        card.appendChild(imageCtr);
        card.appendChild($sound);
        card.setAttribute('data-route', this.word);

        return card;
    }
}

export default Card;