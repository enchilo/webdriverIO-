import { expect as chaiExpect ,assert} from 'chai';
import 'chai/register-should';


describe('Jewelry Page', () => {
    it('should show the banner container', () => {
        browser.url('https://www.ebay.com/b/Shoes/bn_7000259122');
        const promoBanner = $('section.b-promobanner')
        expect(promoBanner).toBeDisplayed();
    });

    it('should show the banner title', () => {
        const infoTitle = $('.b-promobanner__info-title');
        const infoTitleText = infoTitle.getText();

        expect(infoTitle).toHaveTextContaining('Seasonal');
        chaiExpect(infoTitleText).to.not.be.empty;
        infoTitle.should.not.be.empty;
        assert.isNotEmpty(infoTitleText);
    });

    it('should contain link on banner button and verify its clickable', () => {
        const shopBtn = $('.b-promobanner__info-btn');
        const tag = shopBtn.getTagName();

        expect(shopBtn).toHaveLinkContaining('/globaldeals/');
        expect(shopBtn).toBeClickable();
        chaiExpect(tag).to.equal('a');
        tag.should.be.equal('a');
    });
    
    it('should click on the shop button and verify the the new url', () => {
        const shopBtn = $('.b-promobanner__info-btn');
        shopBtn.click();

        const url = browser.getUrl();
        chaiExpect(url).to.include('/globaldeals/');
        expect(browser).toHaveUrl(
            'https://www.ebay.com/globaldeals/sch?_from=R40&_trksid=p2344380.m570.l1313.TR12.TRC2.A0.H0.XWomens+Boots.TRS0&_nkw=Womens+Boots&_sacat=-1&_sop='
        );
    });
});