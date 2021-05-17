import ShareButton from './ShareButton';

const shareButton = new ShareButton('https://www.youtube.com/channel/UC_tzt1tZZSu827c20tTgpMw/videos');

shareButton.bind(".btn-twitter", "twitter");
shareButton.bind(".btn-facebook", "facebook");
shareButton.bind(".btn-linkedin", "linkedin");