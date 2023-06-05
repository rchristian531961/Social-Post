function getAllPosts(){
    fetch('/feeds')
    .then((res)=>res.json())//recieves response from server parse json
    .then((data)=>{
        // console.log(data);
        const postList=document.querySelector('#post-list')
        let postsHTML="";
        for (let post of data){
            let postHTML=`
            <div id="post-template">
            <div class="post">
                <div class="post-body">
                    <div class="post-name">${post.name}</div>
                    <div class="post-title">${post.title}</div>
                    <div class="post-text">${post.text}</div>
                </div>
            </div>
        </div>
        `

        postsHTML+=postHTML;
        }
    postList.innerHTML=postsHTML;
    })
}