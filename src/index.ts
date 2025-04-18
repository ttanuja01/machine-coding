import * as readline from 'readline';
import { getParsedValues } from './util';
import { Controller } from './Controller';

const r= readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    terminal:false
})

const actionController = new Controller();

//on start this keeps listening to input from console
//DUE TO TIME CONTRAINTS I WAS unable to prase arguments properly please give input in below format,separated by pipe
//examples: CREATE_USER|“Laxman”
//ADD_FOLLOWERS|“Gopal”|“Madhav”|”Lucky”|”Laxman”
r.on('line',(input:string)=>{
    if(input.toLowerCase()==="exit")r.close();
    const args = input.split("|")
    switch(args[0]){
        case "CREATE_USER":
            actionController.userService.createUser(args[1]);
            return;
        case "ADD_FOLLOWERS":
            const followers = args.splice(2)
            actionController.userService.addFollowers(args[1],followers);
            return;
        case "POST_TWEET":
            actionController.tweetService.postTweet(args[1],args[2]);
            return;
        case "GET_USER_TWEETS_BY_USER_NAME":
            actionController.tweetService.getUserTweets(args[1]);
            return;
        case "GET_USER_FEED_BY_USER_NAME":
            actionController.tweetService.getUserFeed(args[1]);
            return;
        case "HIDE_TWEET_FOR_USER_BY_TWEETID":
            actionController.tweetService.hideTweetForUser(args[1],Number(args[2]));
            return;
        case "DELETE_TWEET_BY_TWEETID":
            actionController.tweetService.deleteTweet(Number(args[1]));
            return;
        default:
            console.log("invalid action input",args[0])
            return;
    }
})