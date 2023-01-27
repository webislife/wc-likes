import WCLikes from './wc-likes.js'; //use .js type for single style import after tsc build
//THIS is frontend part of code for wordpess integration - just for demo extend wc-likes
//this code used in webislife.ru integration in post likes
const API = (path:string, params:any) => {}; //abstract API

class WCLikesPost extends WCLikes {
    
    initialState:WPA["State"]

    constructor() {
        super();
    }

    connectedCallback(): void {
        this.fetchAsyncLikes();
        const initialState:WPA["State"] = window.__WPA.State;
        if(initialState.userLogged === false) {
            this.classList.add('-auth');
            this.setAttribute('data-hint', 'Need auth');
            this.LikesIcon.onpointerup = null;
        }
    }
    /**
     * Submit post like
     */
    async fetchSubmitLikes():Promise<Number> {
        const post_id = +this.getAttribute('data-post-id');
        const likesCountResponseJson = await API('/wp-json/wlapi/wc-likes/post', {
            method: 'POST',
            body: JSON.stringify({post_id})
        });
        if(likesCountResponseJson.error === 'alreadyVoted' && likesCountResponseJson.success == false) {
            this.Liked = true;
            this.setAttribute('data-hint', 'Вы уже лайкали этот пост');
            
        }
        return likesCountResponseJson.success === true ? 200 : likesCountResponseJson.code;
    }

    /**
     * Fetch likes count
     */
    async fetchAsyncLikes(params?:any):Promise<Number> {
        this.setAttribute('fetch', '1');
        const post_id = +this.getAttribute('data-post-id')
        const likesCountResponseJson = await API('/wp-json/wlapi/wc-likes/get-by-post', {
            method: 'POST',
            body: JSON.stringify({post_id})
        });
        this.removeAttribute('fetch');
        this.setAttribute('value', likesCountResponseJson.count);
        return likesCountResponseJson.count;
    }
}
window.customElements.define('wc-likes-post', WCLikesPost);
export default WCLikesPost;