let title = document.querySelector("#new-post-title").value
let salary = document.querySelector("#new-post-salary").value
let details = document.querySelector("#new-post-details").value
class PostApi {
  static baseURL = 'http://localhost:3000/api/v1/posts'
  


    static getPosts() {
      fetch(this.baseURL) 
        .then(res => res.json())
        .then(data => {
          data.forEach(post => {
            const p = new Post({
              id: post.id, title: post.title, salary: post.salary, details: post.details, industryId: post.industry_id
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
        Accept: "application/json"
        }
      }
    }
    // take user input and send to backend       
    static createPost(e) {
      const configObj = {
        method: 'POST',
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
        }
      }
        fetch(this.baseURL) 
        .then(res => res.json())
        .then(data => {
          data.forEach(post => {
            const np = new Post({
             title: this.title, salary: this.salary, details: this.details
            })
            np.attachToDom()
          })
        })
    }

  }