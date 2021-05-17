export default class ShareButton {

    url: string;

    constructor(url: string) {
        this.url = url;
    }

    bind(className: string, linkNetwork: string) {
        let link: string;
        if (linkNetwork === 'twitter') {
            link = `https://twitter.com/share?url=${this.url}`;
        }
        if (linkNetwork === 'facebook') {
            link = `https://www.facebook.com/share.php?u=${this.url}`;
        }
        if (linkNetwork === 'linkedin') {
            link = `https://www.linkedin.com/shareArticle?url=${this.url}`;
        }
        const elements: any = document.querySelectorAll(className);
        for (const element of elements) {
            element.addEventListener("click", () => window.open(link));
        }
    }

}