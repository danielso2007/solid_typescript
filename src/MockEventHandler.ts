import IEventHandler from './IEventHandler';
/**
 * Classe ouvinte de eventos da aplicação.
 */
export default class MockEventHandler implements IEventHandler {

    /**
     * Manipulador de eventos.
     * @param className
     * @param event 
     * @param fn 
     */
    addEventListenerToClass(className: string, event: string, fn: any) {
        console.log('Mock', 'EventHandler::addEventListenerToClass', className);
    }

}