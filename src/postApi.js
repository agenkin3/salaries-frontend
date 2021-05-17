class PostApi {
  static baseURL = 'http://localhost:3000/api/v1/posts'
  
  static getPosts() {
    fetch(this.baseURL) 
      .then(res => res.json())
      .then(data => {
        data.forEach(post => {
          const p = new Post({
            id: post.id, title: post.title, salary: post.salary, details: post.details
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
  static createPost(newTitle, newSalary, newDetails, newIndustry) {
    const configObj = {
      method: 'POST',
      headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
      },
      body: JSON.stringify({
        title: newTitle,
        salary: newSalary,
        details: newDetails,
        industry: newIndustry
      })
    }
    
return fetch(this.baseURL, configObj) 
    //this line  
      .then(res => res.json())
      .then(data => {
        //const post = data.data
        const np = new Post({
          title: newTitle, salary: newSalary, details: newDetails
          })
          np.attachToDom()
      })
  
}


 // data.forEach(post => {
        //   const np = new Post({
        //     title: this.title,salary: this.salary, details: this.details
        //   })
        //   np.attachToDom()