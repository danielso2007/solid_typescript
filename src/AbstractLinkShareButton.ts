import AbstractShareButton from './AbstractShareButton';
import IEventHandler from './IEventHandler';

export default abstract class AbstractLinkShareButton extends AbstractShareButton {

    url: string;

    constructor(eventHandler: IEventHandler, className: string, url: string) {
        super(eventHandler, className);
        this.url = url;
    }

    abstract createLink(): string;

    createAction(): any {
        const link = this.createLink();
        return () => window.open(link);
    }

}