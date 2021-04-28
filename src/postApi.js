class PostApi {
  static baseURL = 'http://localhost:3000/api/v1/posts'

  static getPosts() {
    fetch(this.baseURL) 
    .then(res => res.json())
    // console log to debug
    //.then(json => console.log(json))
    .then(data => {
      data.forEach(post => {
        const p = new Post({id: post.id, title: post.title, salary: post.salary, industryId: post.industry_id})
        // won't log to console...this is where we error
        console.log(p)
      })
    })
  }
}