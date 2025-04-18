export class Tweet{
    public id:number=0;
    public tweet:string="";
    public authorName:string="";
    constructor(id:number,authorName:string,text:string){
        this.id=id;
        this.authorName=authorName;
        this.tweet=text;
    }
}