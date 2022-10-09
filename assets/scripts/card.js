import { playSound, getAncestor, getDescendant, randomArr, makeElem } from './utils.js';

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

export default Card;