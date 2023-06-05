const postsData=require("../data/postsData.js");//import postData
const posts=postsData.posts;//extracts posts from import

//example library that pretends its connected to database
class Database{
    constructor(){
        this.id=Date.now();
    }

    #log=(value)=>{
        console.log(`[Database: ${this.id}]: ${value}`)
    }

    //returns all posts
    posts(){
        this.#log('all')
        return this.posts;
    }

    //returns post by id
    postsById(id){
        this.#log(id)
        const result=posts.filter((post)=>{
            if(post.id===id){
                return post;
            }
        })
        return result;
    }

    //add Post
    addPost(data){
        this.#log(data.title)
        const newId=`${posts.length++}`//creates new id number
        const newName=data.name;
        const newTitle=data.title;
        const newContent=data.content;

        //make new object
        const newPost={
            id:newId,name:newName,title:newTitle,content:newContent
        }

        posts.push(newPost);

        return posts.length;
    }
}

module.exports=Database;