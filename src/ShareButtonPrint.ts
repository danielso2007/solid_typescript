import AbstractShareButton from './AbstractShareButton';
import IEventHandler from './IEventHandler';

export default class ShareButtonPrint extends AbstractShareButton {

    constructor(eventHandler: IEventHandler, className: string) {
        super(eventHandler, className);
    }

    createAction() {
        return () => window.print();
    }

}