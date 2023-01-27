declare const WCLikesLangs: {
    ru: {
        alreadyLike: string;
        likeError: string;
        likeNeedAuth: string;
    };
    en: {
        alreadyLike: string;
        likeError: string;
        likeNeedAuth: string;
    };
};
type WCLikesPhrasesKey = keyof typeof WCLikesLangs;
type WCLikesLang = typeof WCLikesLangs[WCLikesPhrasesKey];
declare class WCLikes extends HTMLElement {
    Liked: boolean;
    LikesRendered: boolean;
    LikesCount: number;
    LikesFetch: boolean;
    LikesCountNode: Node;
    LikesIcon: HTMLElement;
    LikesPhrases: WCLikesLang;
    LikesPhrasesLang: WCLikesPhrasesKey | string;
    constructor();
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    valueOf(): number;
    connectedCallback(): void;
    buildElement(): void;
    fetchSubmitLikes(): Promise<Number>;
    fetchAsyncLikes(params: any): Promise<Number>;
    onLikesSubmit(ev: Event): Promise<void>;
}
export default WCLikes;
//# sourceMappingURL=wc-likes.d.ts.map