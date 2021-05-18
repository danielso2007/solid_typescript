import EventHandler from '../src/EventHandler';
import { JSDOM } from 'jsdom';

declare global {
    namespace NodeJS {
        interface Global {
            document: Document;
            window: Window;
            navigator: Navigator;
        }
    }
}

const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.document = window.document;
global.window = global.document.defaultView;

let testFn: any;
let eventHandler: EventHandler;

beforeAll(() => {
    testFn = jest.fn()
    eventHandler = new EventHandler();
});

test('Test EventHandler addEventListenerToClass', () => {
    expect(eventHandler.addEventListenerToClass(".btn-twitter", "twitter", testFn));
});