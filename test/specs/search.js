import SearchPage from '../pageobjects/search.page';
import { waitForTextChange } from '../utilities/helper';
import resources from '../resources/index'

describe('Ebay Product Search', () =>{
    it('should open the main url and verify the title' , () => {
        SearchPage.open();
        expect(browser).toHaveTitle(resources.hometitle);
    });

    it('should search for a product and verify the search text value', () =>{
        SearchPage.searchIput.addValue('Laptop');
        SearchPage.searchBtn.click();

        expect(SearchPage.searchIput).toHaveValue('Laptop');
    });

    it('should redirect to a new page and verify the title' , () =>{
        expect(browser).toHaveTitle(resources.laptoptitle);
    });

    it('should update the search category' , () =>{
        waitForTextChange(SearchPage.catergory, 'PC Laptops & Netbooks', 3000);
        expect(SearchPage.catergory).toHaveText('PC Laptops & Netbooks');
    })
});