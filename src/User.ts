import { Tweet } from "./Tweet";

export class User{
    public name:string="";
    private tweets:Map<number,Tweet>=new Map();
    public followers : Set<string>=new Set();
    public following : Set<string>=new Set();
    private hiddenTweetIdsPerUser :Set<number>= new Set();

    constructor(name:string){
        this.name = name;
    }

    ADD_FOLLOWERS(followers:string[]){
        followers.forEach((follower)=>{
            if(this.followers.has(follower)){
                console.log(follower+ "is a already a follower of"+ this.name);
                return;
            }
            this.followers.add(follower);
        })
    }
    POST_TWEET(tweet:Tweet){
        this.tweets.set(tweet.id,tweet);
    }
    GET_TwEETS():Tweet[]{
        const tweets:Tweet[]=[]
         this.tweets.forEach((tweet)=>{
            tweets.push(tweet)
        });
        return tweets;
    }
    GET_FEED():string[]{
        const tweets:string[]=[]
         this.tweets.forEach((tweet)=>{
            tweets.push(tweet.tweet)
        });
        return tweets;
    }
    HIDE_TWEET_FOR_USER_BY_TWEETID(id:number){
        this.hiddenTweetIdsPerUser.add(id)
    }
    isTweetHidden(id:number){
    if(this.tweets.get(id) == undefined) return false;
    return true;
    }

    deleteTweet(id:number){
        if(!this.tweets.delete(id)) return "tweet id invalid";
        return "tweet deleted";
        }

}