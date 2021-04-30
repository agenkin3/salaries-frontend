class PostApi {
  static baseURL = 'http://localhost:3000/api/v1/posts'

  static getPosts() {
    fetch(this.baseURL) 
    .then(res => res.json())
    // console log to debug
    //.then(json => console.log(json))
    .then(data => {
      data.forEach(post => {
        const p = new Post({id: post.id, title: post.title, salary: post.salary, details: post.details, industryId: post.industry_id})
        p.attachToDom()
      })
    })
  }


  // static getIndustries() {
  //   fetch(this.baseURL) 
  //   .then(res => res.json())
  //   // console log to debug
  //   //.then(json => console.log(json))
  //   .then(data => {
  //     data.forEach(industry => {
  //       const i = new Industry({id: industry.id, name: industry.name, description: industry.description})
  //       i.attachToDom()
  //     })
  //   })
  // }


  static deletePost(id){
    const configObj = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    }
    
    fetch(`${this.baseURL}/${id}`, configObj)
        .then(r => r.json())
        .then(json => alert(json.message))
}
}