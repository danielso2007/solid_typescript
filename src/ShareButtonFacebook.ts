import AbstractLinkShareButton from './AbstractLinkShareButton';
import IEventHandler from './IEventHandler';

export default class ShareButtonFacebook extends AbstractLinkShareButton {

    constructor(eventHandler: IEventHandler, className: string, url: string) {
        super(eventHandler, className, url);
    }

    createLink(): string {
        return `https://www.facebook.com/share.php?u=${this.url}`;
    }

}