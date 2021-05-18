import ShareButtonFacebook from '../src/ShareButtonFacebook';
import ShareButtonLinkedin from '../src/ShareButtonLinkedin';
import ShareButtonTwitter from '../src/ShareButtonTwitter';

import { JSDOM } from 'jsdom';

declare global {
    namespace NodeJS {
        interface Global {
            document: Document;
            window: Window;
            navigator: Navigator;
        }
    }
}

const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.document = window.document;
global.window = global.document.defaultView;


describe('Testing AbstractShareButton', () => {
    
    test('New ShareButtonFacebook', () => {
        let urlTest = "https://teste.com";
        let shareButton = new ShareButtonFacebook(".btn-facebook", urlTest);
        expect(shareButton.createLink()).toEqual(`https://www.facebook.com/share.php?u=${urlTest}`);
        expect(shareButton.bind());
    });

    test('New ShareButtonLinkedin', () => {
        let urlTest = "https://teste2.com";
        let shareButton = new ShareButtonLinkedin(".btn-linkedin", urlTest);
        expect(shareButton.createLink()).toEqual(`https://www.linkedin.com/shareArticle?url=${urlTest}`);
        expect(shareButton.bind());
    });

    test('New ShareButtonTwitter', () => {
        let urlTest = "https://teste.com";
        let shareButton = new ShareButtonTwitter(".btn-twitter", urlTest);
        expect(shareButton.createLink()).toEqual(`https://twitter.com/share?url=${urlTest}`);
        expect(shareButton.bind());
    });

});
