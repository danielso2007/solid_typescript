/**
 * Classe ouvinte de eventos da aplicação.
 */
export default class EventHandler {

    /**
     * Manipulador de eventos.
     * @param className
     * @param event 
     * @param fn 
     */
    addEventListenerToClass(className: string, event: string, fn: any) {
        console.log('EventHandler::addEventListenerToClass', className);
        const elements: any = document.querySelectorAll(className);
        for (const element of elements) {
            element.addEventListener(event, fn);
        }
    }

}