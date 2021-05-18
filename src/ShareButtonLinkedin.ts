import AbstractLinkShareButton from './AbstractLinkShareButton';
import IEventHandler from './IEventHandler';

export default class ShareButtonLinkedin extends AbstractLinkShareButton {

    constructor(eventHandler: IEventHandler, className: string, url: string) {
        super(eventHandler, className, url);
    }

    createLink(): string {
        return `https://www.linkedin.com/shareArticle?url=${this.url}`;
    }

}