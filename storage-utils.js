const SPIDER = 'SPIDER';

export function saveSpider(spider) {
    const stringySpider = JSON.stringify(spider);

    localStorage.setItem(SPIDER, stringySpider);
}

export function getSpider() {
    const stringySpider = localStorage.getItem(SPIDER);

    return JSON.parse(stringySpider);
}