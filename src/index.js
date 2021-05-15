const allposts = document.getElementById("post-list")
const allindustries = document.getElementById("industry-list")
const form = document.getElementById("post-form")


IndustryApi.getIndustries()
PostApi.getPosts()
//different from function in relation to hoisting 
form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('calling create post')
    Post.createPost(e);
})
  