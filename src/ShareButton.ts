import EventHandler from './EventHandler';

export default class ShareButton {

    eventHandler: EventHandler;
    url: string;

    constructor(url: string) {
        this.url = url;
        this.eventHandler = new EventHandler();
    }

    bind(className: string, linkNetwork: string) {
        let link: string;
        if (linkNetwork === 'twitter') {
            link = `https://twitter.com/share?url=${this.url}`;
        }
        if (linkNetwork === 'facebook') {
            link = `https://www.facebook.com/share.php?u=${this.url}`;
        }
        if (linkNetwork === 'linkedin') {
            link = `https://www.linkedin.com/shareArticle?url=${this.url}`;
        }
        
        this.eventHandler.addEventListenerToClass(className, "click", () => window.open(link))
    }

}