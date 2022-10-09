import { makeElem } from './utils.js';

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

export default Category;