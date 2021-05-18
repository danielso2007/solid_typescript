import EventHandler from './EventHandler';

export default abstract class AbstractShareButton {

    eventHandler: EventHandler;
    className: string;

    constructor(className: string) {
        this.className = className;
        this.eventHandler = new EventHandler();
    }

    abstract createAction(): any;

    bind() {
        const action = this.createAction();
        
        this.eventHandler.addEventListenerToClass(this.className, "click", action);
    }

}