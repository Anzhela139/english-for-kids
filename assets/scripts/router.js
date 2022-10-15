import categories from "./categories.js";
import { getAncestor } from './utils.js';

let pageObj = {
    page: 'animal-a',
    get a() {
        return this.page;
    },
    set c(val) {
        this.page = val;
    }
}

class Router {
    constructor() {
        this.routes = [];
        this.currentPage = null;

        this.init();
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


export default Router;