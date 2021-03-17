import Page from "./page";

class SearchPage extends Page{
    get searchIput() {
        return $('#gh-ac');
    }
    
    get searchBtn() {
        return $('#gh-btn');
    }

    get catergory() {
        return $('#gh-cat option:nth-child(1)');
    }

    open() {
        super.open('https://www.ebay.com/');
    }
}

export default new SearchPage();


