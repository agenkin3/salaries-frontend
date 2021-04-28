class PostApi {
  static baseURL = 'http://localhost:3000/api/v1/posts'

  static getPosts() {
    fetch(this.baseURL) 
    .then(res => res.json())
    // console log to debug
    .then(json => console.log(json))
    .then(json => {
      json.forEach(post => {
        const p = new Post({id: post.id, ...post.attributes})
        // won't log to console...this is where we error
        console.log(p)
      })
    })
  }
}