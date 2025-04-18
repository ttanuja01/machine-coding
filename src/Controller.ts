import { TweetService } from "./TweetService";
import { UserService } from "./UserService";

export class Controller{
   public userService = new UserService();
   public  tweetService = new TweetService(this.userService);
}
