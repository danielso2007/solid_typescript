import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedin from './ShareButtonLinkedin';

const twitter = new ShareButtonTwitter('.btn-twitter', 'https://www.youtube.com/channel/UC_tzt1tZZSu827c20tTgpMw/videos');
twitter.bind();

const facebook = new ShareButtonFacebook('.btn-facebook', 'https://www.youtube.com/channel/UC_tzt1tZZSu827c20tTgpMw/videos');
facebook.bind();

const linkedin = new ShareButtonLinkedin('.btn-linkedin', 'https://www.youtube.com/channel/UC_tzt1tZZSu827c20tTgpMw/videos');
linkedin.bind();