import EventHandler from '../src/DOMEventHandler';
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

const { window } = new JSDOM('<!doctype html><html><body><button class="btn-test">Test</button></body></html>');
global.document = window.document;
global.window = global.document.defaultView;

let testFn: any;
let eventHandler: EventHandler;

beforeAll(() => {
    testFn = jest.fn()
    eventHandler = new EventHandler();
});

test('Test EventHandler addEventListenerToClass', () => {
    expect(eventHandler.addEventListenerToClass(".btn-test", "twitter", testFn));
});
