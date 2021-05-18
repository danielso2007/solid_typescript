import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedin from './ShareButtonLinkedin';
import ShareButtonPrint from './ShareButtonPrint';
import AbstractShareButton from './AbstractShareButton';
import DOMEventHandler from './DOMEventHandler';
// import MockEventHandler from './MockEventHandler';

const url = 'https://www.youtube.com/channel/UC_tzt1tZZSu827c20tTgpMw/videos';
const eventHandler = new DOMEventHandler();
// const eventHandler = new MockEventHandler();

const twitter: AbstractShareButton = new ShareButtonTwitter(eventHandler, '.btn-twitter', url);
twitter.bind();

const facebook: AbstractShareButton = new ShareButtonFacebook(eventHandler, '.btn-facebook', url);
facebook.bind();

const linkedin: AbstractShareButton = new ShareButtonLinkedin(eventHandler, '.btn-linkedin', url);
linkedin.bind();

const print: AbstractShareButton = new ShareButtonPrint(eventHandler, '.btn-print');
print.bind();