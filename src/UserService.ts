import { User } from "./User";

export class UserService{
    public users:Map<string,User>=new Map();

    createUser(name:string){
        const user= new User(name);
        if(this.users.has(name)){
             console.log("user already exists"+ name)
             return;
        }
        this.users.set(user.name,user);
        console.log(this.users,"ok");
    }

    addFollowers(userName:string,followers:string[]){
        if(this.users.has(userName)){
            this.users.get(userName)?.ADD_FOLLOWERS(followers);
            console.log(this.users.get(userName)?.followers,"followers ok");
        }else{
             console.log("given follower is invalid"+ userName)
        }
    }
    getUserTweets(userName:string){
       if(this.users.has(userName)){
        return this.users.get(userName)?.GET_TwEETS();
    }
    else{
         console.log("given follower is invalid"+ userName)
    }
    }
    getUser(userName:string){
         if(this.users.has(userName)){
           return this.users.get(userName)
        }
        else{
             console.log("given follower is invalid"+ userName)
        }
    }
}