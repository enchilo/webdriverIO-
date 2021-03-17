import Page from './page';

class ShoesPage extends Page{
    get promoBanner() {
        return $('section.b-promobanner');
    }
    get infoTitle() {
        return $('.b-promobanner__info-title');
    }
    get shopBtn() {
        return $('.b-promobanner__info-btn');
    }
    get shoesCategoryList() {
        return $$('section[id="s0-16-13-0-1[0]-0-0"] ul li');
    }
    get fashionList() {
        return $('#gh-shop');
    }
    get manShoesList() {
        return $('#gh-sbc-o a[href*=Shoes]');
    }
    open() {
        super.open('/')
    }
    getShoesCategoryListText() {
        const shoesList = [];
        this.shoesCategoryList.map((element) => 
            shoesList.push(element.getText())      
        );
        return shoesList;
    }
         
    

}
export default new ShoesPage();