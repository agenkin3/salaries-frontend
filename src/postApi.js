class PostApi {
  static baseURL = 'http://localhost:3000/api/v1/posts'
  
  static getPosts() {
    fetch(this.baseURL) 
      .then(res => res.json())
      .then(data => {
        data.forEach(post => {
          const p = new Post({
            id: post.id, title: post.title, salary: post.salary, details: post.details, industryId: post.industryId
          })
          p.attachToDom()
        })
      })
  }

  static deletePost(id){
    const configObj = {
      method: 'DELETE',
      headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
      }
    }
    let postURL = `${this.baseURL}/${id}`
    fetch(postURL, configObj)
    .then(response => response.json())
    .then(data => console.log(data))
  }

  // take user input and send to backend      
  static createPost(title, salary, details, industry) {

    const configObj = {
      method: 'POST',
      headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      },
      body: JSON.stringify({
        title: title,
        salary: salary,
        details: details,
        industry_id: industry,
      })
    }
    
 fetch(this.baseURL, configObj)
      //.then(response => 
    //.then(response => response.json())
      .then(data =>  {
        const np = new Post ({
          title: title, salary: salary, details: details, industryId: industry
          })
          np.attachToDom()
      })
  
}}


 // data.forEach(post => {
        //   const np = new Post({
        //     title: this.title,salary: this.salary, details: this.details
        //   })
        //   np.attachToDom()