export default interface IEventHandler {
    addEventListenerToClass(className: string, event: string, fn: any): void;
}