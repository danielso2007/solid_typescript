import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedin from './ShareButtonLinkedin';
import ShareButtonPrint from './ShareButtonPrint';
import AbstractShareButton from './AbstractShareButton';

const url = 'https://www.youtube.com/channel/UC_tzt1tZZSu827c20tTgpMw/videos';

const twitter: AbstractShareButton = new ShareButtonTwitter('.btn-twitter', url);
twitter.bind();

const facebook: AbstractShareButton = new ShareButtonFacebook('.btn-facebook', url);
facebook.bind();

const linkedin: AbstractShareButton = new ShareButtonLinkedin('.btn-linkedin', url);
linkedin.bind();

const print: AbstractShareButton = new ShareButtonPrint('.btn-print');
print.bind();