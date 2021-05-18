import AbstractLinkShareButton from './AbstractLinkShareButton';

export default class ShareButtonLinkedin extends AbstractLinkShareButton {

    constructor(className: string, url: string) {
        super(className, url);
    }

    createLink(): string {
        return `https://www.linkedin.com/shareArticle?url=${this.url}`;
    }

}