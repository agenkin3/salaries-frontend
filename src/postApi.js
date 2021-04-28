class PostApi {
  static baseURL = 'http://localhost:3000/api/v1/posts'

  static getPosts() {
    fetch(this.baseURL) 
    .then(res => console.log(res))
    .then (res => res.json ()) 
    .then ( json => {
      json["data"].forEach(element => {
        const p = new Post({id: element.id, ...element.attributes})
        p.attachToDom()
      })
    })
  }
}