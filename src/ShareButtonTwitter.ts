import AbstractLinkShareButton from './AbstractLinkShareButton';
import IEventHandler from './IEventHandler';

export default class ShareButtonTwitter extends AbstractLinkShareButton {

    constructor(eventHandler: IEventHandler, className: string, url: string) {
        super(eventHandler, className, url);
    }

    createLink(): string {
        return `https://twitter.com/share?url=${this.url}`;
    }

}