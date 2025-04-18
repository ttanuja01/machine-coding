import { Tweet } from "./Tweet";
import { UserService } from "./UserService";

export class TweetService{
    private tweetId:number =1;
    private allTweets:Map<number,Tweet>=new Map();
    private userService:UserService;
    constructor(userService:UserService){
        this.userService=userService;
    }
    postTweet(tweet:string,author:string){
        if(!this.userService.users.has(author)){
            console.log("user invalid"+ author)
        }
        this.tweetId++;
        const tweetObj= new Tweet(this.tweetId,author,tweet);
        this.allTweets.set(this.tweetId,tweetObj);
        this.userService.getUser(author)?.POST_TWEET(tweetObj)
        console.log(tweetObj.tweet,tweetObj.id,"post")
    }
    getUserTweets(userName:string){
        if(!this.userService.users.has(userName)){
             console.log("user invalid"+ userName)
        }
         if(!this.userService.getUserTweets(userName)){
            console.log("no tweets");
         }else{
            this.userService.getUserTweets(userName)?.forEach(tweet=>{
                console.log(tweet);
            })
         }
    }
    getUserFeed(userName:string){
        if(!this.userService.users.has(userName)){
             console.log("user invalid"+ userName)
        }
        const user =  this.userService.getUser(userName);
        const followers=user?.followers;
        let alltweets:Tweet[]=[];
        followers?.forEach((follower)=>{
            const tweets= this.userService.getUserTweets(follower);
            if(tweets)
           alltweets=[...alltweets,...tweets]
        })
       alltweets.map((tweet)=>{
        if(!user?.isTweetHidden(tweet.id))return tweet.tweet;
       })
    }
    hideTweetForUser(userName:string,tweetId:number){
        if(!this.userService.users.has(userName)){
             console.log("user invalid"+ userName)
        }
        const user =  this.userService.getUser(userName);
        user?.HIDE_TWEET_FOR_USER_BY_TWEETID(tweetId);
    }
    deleteTweet(tweetId:number){
        this.allTweets.delete(tweetId);
        console.log("deleted");
    }

}