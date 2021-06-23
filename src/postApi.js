class PostApi {
  static baseURL = 'http://localhost:3000/api/v1/posts'
  
  static getPosts() {
    fetch(this.baseURL) 
      .then(res => res.json())
      .then(data => {
        data.data.forEach(post => {
          const p = new Post({
            //id: post.id, 
            title: post.attributes.title, 
            salary: post.attributes.salary, 
            details: post.attributes.details, 
            industry: post.attributes.industry.name
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
      "Accept": "application/json",
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
    .then(response => response.json())
      .then(post =>  {
        const np = new Post ({
         // post.data.attributes.industry.name
          title: post.data.attributes.title, 
          salary: post.data.attributes.salary, 
          details: post.data.attributes.details, 
          industry: post.data.attributes.industry.name
          })
          np.attachToDom()
      })
  
}}