/**
 * WC-Likes web-component
 * author https://strokoff.ru/
 * Default languages pack
 */
 const WCLikesLangs = {
    ru: {
        alreadyLike: 'Вы уже лайкнули',
        likeError: 'Ошибка отправки лайка :(',
        likeNeedAuth: 'Нужна авторизация',
    },
    en: {
        alreadyLike: 'You already like',
        likeError: 'Like error :(',
        likeNeedAuth: 'Login before like',
    }
};

type WCLikesPhrasesKey = keyof typeof WCLikesLangs;
type WCLikesLang = typeof WCLikesLangs[WCLikesPhrasesKey];
/**
 * Web-component wc-likes
 */
 class WCLikes extends HTMLElement {

    public Liked:boolean = false
    public LikesRendered:boolean = false
    public LikesCount:number = 0
    public LikesFetch:boolean = false
    public LikesDisabled:boolean = false
    public LikesCountNode:Node
    public LikesIcon:HTMLElement
    public LikesPhrases:WCLikesLang
    public LikesPhrasesLang:WCLikesPhrasesKey

    constructor() {
        super();
        
        this.LikesIcon = document.createElement('button');
        this.LikesCount = Number(this.getAttribute('value'));
        this.Liked = this.getAttribute('liked') === 'true';
        this.LikesFetch = this.getAttribute('fetch') === 'true';
        this.LikesDisabled = this.getAttribute('disabled') === 'true';
        this.LikesPhrasesLang = this.getAttribute('lang') as WCLikesPhrasesKey || 'en';
        this.LikesPhrases = WCLikesLangs[this.LikesPhrasesLang] as WCLikesLang;
        this.LikesCountNode = document.createTextNode(String(this.LikesCount));
        this.classList.add('wc-likes');
    }
    static get observedAttributes() {
        return ['value', 'liked', 'fetch', 'disabled'];
    }
    /**
     * Attributes handler
     */
    attributeChangedCallback(name:string, oldValue:string|null, newValue:string|null):void {
        switch (name) {
            case 'value':
                this.LikesCount = Number(newValue);
                if(this.LikesRendered) {
                    this.LikesCountNode.nodeValue = String(newValue);
                }
                break;
            case 'liked':
                this.classList.toggle('-liked', String(newValue) === 'true');
                break;
            case 'fetch':
                this.classList.toggle('-fetch', String(newValue) === 'true' || String(newValue) === '1');
                break;
            case 'disabled':
                this.classList.toggle('-disabled', String(newValue) === 'true');
                break;
            default:
                break;
        }
    }
    /**
     * onmount component logic
     */
    connectedCallback() {
        if(this.LikesRendered === false) {
            this.buildElement();
            this.LikesRendered = true;
        }
    }
    /**
     * build like web-component html node elements
     */
    buildElement() {
        
        //Like SVG icon - you can customize it here
        this.LikesIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path xmlns="http://www.w3.org/2000/svg" d="M16.44 3.10156C14.63 3.10156 13.01 3.98156 12 5.33156C10.99 3.98156 9.37 3.10156 7.56 3.10156C4.49 3.10156 2 5.60156 2 8.69156C2 9.88156 2.19 10.9816 2.52 12.0016C4.1 17.0016 8.97 19.9916 11.38 20.8116C11.72 20.9316 12.28 20.9316 12.62 20.8116C15.03 19.9916 19.9 17.0016 21.48 12.0016C21.81 10.9816 22 9.88156 22 8.69156C22 5.60156 19.51 3.10156 16.44 3.10156Z"/></svg>';
        this.LikesIcon.onpointerup = ev => this.onLikesSubmit(ev);
        this.LikesCountNode = document.createTextNode(`${this.LikesCount}`);
        // if(this.Liked) {
        //     this.classList.add('-liked');
        // }
        // if(this.LikesFetch) {
        //     this.classList.add('-fetch');
        // }
        this.append(this.LikesIcon);
        this.append(this.LikesCountNode);
    }
    /**
     * ABSTRACT METHOD NEEDS YOUR IMPLEMENTATION SEE wc-likes-post.ts example
     * submitLike to backend
     */
    async fetchSubmitLikes() {
        
        const PromiseAPIStatus:number = await new Promise((resolve, reject) => {
            setTimeout(() => resolve(200), 1000);
        });
        return PromiseAPIStatus;
    }

    /**
     * ABSTRACT METHOD NEEDS YOUR IMPLEMENTATION SEE wc-likes-post.ts example
     * fetch likes count from backend
     */
    async fetchAsyncLikes(params:any) {
        
        const PromiseAPIStatus:number = await new Promise((resolve, reject) => {
            setTimeout(() => resolve(200), 1000);
        });
        return PromiseAPIStatus;
    }

    /**
     * Submit likes logic
     * @param ev
     */
    async onLikesSubmit(ev:Event) {{
        if(this.Liked) {
            this.setAttribute('data-hint', this.LikesPhrases.alreadyLike);
            return;
        }
        this.setAttribute('fetch', '1');
        const fetchLikesStatus = await this.fetchSubmitLikes().catch(err => {
            this.setAttribute('data-hint', err.toString());
        });
        this.removeAttribute('fetch');
        switch (fetchLikesStatus) {
            case 200:
                const newCount = this.LikesCount + 1;
                this.setAttribute('value', String(newCount));
                this.setAttribute('liked', String(1));
                break;
        
            default:
                this.setAttribute('data-hint', this.LikesPhrases.likeError);
                break;
        }
    }};
}

export default WCLikes;