import ShareButton from '../src/ShareButton';

let ulr_test: string;
let shareButton: ShareButton;

beforeAll(() => {
    ulr_test = 'https://www.youtube.com/channel/UC_tzt1tZZSu827c20tTgpMw/videos';
    shareButton = new ShareButton(ulr_test);
});

describe('testing ShareButton', () => {
    
    test('New ShareButton', () => {
        expect(shareButton.url).toEqual(ulr_test);
    });

    test('EventHandler not null', () => {
        expect(shareButton).not.toBeNull()
    });
});
