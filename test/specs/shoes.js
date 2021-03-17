import { expect as chaiExpect } from 'chai';
import ShoesPage from '../pageobjects/shoes.page';
import { waitAndClick } from '../utilities/helper'
import resources from '../resources'

describe('Jewelry Page', () => {
    before(() => {
        ShoesPage.open();
        waitAndClick(ShoesPage.fashionList , 5000);
        // browser.pause(1000); // Implicit Wait
        waitAndClick(ShoesPage.manShoesList, 5000);
    });

    it('should verify the shoes category list', () => {
        const shoesCategoryList = ShoesPage.getShoesCategoryListText();
        chaiExpect(shoesCategoryList).to.deep.equal(
            resources.shoesList
        );
    });

    it('should show the banner container', () => {
        expect(ShoesPage.promoBanner).toBeDisplayed();
    });

    it('should show the banner title', () => {
        expect(ShoesPage.infoTitle).toHaveTextContaining('Seasonal');
    });

    it('should contain link on banner button and verify its clickable', () => {
        expect(ShoesPage.shopBtn).toHaveLinkContaining('/globaldeals/');
        expect(ShoesPage.shopBtn).toBeClickable();
    });
    
    it('should click on the shop button and verify the the new url', () => {
        ShoesPage.shopBtn.click();

        const url = browser.getUrl();
        chaiExpect(url).to.include('/globaldeals/');
    });
});